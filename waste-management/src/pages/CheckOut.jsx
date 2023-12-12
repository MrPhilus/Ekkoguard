import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { Link, useParams } from "react-router-dom";
import { PriceCards } from "../components/modalCard/Data";
import AuthLayout from "../components/layouts/AuthLayout";
import { useSelector } from "react-redux";
import { useGuard } from "../hooks/useGuard";
import { Form, Formik } from "formik";
import { TextInput } from "../components/customInputs/CustomTextInput";
import { CheckoutSchema as validationSchema } from "../validations";

const CheckOut = () => {
  useGuard('/login')
  const { id: subscriptionId } = useParams()
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  const amount = 70000 || 0;
  const { authData, phoneNumber } = useSelector(state => state.auth)
  const { subscriptions } = useSelector(state => state.subscriptions)

  const [subscription] = subscriptions.map((sub) => {
    if (sub.id === subscriptionId) {
      return sub
    }
  })

  console.log(subscriptions)

  const formikAttributes = {
    initialValues: {
      fullName: authData.firstName + ' ' + authData.lastName,
      email: authData.email,
      phoneNumber
    },
    validationSchema,

  }

  const publicKey = "pk_test_23f26f6e7e1df8a8e8fbf63d7e8e652399a1ab51";
  // Function to format a number as Naira currency
  const formatAsNaira = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const onSuccess = (reference) => {
    // navigate("/paymentsuccessful");
    setPaymentSuccess(true);
    sendConfirmationEmail(email);
    // console.log(reference);
  };

  const onClose = () => {
    alert("We would love to see you purchase this item, please try again");
    // navigate("/");
  };

  const sendConfirmationEmail = (toEmail) => {
    // Replace this with email sending logic
    // Use email service like SendGrid or Nodemailer
    console.log(`Sending confirmation email to ${toEmail}`);
    // Implement email sending logic here
  };

  console.log(Number(subscription.selectedPrice.replace(',', '')) * 100)
  return (
    <AuthLayout>
      <div className="">
        { paymentSuccess ? (
          <div className="">
            {/* <p>Hi {fullName}!</p> */ }
            <h2>Payment Successful!</h2>
            <p>An email confirmation has been sent to { authData.email }.</p>

            <p>
              Details for the next pickup will  be sent to  { subscription.locatiion }
            </p>
            <Link to="/services" className="">
              back to services
            </Link>
          </div>
        ) : (
          <div className="">
            <div>
              <h3>Checkout Details</h3>
              <p>
                you are paying <strong>&#8358;{ subscription?.selectedPrice }</strong> for: { subscription?.selectedDuration }ly Subscription
              </p>
            </div>
            {/* <div className="checkout-form">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 items-start">
                  <div className="flex items-center justify-between gap-4">
                    <label>Full Name:</label>
                    <input
                      className="input border border-olive-500"
                      type="text"
                      value={ fullName }
                    />
                  </div>

                  <div className="checkout-info">
                    <label>Email Address:</label>
                    <input
                      className="input border border-olive-500"
                      type="text"
                      value={ email }
                      onInput={ (e) => setEmail(e.target.value) }
                    />
                  </div>

                  <div className="checkout-info">
                    <label>Phone Number:</label>
                    <input
                      className="input border border-olive-500"
                      type="text"
                      value={ phoneNumber }
                      onInput={ (e) => setPhoneNumber(e.target.value) }
                    />
                  </div>
                </div>
                <p style={ { width: "200px", fontSize: "11px" } }>
                  <strong>Disclaimer:</strong>Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Necessitatibus, harum!
                </p>

                <div className="">
                  <PaystackButton
                    text="Pay with Paystack"
                    className="btn w-full bg-olive-500 text-white"
                    email={ email }
                    amount={ amount } // Convert to kobo
                    publicKey={ publicKey }
                    onSuccess={ onSuccess }
                    onClose={ onClose }
                  />
                </div>
              </div>
            </div> */}

            <Formik { ...formikAttributes }>
              {
                (formik) => {
                  return (<Form>
                    <TextInput
                      name={ "fullName" }
                      label={ "Full Name" }
                      type={ "text" }
                      readOnly
                    />
                    <TextInput
                      name={ "email" }
                      label={ "Email Address" }
                      type={ "email" }
                      readOnly
                    />
                    <TextInput
                      name={ "phoneNumber" }
                      label={ "Phone Number" }
                      type={ "text" }
                      readOnly
                    />
                    <PaystackButton
                      text="Pay with Paystack"
                      className="btn w-full bg-olive-500 text-white"
                      email={ authData.email }
                      amount={ Number(subscription.selectedPrice.replace(',', '')) * 100 } // Convert to kobo
                      publicKey={ publicKey }
                      onSuccess={ onSuccess }
                      onClose={ onClose }
                    />
                  </Form>)
                }
              }
            </Formik>
          </div>
        ) }
      </div>
    </AuthLayout>
  );
};

export default CheckOut;
