import CustomInput from "../../components/customInputs/CustomInputs";
import CustomSelect from "../../components/customInputs/CustomSelect";
import AuthLayout from "../../components/layouts/AuthLayout";
import { useFormik } from "formik";
import { ButtonSize, ButtonState } from "../../components/button/enum";
import Button from "../../components/button";
import { DisposalForm } from "../../validations";
import Modal from "../../components/modal/Index";
import Subscription from "../../components/subscription/Index";
import CustomButton from "../../components/CustomButton";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Disposal = () => {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [isModalOpen, setModalOpen] = useState(true);
  const { subscriptions } = useSelector(state => state.subscriptions)


  const formik = useFormik({
    initialValues: {
      binRequest: "",
      binQuantity: "",
      location: "",
      pickupAddress: "",
      selectedPrice: "",
      selectedDuration: "",
    },
    validationSchema: DisposalForm(),
    onSubmit: (values) => {
      console.log(values);

    },
  });

  const optionsForBinRequest = [
    { position: 1, value: "Yes", label: "Yes" },
    { position: 2, value: "No", label: "No" },
  ];

  const optionsForBinQuantity = [
    { position: 1, value: "1", label: "1" },
    { position: 2, value: "2", label: "2" },
  ];

  const optionsForLocation = [
    { position: 1, value: "Alimosho", label: "Alimosho" },
    { position: 2, value: "Yaba", label: "Yaba" },
    { position: 3, value: "Surulere", label: "Surulere" },
    { position: 4, value: "Lagos Island", label: "Lagos Island" },
    { position: 5, value: "Lekki", label: "Lekki" },
  ];

  const handlePriceSelection = (price, duration) => {
    setSelectedPrice(price);
    setSelectedDuration(duration);
    setModalOpen(false);
    formik.setValues({
      ...formik.values,
      selectedPrice: price,
      selectedDuration: duration,
    });
    formik.handleSubmit();
  };
  return (
    <AuthLayout>
      <div className="flex items-center justify-between">
        <h1 className="font-extrabold text-xl">SCHEDULE DISPOSAL</h1>
        { subscriptions.length > 0 && (
          <CustomButton
            containerStyle="btn btn-outline btn-sm text-white bg-olive-500 w-fit"
            buttonText="Add New Location"
          />
        ) }
      </div>

      <form onSubmit={ formik.handleSubmit } className="flex flex-col gap-2">
        { subscriptions.length === 0 ? (
          <>
            <CustomSelect
              name={ "binRequest" }
              labelText={ "Do You Want a Bin?" }
              optionText={ "Select an option" }
              required={ true }
              type={ "text" }
              onBlur={ formik.handleBlur }
              onChange={ formik.handleChange }
              value={ formik.values.binRequest }
              options={ optionsForBinRequest }
              errorText={ formik.touched.binRequest && formik.errors.binRequest }
            />

            { formik.values.binRequest === "Yes" && (
              <CustomSelect
                name={ "binQuantity" }
                labelText={ "Quantity of Bins Needed" }
                optionText={ "Select an option" }
                required={ true }
                type={ "text" }
                onBlur={ formik.handleBlur }
                onChange={ formik.handleChange }
                value={ formik.values.binQuantity }
                options={ optionsForBinQuantity }
                errorText={
                  formik.touched.binQuantity && formik.errors.binQuantity
                }
              />
            ) }
          </>
        ) : null }

        <CustomSelect
          name={ "location" }
          labelText={ "Area" }
          placeholder={ "Select Location" }
          required={ true }
          optionText={ "Select an option" }
          type={ "text" }
          onBlur={ formik.handleBlur }
          onChange={ formik.handleChange }
          value={ formik.values.location }
          options={ optionsForLocation }
          errorText={ formik.touched.location && formik.errors.location }
          disabled={ subscriptions.length > 0 }
          style={ { cursor: "not-allowed", color: "#999" } }
        />

        <CustomInput
          name={ "pickupAddress" }
          labelText={ "Pickup Address" }
          placeholder={ "Enter address" }
          required={ true }
          type={ "text" }
          onBlur={ formik.handleBlur }
          onChange={ formik.handleChange }
          value={ formik.values.pickupAddress }
          inputError={
            formik.touched.pickupAddress && formik.errors.pickupAddress
          }
          readOnly={ subscriptions.length > 0 }
        />

        <Button
          value={ "Submit" }
          size={ ButtonSize.lg }
          variant={ ButtonState.PRIMARY }
          type={ "Button" }
          onClick={ () => document.getElementById("my_modal_5").showModal() }
          className={ "w-full mt-2" }
          disabled={ !formik.isValid || !formik.dirty }
        />

        { isModalOpen && (
          <Modal modalTitle="Subscription Plans">
            <Subscription onPriceSelect={ handlePriceSelection } />
          </Modal>
        ) }
      </form>
    </AuthLayout>
  );
};

export default Disposal;
