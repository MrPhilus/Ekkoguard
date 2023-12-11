import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import { ButtonSize, ButtonState } from "../../components/button/enum";
import { useSelector } from "react-redux";
import { getGreeting } from "../../utils";
import { Form, Formik } from "formik";
import { TextInput } from "../../components/customInputs/CustomTextInput";
import * as Yup from "yup";
import { logout, useUpdateUserMutation } from "../../services/identityService";
import { showToast } from "../../utils/toastify";
import { EditProfileSchema } from "../../validations";
import AuthLayout from "../../components/layouts/AuthLayout";
import CustomSelect from "../../components/customInputs/CustomSelect";

const sampleSuccessData = {
  status: "OK",
  message: "Successful",
  error: null,
  timestamp: "2023-12-10 15:06",
  debugMessage: null,
  data: {
    id: 0,
    firstName: "Seyi",
    lastName: "A",
    otherName: "",
    gender: null,
    address: null,
    email: "seyitest1@gmail.com",
    phoneNumber: "2349050447008",
    deleted: false,
    subscribed: false,
  },
};

const Profile = () => {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleClick = () => {
    setIsUpdating(!isUpdating);
  };

  const buttonText = isUpdating ? "Save Changes" : "Update User";

  // if (isUpdating) {

  // }

  const {
    authData: { firstName, lastName, address, loginDate, email, gender },
  } = useSelector((state) => state.auth);
  const greeting = getGreeting();

  const [
    updateUser,
    {
      data: updateUserResponse,
      error: updateUserFailed,
      isLoading: updatingUser,
    },
  ] = useUpdateUserMutation();

  const formikAttributes = {
    initialValues: {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      gender: gender || "",
      address: address || "",
    },
    validationSchema: EditProfileSchema(),
    onSubmit: handleUpdateUser,
  };

  // let formikAttributes = {
  //   initialValues: {
  //     firstName: firstName || '',
  //     lastName: lastName || '',
  //     address: address || '',
  //     email: email || '',
  //     gender: gender || '',
  //   },
  //   validationSchema: Yup.object({
  //     firstName: Yup.string(),
  //     lastName: Yup.string(),
  //     address: Yup.string(),
  //     email: Yup.string().email("Must be a valid email address"),
  //     gender: Yup.string(),
  //   }),
  //   onsubmit: handleUpdateUser
  // }

  const optionsForGender = [
    { position: 1, value: "Male", label: "Male" },
    { position: 2, value: "Female", label: "Female" },
    { position: 3, value: "Others", label: "Others" },
  ];

  useEffect(() => {
    if (updateUserResponse?.status === "OK") showToast("Changes will reflect on next login", "success", "Update successful!")
    if (updateUserFailed) showToast("Update failed! Please try again.", "error")
  }, [updateUserResponse, updateUserFailed, updatingUser])

  function handleUpdateUser(values) {
    const nonEmptyValues = Object.fromEntries(
      Object.entries(values).filter(([key, value]) => value !== "")
    );
    updateUser(nonEmptyValues);
  }
  const isLoading = false;

  return (
    <AuthLayout>
      <Formik { ...formikAttributes }>
        { (formik) => {
          return (
            <>
              <h2 className="card-title capitalize">
                { `${greeting}${firstName ? ", " + firstName : ""}` }
              </h2>
              <p>{ email ?? "Update your email address" }</p>
              <Form>
                <TextInput
<<<<<<< HEAD
                  label={"First Name"}
                  readOnly={isUpdating ? false : true}
                  name={"firstName"}
                  type={"text"}
                  // placeholder={"Enter your email address"}
                />

                <TextInput
                  label={"Last Name"}
                  readOnly={isUpdating ? false : true}
                  name={"lastName"}
                  type={"text"}
                  // placeholder={"Enter password"}
                />

                <TextInput
                  label={"Email"}
                  readOnly={isUpdating ? false : true}
                  name={"email"}
                  type={"email"}
                  // placeholder={"Enter password"}
=======
                  label={ "First Name" }
                  name={ "firstName" }
                  type={ "text" }
                // placeholder={"Enter your email address"}
                />

                <TextInput
                  label={ "Last Name" }
                  name={ "lastName" }
                  type={ "text" }
                // placeholder={"Enter password"}
                />

                <TextInput
                  label={ "Email" }
                  name={ "email" }
                  type={ "email" }
                // placeholder={"Enter password"}
>>>>>>> 14465d3236da44389faceea1ac1c1a61703f1c8d
                />

                <CustomSelect
                  labelText="Gender"
<<<<<<< HEAD
                  disabled
                  optionText={"Select an option"}
                  options={optionsForGender}
                  required={true}
                />

                <TextInput
                  label={"Address"}
                  readOnly
                  name={"address"}
                  type={"text"}
                  // placeholder={"Enter password"}
                />

                <div className="flex justify-between">
                  <button
                    className={`btn bg-red-500 xl:btn-lg capitalize mt-6 text-neutral-content`}
                    type="submit"
                    onClick={logout}
                  >
                    {isLoading ? (
                      <>
                        <span className={`loading loading-bars`} />
                      </>
                    ) : (
                      "Log Out "
                    )}
                  </button>
                  <button
                    className={`btn bg-olive-500 xl:btn-lg capitalize mt-6 text-neutral-content`}
                    type="submit"
                    onClick={() => {
                      handleClick();
                      handleUpdateUser();
                    }}
                  >
                    {isLoading ? (
                      <>
                        <span className={`loading loading-bars`} />
                      </>
                    ) : (
                      buttonText
                    )}
                  </button>
                </div>
=======
                  optionText={ "Select an option" }
                  options={ optionsForGender }
                  required={ true }
                />

                <TextInput
                  label={ "Address" }
                  name={ "address" }
                  type={ "text" }
                // placeholder={"Enter password"}
                />

                <button
                  className={ `btn bg-olive-500 xl:btn-lg w-full capitalize mt-6 text-neutral-content` }
                  disabled={
                    formik.isSubmitting || !formik.isValid || !formik.dirty
                  }
                  type="submit"
                >
                  { isLoading ? (
                    <>
                      <span className={ `loading loading-bars` } />
                    </>
                  ) : (
                    "Update Profile"
                  ) }
                </button>
>>>>>>> 14465d3236da44389faceea1ac1c1a61703f1c8d
              </Form>
            </>
          );
        } }
      </Formik>
    </AuthLayout>
  );
};

export default Profile;

// <div className="flex my-auto items-center h-screen justify-center">
//   <div className="card w-[27rem] bg-base-100 shadow-xl">
//     <div className="">
//       <div className="px-8">
//         <h2 className="card-title capitalize">
//           {`${greeting}${firstName ? ", " + firstName : ""}`}!
//         </h2>
//         <p>{email ?? "Update your email address"}</p>
//       </div>
//       <div className="divide-y divide-light-blue-400 py-6 px-8">
//         <div className="flex py-2 justify-between">
//           <p className="font-bold">First Name</p>
//           <p>{firstName}</p>
//         </div>
//         <div className="flex py-2 justify-between">
//           <p className="font-bold">Last Name</p>
//           <p>{lastName}</p>
//         </div>
//         <div className="flex py-2 justify-between">
//           <p className="font-bold">Gender</p>
//           <p>{gender || "update gender"}</p>
//         </div>
//         <div className="flex py-2 justify-between">
//           <p className="font-bold">Address</p>
//           <p>{address || "update address"}</p>
//         </div>
//         <div className="flex py-2 justify-between">
//           <p className="font-bold">Login Date </p>
//           <p>{loginDate}</p>
//         </div>
//         <div></div>
//       </div>
//     </div>
//     <div className="flex gap-6 justify-between py-7 px-8">
//       <Button
//         variant={ButtonState.SECONDARY}
//         size={ButtonSize.md}
//         value="Sign Out"
//         onClick={logout}
//       />
//       <Button
//         variant={ButtonState.PRIMARY}
//         size={ButtonSize.md}
//         value="Update Profile"
//       />
//     </div>
//   </div>
// </div>
