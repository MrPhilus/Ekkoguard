import React from "react";
import Button from "../../components/button";
import { ButtonSize, ButtonState } from "../../components/button/enum";
import { useSelector } from "react-redux";
import { getGreeting } from "../../utils";
import { Form, Formik } from "formik";
import { TextInput } from "../../components/customInputs/CustomTextInput";
import * as Yup from "yup"

const Profile = () => {
  const { authData: { firstName, lastName, address, loginDate, email, gender } } = useSelector(state => state.auth)
  const greeting = getGreeting()
  let formikAttributes = {
    initialValues: {
      firstName: firstName || '',
      lastName: lastName || '',
      address: address || '',
      email: email || '',
      gender: gender || '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string(),
      lastName: Yup.string(),
      address: Yup.string(),
      email: Yup.string().email("Must be a valid email address"),
      gender: Yup.string(),
    }),
    onsubmit: (values) => {
      console.log(values)
    }
  }

  return (
    <div className="flex my-auto items-center h-screen justify-center">
      <div className="card w-[27rem] bg-base-100 shadow-xl">


        <div className="">
          <div className="px-8">
            <h2 className="card-title capitalize">{ `${greeting}${firstName ? ', ' + firstName : ''}` }!</h2>
            <p>{ email }</p>
          </div>
          <div className="divide-y divide-light-blue-400 py-6 px-8">
            <div className="flex py-2 justify-between">
              <p className="font-bold">Gender</p>
              <p>{ gender }</p>
            </div>
            <div className="flex py-2 justify-between">
              <p className="font-bold">Address</p>
              <p>{ address }</p>
            </div>
            <div className="flex py-2 justify-between">
              <p className="font-bold">Login Date </p>
              <p>{ loginDate }</p>
            </div>
            <div></div>
          </div>
        </div>''
        <div className="flex gap-6 justify-between py-7 px-8">
          <Button
            variant={ ButtonState.SECONDARY }
            size={ ButtonSize.md }
            value="Sign Out"
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
