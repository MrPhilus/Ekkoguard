import { useFormik } from "formik";
import AuthLayout from "../../components/layouts/AuthLayout";
import CustomInput from "../../components/customInputs/CustomInputs";
import ErrorFields from "../../components/error/ErrorFields";
import { SignupSchemaEmail } from "../../validations";
import Button from "../../components/button";
import { ButtonSize, ButtonState } from "../../components/button/enum";
import { showToast } from "../../utils";

const GettingStarted = () => {
  const formik = useFormik({
    initialValues: {
      organizationName: "",
      adminFirstName: "",
      adminLastName: "",
      email: "",
      password: "",
    },
    validationSchema: SignupSchemaEmail,
    onSubmit: handleSubmit,
  });

  function handleSubmit(values) {
    showToast(
      <>
        Complete Profile Error <br />
        <span className="font-normal"> Incomplete profile input fields</span>
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
        Email already in use
        <br />
        <span className="font-normal">
          {" "}
          Login to your account, if registered.
        </span>
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
        Registration Successful
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
  }

  return (
    <AuthLayout>
      <form className="flex flex-col gap-1" onSubmit={formik.handleSubmit}>
        <CustomInput
          inputError={
            formik.touched.organizationName && formik.errors.organizationName
          }
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.organizationName}
          type="text"
          labelText="Organization Name"
          placeholder={"Enter organisation name"}
          name="organizationName"
        />

        <CustomInput
          inputError={
            formik.touched.adminFirstName && formik.errors.adminFirstName
          }
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.adminFirstName}
          type="text"
          labelText="Admin First Name"
          placeholder={"Enter first name"}
          name="adminFirstName"
        />

        <CustomInput
          inputError={
            formik.touched.adminLastName && formik.errors.adminLastName
          }
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.adminLastName}
          type="text"
          labelText="Admin Last Name"
          placeholder={"Enter last name"}
          name="adminLastName"
        />

        <CustomInput
          inputError={formik.touched.email && formik.errors.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          type="email"
          labelText="Email Address"
          placeholder={"Enter email address"}
          name="email"
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

        <Button
          value={"Sign Up"}
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

export default GettingStarted;
