// import AuthLayout from "../components/layouts/AuthLayout";
import { useFormik } from "formik";
import { showToast } from "../../../src/utils";
import { PasswordResetSchema } from "../../validations";
import CustomInput from "../../components/customInputs/CustomInputs";
import ErrorFields from "../../components/error/ErrorFields";
import Button from "../../../src/components/button";
import { ButtonSize, ButtonState } from "../../../src/components/button/enum";
import { useSelector } from "react-redux";
import AuthLayout from "../../components/layouts/AuthLayout";

const PasswordReset = () => {
  const email = useSelector((state) => state.email);

  const formik = useFormik({
    initialValues: {
      email: email,
      password: "",
      confirmPassword: "",
    },
    validationSchema: PasswordResetSchema,
    onSubmit: handleSubmit,
  });

  function handleSubmit(values) {
    showToast(
      <>
        <p>Password Reset Successful</p>
        <span className="text-labels font-normal">
          {" "}
          Check your email to reset your password
        </span>
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
      <form
        className="h-screen flex flex-col gap-2"
        onSubmit={formik.handleSubmit}
      >
        <CustomInput
          inputError={formik.touched.email && formik.errors.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          type="email"
          labelText="Email Address"
          placeholder={"Enter email address"}
          name="email"
          readOnly
        />

        <CustomInput
          inputError={formik.touched.password && formik.errors.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          type="password"
          labelText="Password"
          placeholder={"Enter Password"}
          name="password"
        />

        <ErrorFields password={formik.values.password} formik={formik} />

        <CustomInput
          inputError={formik.errors.confirmPassword}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          type="password"
          labelText="Confirm Password"
          placeholder={"Confirm Password"}
          name="confirmPassword"
        />

        <Button
          value={"Reset Password"}
          size={ButtonSize.lg}
          variant={ButtonState.PRIMARY}
          type={"Button"}
          onClick={() => formik.handleSubmit()}
          className={"w-full mt-2"}
          disabled={!formik.isValid || !formik.dirty}
        />
      </form>
    </AuthLayout>
  );
};

export default PasswordReset;
