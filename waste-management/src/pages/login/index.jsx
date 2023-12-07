import { useState } from "react";
import CustomInput from "../../components/customInputs/CustomInputs";
import AuthLayout from "../../components/layouts/AuthLayout";
import Eyelash from "../../assets/svg/eyeslash.svg";
import { useFormik } from "formik";
import { ButtonSize, ButtonState } from "../../components/button/enum";
import Button from "../../components/button";
import { showToast } from "../../utils";
import { LoginSchemaEmail } from "../../validations";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchemaEmail,
    onSubmit: (values) => {
      showToast(
        <>
          Incorrect Email or Password <br />{" "}
          <span className="font-normal">Confirm your details.</span>
        </>,
        "error",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          style: {
            backgroundColor: "rgba(253, 232, 232, 1)",
            color: "rgba(200, 30, 30, 1)",
            fontWeight: "bold",
          },
        }
      );

      showToast(
        <>
          Login Successful
          <br />
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
    },
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <AuthLayout>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
        <CustomInput
          name={"email"}
          labelText={"Email Address"}
          placeholder={"Enter email address"}
          required={true}
          type={"email"}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          inputError={formik.touched.email && formik.errors.email}
        />
        <CustomInput
          name={"password"}
          labelText={"Password"}
          placeholder={"Enter password"}
          required={true}
          type={showPassword ? "text" : "password"}
          icon={<Eyelash onClick={togglePassword} />}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          inputError={formik.touched.password && formik.errors.password}
        />
        <Link to={"/forgotpassword"}>
          <span className="w-full flex justify-end text-green-500 text-sm">
            {" "}
            Forgot Password?
          </span>
        </Link>
        <Button
          value={"Sign In"}
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

export default SignIn;
