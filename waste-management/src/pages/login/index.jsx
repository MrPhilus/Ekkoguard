import { Form, Formik } from "formik";
import AuthLayout from "../../components/layouts/AuthLayout";
import { LoginSchema } from "../../validations";
import { TextInput } from "../../components/customInputs/CustomTextInput";
import {
  isAuthenticated,
  logout,
  useLoginMutation,
} from "../../services/identityService";
import { showToast } from "../../utils/toastify";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _setTokenToStorage } from "../../utils";
import { storageService } from "../../services";
import { useGuard } from "../../hooks/useGuard";

const Login = () => {
  const validationSchema = LoginSchema();
  const [signUp, { data, error, isLoading }] = useLoginMutation();
  const [userName, setUserName] = useState("user");
  const auth = useSelector((state) => state.auth);
  const isLoggedIn = isAuthenticated();

  const formikAttributes = {
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      // setFormError(null)
      setUserName(values.email);
      try {
        await signUp(values);
      } catch (err) {
        console.log(err);
      }
    },
  };

  useEffect(() => {
    if (error) showToast(error?.data?.error, "error");
    if (data && data?.status === "OK") {
      storageService.saveAuthData({ userName, accessToken: data?.data.token });
      showToast(
        "You will be redirected shortly",
        "success",
        "Login Succesfull"
      );
    }
  }, [error, data]);

  return (
    <AuthLayout>
      {error ? (
        <div div className="px-4 py-8 bg-error/25 rounded-box flex flex-col">
          <strong>An error occured!</strong>
          {error?.data?.error}
        </div>
      ) : (
        ""
      )}

      {isLoggedIn ? (
        <div div className="px-4 py-8 rounded-box">
          <p className="text-xl font-bold">You are already logged in!</p>
          <p>
            Do you want to{" "}
            <button className="link link-hover font-semibold" onClick={logout}>
              Logout
            </button>
            ?
          </p>
        </div>
      ) : (
        <Formik {...formikAttributes}>
          {(formik) => {
            return (
              <>
                <Form>
                  <TextInput
                    label={"Email address"}
                    name={"email"}
                    type={"email"}
                    placeholder={"Enter your email address"}
                  />
                  <TextInput
                    label={"Password"}
                    name={"password"}
                    type={"password"}
                    placeholder={"Enter password"}
                  />
                  <button
                    className={`btn bg-olive-500 xl:btn-lg w-full capitalize mt-6 text-neutral-content`}
                    disabled={
                      formik.isSubmitting || !formik.isValid || !formik.dirty
                    }
                    type="submit"
                  >
                    {isLoading ? (
                      <>
                        <span className={`loading loading-bars`} />
                      </>
                    ) : (
                      "sign in"
                    )}
                  </button>
                </Form>
              </>
            );
          }}
        </Formik>
      )}
    </AuthLayout>
  );
};

export default Login;
