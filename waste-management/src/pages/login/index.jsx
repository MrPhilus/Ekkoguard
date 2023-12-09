import { Form, Formik } from "formik";
import AuthLayout from "../../components/layouts/AuthLayout";
import { SignupSchema as validationSchema } from "../../validations";
import { TextInput } from "../../components/customInputs/CustomTextInput";
import { useLoginMutation } from "../../services/identityService";
import { showToast } from "../../utils/toastify";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPhoneNumber } from "../../redux/slices/authSlice";

const loginDataSuccess = {
  "status": "OK",
  "message": "Successful",
  "error": null,
  "timestamp": "2023-12-09 08:53",
  "debugMessage": null,
  "data": {
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZXlpdGVzdDFAZ21haWwuY29tIiwiaWF0IjoxNzAyMTEyMDM0LCJleHAiOjE3MDIxOTg0MzR9.kwcE2V_1AbZSKKefhSb-z7en_u225JQUfFBjLfPhLGcDS86uyWXnDuMElwOcUTKfLgVaAYgEHjd1nJR88sBJIw"
  }
}

const GettingStarted = () => {
  const [formError, setFormError] = useState()
  const [signUp, { data, error, isLoading }] = useLoginMutation()
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const formikAttributes = {
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      // setFormError(null)
      try {
        await signUp(values)
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

  if ((data && data?.status === "OK") && data?.error === null) return <Navigate to={ '/verification' } />

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
                    label={ "Email address" }
                    name={ "email" }
                    type={ "email" }
                    placeholder={ "Enter your email address" }
                  />
                  <TextInput
                    label={ "Password" }
                    name={ "password" }
                    type={ "password" }
                    placeholder={ "Choose a password" }
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
