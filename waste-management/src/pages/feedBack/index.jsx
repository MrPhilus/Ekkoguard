import React from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { useFormik } from "formik";
import { FeedbackForm } from "../../validations";
import Button from "../../components/button";
import { ButtonSize, ButtonState } from "../../components/button/enum";
import CustomInput from "../../components/customInputs/CustomInputs";
import TextArea from "../../components/customInputs/TextArea";
import SampleModal from "../../components/modals/SampleModal";

const Feedback = () => {
  const formik = useFormik({
    initialValues: {
      feedbackSubject: "",
      feedbackMessage: "",
    },
    validationSchema: FeedbackForm,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <AuthLayout>
      <h1 className="font-extrabold text-xl">FEEDBACK</h1>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
        <CustomInput
          name={"feedbackSubject"}
          labelText={"Subject"}
          placeholder={"Enter your subject"}
          required={true}
          type={"text"}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.feedbackSubject}
          inputError={
            formik.touched.feedbackSubject && formik.errors.feedbackSubject
          }
        />

        <TextArea
          name={"feedbackMessage"}
          onBlur={formik.handleBlur}
          required={true}
          onChange={formik.handleChange}
          value={formik.values.feedbackMessage}
          labelText={"Message"}
          placeholder={"Enter your message"}
        />

        <Button
          value={"Submit"}
          size={ButtonSize.lg}
          variant={ButtonState.PRIMARY}
          type={"Button"}
          onClick={() => formik.handleSubmit()}
          className={"w-full mt-2"}
          disabled={!formik.isValid || !formik.dirty}
        />
      </form>
      <SampleModal/>
    </AuthLayout>
  );
};

export default Feedback;
