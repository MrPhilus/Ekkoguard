import { useEffect, useState } from "react"
import OTPInput from "../../components/customInputs/OTPInput"
import AuthLayout from "../../components/layouts/AuthLayout"
import { useSendOTPQuery, useVerifyOTPMutation } from "../../services/OTPService"
import { useSelector } from "react-redux"

const OTPVerification = () => {
    const { otp, phoneNumber } = useSelector(state => state.auth)
    const [resendTime, setResendTime] = useState(60)

    const { data: OTPSend, error: sendOTPError, isLoading: sendingOTP } = useSendOTPQuery({
        query: {
            credentials: {
                phoneNumber
            }
        }
    })
    const [verifyOTP, { data: verificationResponse, error: verificationError, isLoading: verifyingOTP }] = useVerifyOTPMutation()

    useEffect(() => {
        if (resendTime > 0) {
            const timer = setTimeout(() => {
                setResendTime(prev => prev - 1)
            }, 1000)
        }
    }, [])

    return (
        <AuthLayout>
            <OTPInput />
            <p className="mt-6">Didn't receive the code?</p>
            <button className={ `btn btn-neutral w-full mt-4` }

            >Resend { 'in ' + resendTime }</button>
        </AuthLayout>
    )
}
export default OTPVerification