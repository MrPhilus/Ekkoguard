import React from "react";
import CustomInput from "../../components/customInputs/CustomInputs";
import CustomSelect from "../../components/customInputs/CustomSelect";
import AuthLayout from "../../components/layouts/AuthLayout";
import { useFormik } from "formik";
import { ButtonSize, ButtonState } from "../../components/button/enum";
import Button from "../../components/button";
import { DisposalForm } from "../../validations";

const Disposal = () => {
  const formik = useFormik({
    initialValues: {
      binRequest: false,
      binQuantity: "",
      location: "",
      pickupAddress: "",
    },
    validationSchema: DisposalForm,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <AuthLayout>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
        <CustomSelect
          name={"binQuantity"}
          labelText={"Quantity of Bins"}
          placeholder={"Enter bin quantity"}
          required={true}
          type={"text"}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.binQuantity}
          inputError={formik.touched.binQuantity && formik.errors.binQuantity}
        />

        <CustomInput
          name={"binQuantity"}
          labelText={"Quantity of Bins"}
          placeholder={"Enter bin quantity"}
          required={true}
          type={"text"}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.binQuantity}
          inputError={formik.touched.binQuantity && formik.errors.binQuantity}
        />
        <CustomInput
          name={"pickupAddress"}
          labelText={"Pickup Address"}
          placeholder={"Enter address"}
          required={true}
          type={"text"}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.pickupAddress}
          inputError={
            formik.touched.pickupAddress && formik.errors.pickupAddress
          }
        />

        <Button
          value={"Submit"}
          size={ButtonSize.lg}
          variant={ButtonState.PRIMARY}
          type={"Button"}
          onClick={() => formik.handleSubmit()}
          className={"w-full mt-2"}
          disabled={!formik.isValid || !formik.dirty}
        />
      </form>
    </AuthLayout>
  );
};

export default Disposal;
