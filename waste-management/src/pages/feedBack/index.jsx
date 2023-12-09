import React from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { useFormik } from "formik";
import { FeedbackForm } from "../../validations";
import Button from "../../components/button";
import { ButtonSize, ButtonState } from "../../components/button/enum";
import CustomInput from "../../components/customInputs/CustomInputs";
import TextArea from "../../components/customInputs/TextArea";
import { showToast } from "../../utils";
import { useNavigate } from "react-router-dom";

const Feedback = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      feedbackSubject: "",
      feedbackMessage: "",
    },
    validationSchema: FeedbackForm,
    onSubmit: handleSubmit,
  });

  function handleSubmit(values) {
    showToast(
      <>
        Submitted <br />
      </>,
      "success",
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        style: {
          backgroundColor: "rgba(4, 108, 78, 0.1)",
          color: "#148519",
          fontWeight: "bold",
        },
      }
    );
    console.log(values);
  }

  return (
    <AuthLayout>
      <h1 className="font-extrabold text-xl">SUGGESTIONS OR COMPLAINS</h1>
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
          inputError={
            formik.touched.feedbackMessage && formik.errors.feedbackMessage
          }
        />

        <Button
          value={"Submit"}
          size={ButtonSize.lg}
          variant={ButtonState.PRIMARY}
          type={"Button"}
          onClick={handleSubmit}
          className={"w-full mt-2"}
          disabled={!formik.isValid || !formik.dirty}
        />
      </form>
    </AuthLayout>
  );
};

export default Feedback;
