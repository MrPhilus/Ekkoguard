import React from "react";
import Button from "../../components/button";
import { ButtonSize, ButtonState } from "../../components/button/enum";

const index = () => {
  return (
    <div className="flex my-auto items-center h-screen justify-center">
      <div className="card w-[27rem] bg-base-100 shadow-xl">
        <div className="">
          <div className="px-8">
            <h2 className="card-title">Hi Olanrewaju</h2>
            <p>oolanrewajudada@gmail.com</p>
          </div>
          <div className="divide-y divide-light-blue-400 py-6 px-8">
            <div className="flex py-2 justify-between">
              <p className="font-bold">Gender</p>
              <p>Female</p>
            </div>
            <div className="flex py-2 justify-between">
              <p className="font-bold">Address</p>
              <p>No 5, Ilupeju, Lagos</p>
            </div>
            <div className="flex py-2 justify-between">
              <p className="font-bold">Login Date </p>
              <p>07/12/20223 5:30WAT</p>
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex gap-6 justify-between py-7 px-8">
          <Button
            variant={ButtonState.SECONDARY}
            size={ButtonSize.md}
            value="Sign Out"
          />
          <Button
            variant={ButtonState.PRIMARY}
            size={ButtonSize.md}
            value="Update Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
