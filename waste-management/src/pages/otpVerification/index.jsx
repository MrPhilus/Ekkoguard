import { useEffect, useState } from "react"
import OTPInput from "../../components/customInputs/OTPInput"
import AuthLayout from "../../components/layouts/AuthLayout"
import { useSendOTPMutation, useVerifyOTPMutation } from "../../services/OTPService"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Form, Formik } from "formik"
import { TextInput } from "../../components/customInputs/CustomTextInput"
import { setPhoneNumber } from "../../redux/slices/authSlice"
import * as Yup from 'yup'
import { showToast } from "../../utils/toastify"


const OTPVerification = () => {
    const { otp, phoneNumber } = useSelector(state => state.auth)
    const [resendTime, setResendTime] = useState(60)
    const [resendDisabled, setResendDisabled] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [sendOTP, { data: OTPData, error: sendOTPError, isLoading: sendingOTP }] = useSendOTPMutation()
    const [verifyOTP, { data: verificationData, error: verificationError, isLoading: verifyingOTP }] = useVerifyOTPMutation()

    function handleResendOTP() {
        setResendTime(60);
        setResendDisabled(true); // Disable the resend button
        sendOTP({ destinationNumber: phoneNumber });
    }

    useEffect(() => {
        if (sendOTPError) return
        const interval = setInterval(() => {
            if (resendTime > 0) {
                setResendTime(prevTime => prevTime - 1);
            } else {
                setResendDisabled(false); // Enable the resend button when the countdown reaches 0
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [resendTime]);

    useEffect(() => {
        if (otp.length === 4) verifyOTP({
            destinationNumber: phoneNumber,
            pin: otp
        })

    }, [otp])

    useEffect(() => {
        if (verificationError) showToast(verificationError.data.detail, 'error', verificationError.data.title)
        if (verificationData && verificationData?.status === "OK") {
            // if (verificationData?.data.verified === true) {
            showToast("You will be redirected shortly", 'success', "Verification successful!")
            setTimeout(() => {
                navigate('/login')
            }, 3000)
        } else {
            showToast("Provide correct OTP", 'Error', "Verification Failed!")
        }
        // }
        if (sendingOTP) {
            showToast("Sending OTP", "loading", "Please wait.")
        }
        // console.log(verificationData)
        // console.log(verificationError)
        // console.log(auth.phoneNumber)
    }, [verificationError, verificationData, OTPData])

    return (
        <AuthLayout>
            { verificationError && <p className={ `bg-error/50 text-error-content py-2 px-4 rounded-md` }>An error occured: ({ verificationError?.data?.title }). Please try again with a different OTP</p> }
            { sendOTPError && <p className={ `bg-error/50 text-error-content py-2 px-4 rounded-md` }>Error sending OTP: ({ sendOTPError?.error }). Please try again.</p> }

            { (phoneNumber === '' || sendingOTP) && (!OTPData || OTPData.status !== "OK") ? (
                // Render phone number entry form
                <Formik
                    initialValues={ { phone: '' } }
                    validationSchema={ Yup.object({
                        phone: Yup.string()
                            .required("Enter phone number to verify")
                            .matches(/^[^0].*$/, "Do not include the leading '0'")
                            .matches(/^[789]\d{9}$/, "Enter a valid phone number"),
                    }) }
                    onSubmit={ ({ phone }) => {
                        const formattedPhoneNumber = '234' + phone;
                        dispatch(setPhoneNumber(formattedPhoneNumber));
                        handleResendOTP(); // Corrected: added parentheses to call the function
                    } }
                >
                    { (formik) => (
                        <Form>
                            {/* Render phone number input */ }
                            { phoneNumber === '' && <TextInput
                                name={ "phone" }
                                type={ "tel" }
                                placeholder={ "eg. 80XXXXXXXX" }
                            /> }
                            {/* Render submit button */ }
                            <button
                                onClick={ formik.submitForm }
                                className="btn btn-neutral w-full mt-4"
                                type="submit"
                                disabled={ sendingOTP }
                            >
                                { sendingOTP ? <span><span className={ `loading loading-bars` } /> Sending OTP</span> : `Send OTP` }
                            </button>

                        </Form>
                    ) }
                </Formik>
            ) : (
                // Render OTP verification form
                <>
                    <p>{ `Enter the four-digit code sent to +${phoneNumber.substring(0, 3) + ' ' + phoneNumber.substring(3, 6) + ' XXX XX' + phoneNumber.substring(11)}` }</p>

                    {/* Render OTP input */ }
                    <OTPInput />

                    {/* Render verify button */ }
                    {
                        verifyingOTP ? (
                            <div
                                className={ `btn bg-olive-500 text-white w-full mt-4` }
                            >
                                <span className="loading loading-bars" /> Please Wait
                            </div>) : (
                            <button
                                className={ `btn bg-olive-500 text-white w-full mt-4` }
                                onClick={ () => verifyOTP({
                                    destinationNumber: phoneNumber,
                                    pin: otp
                                }) }
                                disabled={ verifyingOTP || sendingOTP || otp === '' }
                            >
                                { verifyingOTP ? <span className="loading loading-bars" /> : 'Verify' }
                            </button>)
                    }
                    {/* Render resend button */ }
                    <p className="mt-4">
                        Didn't receive the code?{ " " }
                        <button
                            className={ ` mt-2 font-semibold py-2 ${resendTime === 0 ? 'link link-hover italic' : 'opacity-50'
                                }` }
                            onClick={ handleResendOTP }
                            disabled={ (resendDisabled || sendingOTP || verifyingOTP) && (!sendOTPError || verificationError?.data.verified === false) }
                        >
                            Resend { (resendTime === 0 || sendOTPError) ? 'now' : 'in ' + resendTime }
                        </button>
                    </p>
                </>
            ) }
        </AuthLayout>
    );
}
export default OTPVerification