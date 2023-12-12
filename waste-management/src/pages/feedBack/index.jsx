import React, { useState } from "react";
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
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      feedbackSubject: "",
      feedbackMessage: "",
    },
    validationSchema: FeedbackForm,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true); // Set loading state to show loader

      // Simulate a 2-second delay using setTimeout
      setTimeout(() => {
        showToast(
          <>
            Message Sent <br />
          </>,
          "success",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            style: {
              backgroundColor: "rgba(0, 100%, 0, 0)",
              color: "#148519",
              fontWeight: "bold",
            },
          }
        );

        setLoading(false); // Reset loading state
        console.log(values);
        resetForm();
      }, 2000);
    },
  });

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

        <button
          className={`btn bg-olive-500 xl:btn-lg w-full capitalize mt-6 text-neutral-content`}
          disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
          type="submit"
        >
          {isLoading ? (
            <>
              <span className={`loading loading-bars`} />
            </>
          ) : (
            "Submit Message"
          )}
        </button>
      </form>
    </AuthLayout>
  );
};

export default Feedback;
