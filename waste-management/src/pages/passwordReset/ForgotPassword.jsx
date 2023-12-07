import { useFormik } from "formik";
import AuthLayout from "../../components/layouts/AuthLayout";
import CustomInput from "../../components/customInputs/CustomInputs";
import Button from "../../components/button";
import { ButtonSize, ButtonState } from "../../components/button/enum";
import { ForgotPasswordSchema } from "../../validations";
// import { showToast } from '../../src/utils';
import { useDispatch } from "react-redux";
// import { setEmail } from "../../src/redux/actions/email.actions";
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
    // showToast(
    //   <>
    //     <p>Check Your Email </p>
    //     <span className="text-labels font-normal"> Check your email to reset your password</span>
    //   </>,
    //   'success',
    //   {
    //     position: 'top-right',
    //     autoClose: 3000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     style: {
    //       backgroundColor: 'rgba(4, 108, 78, 0.1)',
    //       color: '#148519',
    //       fontWeight: 'bold',
    //     },
    //   }
    // );
    dispatch(setEmail(values.email));
    console.log(values);
    navigate("/passwordreset");
  }

  return (
    <AuthLayout>
      <form onSubmit={formik.handleSubmit}>
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

        <Button
          value={"Reset Password"}
          size={ButtonSize.lg}
          variant={ButtonState.PRIMARY}
          type={"Button"}
          onClick={() => formik.handleSubmit()}
          className={"w-full mt-8"}
          disabled={!formik.isValid || !formik.dirty}
        />
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
