import * as Yup from "yup";

export const DisposalForm = () => {
  return Yup.object({
    binRequest: Yup.string()
      .oneOf(["Yes", "No"], "Please select an option")
      .required("Required"),
    binQuantity: Yup.string()
      .oneOf(["1", "2"], "Please select an option")
      .test("binQuantity", "Required", function (value) {
        const { binRequest } = this.parent;
        if (binRequest === "Yes" && !value) {
          return false;
        }
        return true;
      }),
    location: Yup.string()
      .oneOf(
        ["Alimosho", "Yaba", "Surulere", "Lagos Island", "Lekki"],
        "Invalid Location Selected"
      )
      .required("Required"),
    pickupAddress: Yup.string()
      .min(5, "Address must be at least 5 characters long")
      .required("Required"),
  });
};

export const FeedbackForm = () => {
  return Yup.object({
    feedbackSubject: Yup.string().required("Enter your subject"),
    feedbackMessage: Yup.string().required("Enter your message"),
  });
};
export const paystackSchema = () => {
  return Yup.object({
    fullName: Yup.string().required("Required"),
    email: Yup.string().required("Email is required"),
    phoneNumber: Yup.string().required("Required"),
  });
};

export const SignupSchema = () => {
  return Yup.object({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    otherName: Yup.string(),
    phoneNumber: Yup.string()
      .required("Enter your phone number")
      .matches(/^[^0].*$/, "Do not include the leading '0'")
      .matches(/^[789]\d{9}$/, "Enter a valid phone number"),
    email: Yup.string()
      .required("This field is required")
      .email("Invalid email address"),
    password: Yup.string()
      .required("This field is required")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^\w]).{10,}$/,
        "Must match the specificatioins below"
      ),
    // .min(10, "Password must be 10 characters long")
    // .matches(/[A-Z]/, "Password requires an uppercase letter")
    // .matches(/[a-z]/, "Password requires a lowercase letter")
    // .matches(/[0-9]/, "Password requires a number")
    // .matches(/[^\w]/, "Password requires a special character"),
    confirmPassword: Yup.string()
      .required("Confirm your password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
};

export const LoginSchema = () => {
  return Yup.object({
    email: Yup.string()
      .required("This field is required")
      .email("Invalid email address"),
    password: Yup.string().required("This field is required"),
  });
};

export const LoginSchemaEmail = () => {
  return Yup.object({
    email: Yup.string().required("This field is required"),
    password: Yup.string().required("This field is required"),
  });
};

export const CheckoutSchema = () => {
  return Yup.object({
    fullName: Yup.string().required("This field is required"),
    email: Yup.string().required("This field is required"),
    phoneNumber: Yup.string()
      .required("Enter your phone number")
      .matches(/^[^0].*$/, "Do not include the leading '0'")
      .matches(/^[789]\d{9}$/, "Enter a valid phone number"),
  });
};

export const ForgotPasswordSchema = () => {
  return Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
  });
};

export const EditProfileSchema = () => {
  return Yup.object().shape({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    gender: Yup.string()
      .oneOf(["Male", "Female", "Others"], "Please select an option")
      .required("Required"),
    address: Yup.string().required("This field is required"),
  });
};

export const PasswordResetSchema = () => {
  return Yup.object().shape({
    email: Yup.string()
      .required("This field is required")
      .email("Invalid email address"),
    password: Yup.string()
      .required("This field is required")
      .min(10, "Password must be 10 characters long")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[^\w]/, "Password requires a special character"),
    confirmPassword: Yup.string()
      .required("This field is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
};
