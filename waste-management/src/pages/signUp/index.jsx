import { Form, Formik } from "formik";
import AuthLayout from "../../components/layouts/AuthLayout";
import { SignupSchema } from "../../validations";
import { InputCriteria, TextInput } from "../../components/customInputs/CustomTextInput";
import { useSignUpMutation } from "../../services/identityService";
import { showToast } from "../../utils/toastify";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPhoneNumber } from "../../redux/slices/authSlice";

const GettingStarted = () => {
  const validationSchema = SignupSchema()
  const [formError, setFormError] = useState()
  const [signUp, { data, error, isLoading }] = useSignUpMutation()
  const dispatch = useDispatch()

  const formikAttributes = {
    initialValues: {
      firstName: '',
      lastName: '',
      otherName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setFormError(null)
      const v = {
        firstName: values.firstName,
        lastName: values.lastName,
        otherName: values.otherName,
        email: values.email,
        phoneNumber: '234' + values.phoneNumber,
        password: values.password,
      }
      dispatch(setPhoneNumber(v.phoneNumber))

      try {
        await signUp(v)
      } catch (err) {
        console.log(err.message)
        setFormError(err.message)
      }
    },
  }

  useEffect(() => {
    if (error) showToast(error.data.detail, 'error', error.data.title)
    if (data && data?.status === "CREATED") (
      dispatch(setPhoneNumber(data.data.phoneNumber)),
      showToast("Verify phone number to continue!", 'success', "Account Created Successfully")
    )
    // console.log(auth.phoneNumber)
  }, [error, data])

  if (data && data?.status === "CREATED") return <Navigate to={ '/verification' } />

  return (
    <AuthLayout>
      { formError || error ?
        <div div className="px-4 py-8 bg-error/25 rounded-box flex flex-col">
          <strong>An error occured!</strong>
          { (formError || error.data.details) ?? <p>Please <Link to={ `/verification` } className={ `link ` }>Verify your account</Link> or use a different phone number</p>
          }
        </div> : ''
      }

      <Formik { ...formikAttributes }>
        {
          (formik) => {
            return (
              <>
                <Form>
                  <TextInput
                    label={ "First Name" }
                    name={ "firstName" }
                    placeholder={ "Enter your first name" }
                  />
                  <TextInput
                    label={ "Last Name" }
                    name={ "lastName" }
                    placeholder={ "Enter your last name" }
                  />
                  <TextInput
                    label={ "Other Names (optional)" }
                    name={ "otherName" }
                    placeholder={ "Enter other names" }
                  />
                  <TextInput
                    label={ "Email address" }
                    name={ "email" }
                    type={ "email" }
                    placeholder={ "Enter your email address" }
                  />
                  <TextInput
                    label={ "Phone number" }
                    name={ "phoneNumber" }
                    type={ "tel" }
                    placeholder={ "eg. 80XXXXXXXX" }
                  />
                  <TextInput
                    label={ "Password" }
                    name={ "password" }
                    type={ "password" }
                    placeholder={ "Choose a password" }
                  />
                  <TextInput
                    label={ "Confirm Password" }
                    name={ "confirmPassword" }
                    type={ "password" }
                    placeholder={ "Re-enter chosen pasword" }
                  />
                  <InputCriteria
                    name={ "password" }
                    minLength={ 10 }
                  />
                  <InputCriteria
                    name={ "password" }
                    criteriaText={ "At least one capital letter" }
                    regex={ /[A-Z]/ }
                  />
                  <InputCriteria
                    name={ "password" }
                    criteriaText={ "At least one small letter" }
                    regex={ /[a-z]/ }
                  />
                  <InputCriteria
                    name={ "password" }
                    criteriaText={ "At least one numeric character" }
                    regex={ /[0-9]/ }
                  />
                  <InputCriteria
                    name={ "password" }
                    criteriaText={ "At least special character such as '! # @ $ %' " }
                    regex={ /[^\w]/ }
                  />
                  { formError || error ?
                    <div div className="mt-4 px-4 py-8 bg-error/25 rounded-box flex flex-col">
                      <strong>An error occured!</strong>
                      { (formError || error.data.details) ?? <p>Please <Link to={ `/verification` } className={ `link ` }>Verify your account</Link> or use a different phone number</p>
                      }
                    </div> : ''
                  }
                  <button
                    className={ `btn bg-olive-500 xl:btn-lg w-full capitalize mt-6` }
                    disabled={ formik.isSubmitting || !formik.isValid || !formik.dirty }
                    type='submit'
                  >
                    {
                      isLoading ?
                        <>
                          <span className={ `loading loading-bars` } />
                        </> :
                        "sign in"
                    }
                  </button>
                </Form>
              </>
            )
          }
        }
      </Formik>
    </AuthLayout >
  );
};

export default GettingStarted;
