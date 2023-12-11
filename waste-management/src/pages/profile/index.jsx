import React, { useEffect } from "react";
import Button from "../../components/button";
import { ButtonSize, ButtonState } from "../../components/button/enum";
import { useSelector } from "react-redux";
import { getGreeting } from "../../utils";
import { Form, Formik } from "formik";
import { TextInput } from "../../components/customInputs/CustomTextInput";
import * as Yup from "yup"
import { logout, useUpdateUserMutation } from "../../services/identityService";
import { showToast } from "../../utils/toastify";

const sampleSuccessData = {
  "status": "OK",
  "message": "Successful",
  "error": null,
  "timestamp": "2023-12-10 15:06",
  "debugMessage": null,
  "data": {
    "id": 0,
    "firstName": "Seyi",
    "lastName": "A",
    "otherName": "",
    "gender": null,
    "address": null,
    "email": "seyitest1@gmail.com",
    "phoneNumber": "2349050447008",
    "deleted": false,
    "subscribed": false
  }
}

const Profile = () => {
  const { authData: { firstName, lastName, address, loginDate, email, gender } } = useSelector(state => state.auth)
  const greeting = getGreeting()

  const [updateUser, { data: updateUserResponse, error: updateUserFailed, isLoading: updatingUser }] = useUpdateUserMutation()
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

  useEffect(() => {
    if (updateUserResponse?.status === "OK") showToast("Changes will reflect on next login", "success", "Update successful!")
    if (updateUserFailed) showToast("Update failed! Please try again.", "error")
  }, [updateUserResponse, updateUserFailed, updatingUser])

  function handleUpdateUser(values) {
    const nonEmptyValues = Object.fromEntries(
      Object.entries(values).filter(([key, value]) => value !== "")
    )
    updateUser(nonEmptyValues)
  }


  return (
    <div className="flex my-auto items-center h-screen justify-center">

      <div className="card w-[27rem] bg-base-100 shadow-xl">
        <div className="">
          <div className="px-8">
            <h2 className="card-title capitalize">{ `${greeting}${firstName ? ', ' + firstName : ''}` }!</h2>
            <p>{ email ?? "Update your email address" }</p>
          </div>
          <div className="divide-y divide-light-blue-400 py-6 px-8">
            <div className="flex py-2 justify-between">
              <p className="font-bold">First Name</p>
              <p>{ firstName }</p>
            </div>
            <div className="flex py-2 justify-between">
              <p className="font-bold">Last Name</p>
              <p>{ lastName }</p>
            </div>
            <div className="flex py-2 justify-between">
              <p className="font-bold">Gender</p>
              <p>{ gender || 'update gender' }</p>
            </div>
            <div className="flex py-2 justify-between">
              <p className="font-bold">Address</p>
              <p>{ address || 'update address' }</p>
            </div>
            <div className="flex py-2 justify-between">
              <p className="font-bold">Login Date </p>
              <p>{ loginDate }</p>
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex gap-6 justify-between py-7 px-8">
          <Button
            variant={ ButtonState.SECONDARY }
            size={ ButtonSize.md }
            value="Sign Out"
            onClick={ logout }
          />
          <Button
            variant={ ButtonState.PRIMARY }
            size={ ButtonSize.md }
            value="Update Profile"
          />
        </div>
      </div>

    </div>

  );
};

export default Profile;
