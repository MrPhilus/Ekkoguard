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
import { _setTokenToStorage } from "../../utils";
import { useNavigate, Link } from "react-router-dom";
import { setAuthData } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { BsXLg } from "react-icons/bs";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signUp, { data, error, isLoading }] = useLoginMutation();
  const [userName, setUserName] = useState("user");
  const isLoggedIn = isAuthenticated();

  const formikAttributes = {
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema(),
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
      let timestamp = new Date(data?.timestamp);
      dispatch(
        setAuthData({
          id: data?.data?.user?.id,
          firstName: data?.data?.user?.firstName || "",
          lastName: data?.data?.user?.lastName || "",
          email: data?.data?.user?.email || "",
          loginDate:
            timestamp.toLocaleDateString() +
            " " +
            timestamp.toLocaleTimeString(),
          address: data?.data?.user?.address || "",
          accessToken: data?.data.token || "",
        })
      );
      showToast("You will be redirected shortly", "success", "Login Succesful");
      setTimeout(() => {
        navigate("/services");
      }, 300);
    }
  }, [error, data]);

  return (
    <AuthLayout>
      {error ? (
        <div className="px-4 py-8 bg-error/25 rounded-box flex flex-col">
          <strong>An error occured!</strong>
          {error?.data?.error || "We're working on it. Please try again later!"}
        </div>
      ) : (
        ""
      )}

      {isLoggedIn ? (
        <div className="px-4 py-8 rounded-box">
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
