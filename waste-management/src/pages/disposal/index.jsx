import CustomInput from "../../components/customInputs/CustomInputs";
import CustomSelect from "../../components/customInputs/CustomSelect";
import AuthLayout from "../../components/layouts/AuthLayout";
import { useFormik } from "formik";
import { ButtonSize, ButtonState } from "../../components/button/enum";
import Button from "../../components/button";
import { DisposalForm } from "../../validations";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/slices/modalSlice";
import Modal from "../../components/modal/Index";
import Subscription from "../../components/subscription/Index";

const Disposal = () => {
  const dispatch = useDispatch();
  const handleModal = () => {
    dispatch(openModal());
  };
  const formik = useFormik({
    initialValues: {
      binRequest: "",
      binQuantity: "",
      location: "",
      pickupAddress: "",
    },
    validationSchema: DisposalForm,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const optionsForBinRequest = [
    { position: 1, value: "Yes", label: "Yes" },
    { position: 2, value: "No", label: "No" },
  ];

  const optionsForLocation = [
    { position: 1, value: "Alimosho", label: "Alimosho" },
    { position: 2, value: "Yaba", label: "Yaba" },
    { position: 3, value: "Surulere", label: "Surulere" },
  ];

  return (
    <AuthLayout>
      <h1 className="font-extrabold text-xl">SCHEDULE DISPOSAL</h1>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
        <CustomSelect
          name={"binRequest"}
          labelText={"Bin Request"}
          optionText={"Select an option"}
          required={true}
          type={"text"}
          pickUpDay={"monday"}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.binRequest}
          options={optionsForBinRequest}
          errorText={formik.touched.binRequest && formik.errors.binRequest}
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
        <CustomSelect
          name={"location"}
          labelText={"Location"}
          placeholder={"Select Location"}
          required={true}
          optionText={"Select an option"}
          type={"text"}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.location}
          options={optionsForLocation}
          inputError={formik.touched.location && formik.errors.location}
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
          onClick={handleModal}
          className={"w-full mt-2"}
          disabled={!formik.isValid || !formik.dirty}
        />
        <Modal>
          <Subscription />
        </Modal>
      </form>
    </AuthLayout>
  );
};

export default Disposal;
