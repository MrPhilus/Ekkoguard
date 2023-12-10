import { useFormik } from "formik";
import AuthLayout from "../../components/layouts/AuthLayout";
import CustomInput from "../../components/customInputs/CustomInputs";
import Button from "../../components/button";
import { ButtonSize, ButtonState } from "../../components/button/enum";
import { ForgotPasswordSchema } from "../../validations";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit: handleSubmit,
  });

  function handleSubmit(values) {

    console.log(values);
    navigate("/passwordreset");
  }

  return (
    <AuthLayout>
      <form onSubmit={ formik.handleSubmit }>
        <CustomInput
          name={ "email" }
          labelText={ "Email Address" }
          placeholder={ "Enter email address" }
          required={ true }
          type={ "email" }
          onBlur={ formik.handleBlur }
          onChange={ formik.handleChange }
          value={ formik.values.email }
          inputError={ formik.touched.email && formik.errors.email }
        />

        <Button
          value={ "Reset Password" }
          size={ ButtonSize.lg }
          variant={ ButtonState.PRIMARY }
          type={ "Button" }
          onClick={ () => formik.handleSubmit() }
          className={ "w-full mt-8" }
          disabled={ !formik.isValid || !formik.dirty }
        />
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
