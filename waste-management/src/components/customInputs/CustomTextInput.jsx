import { ErrorMessage, Field } from 'formik'
import { useState } from 'react'
import { BsCheckCircleFill, BsEye, BsEyeSlash, BsXCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function ErrorWrapper({ children }) {
    return (
        <span className='flex items-center gap-1'>
            <BsXCircleFill />
            { children }
        </span>
    )
}

export function InputCriteria({ name, criteriaText, minLength, regex }) {
    return (
        <Field name={ name }>
            {
                ({ _field, meta }) => {

                    const condition = !minLength ?
                        regex?.test(meta.value) :
                        meta.value.length > minLength - 1;

                    return (
                        <label className="label p-0 pt-1">
                            <span className={ `flex items-center gap-2 ${!meta.value && 'opacity-30'}` }>
                                {
                                    !meta.value ?
                                        <BsCheckCircleFill /> :
                                        condition ?
                                            <BsCheckCircleFill className={ `text-success` } /> :
                                            <BsXCircleFill className={ `text-error` } />
                                }&nbsp;{ minLength ? `At least ${minLength} characters` : criteriaText }
                            </span>
                        </label>
                    )
                }
            }
        </Field>
    )
}

export const TextInput = ({ label, className, showErrorMessage = true, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)

    function passwordToggle() {
        setShowPassword(!showPassword)
    }

    return (
        <Field name={ props.name }>
            {
                ({ field, meta, form }) => (
                    <>
                        <div className="form-control w-full">
                            { label && (
                                <label className="label" htmlFor={ props.name }>
                                    <span className="label-text font-semibold text-md xl:text-2xl capitalize">{ label }</span>
                                </label>)
                            }

                            <div className={ `relative w-full rounded-md ${className}` }>
                                <input
                                    type={ props.type === 'password' && showPassword === true ? 'text' : props.type }
                                    className={ `input input-bordered w-full bg-transparent pr-10 
                                    placeholder:font-sans placeholder:tracking-normal 
                                    ${props.type === 'tel' ? 'pl-12' : ''}
                                    ${meta.touched && meta.error && 'border-error focus:outline-error '}
                                    ${props.type === 'password' && 'font-mono tracking-widest '}` }
                                    placeholder={ props.placeholder }
                                    onInput={ (e) => {
                                        if (props.type === 'tel' && (isNaN(e.target.value * 1) || e.target.value.length > 10)) e.target.value = meta.value
                                    } }
                                    { ...field }
                                />
                                {
                                    props.type === 'tel' ?
                                        <span className={ `absolute font-semibold left-4 top-1/2 -translate-y-1/2` }>234</span>
                                        : ''
                                }
                                {
                                    props.type === 'password' &&
                                    meta.value !== '' && (
                                        <label className="swap swap-rotate absolute p-2 right-2 top-1/2 -translate-y-1/2">
                                            {/* this hidden checkbox controls the state */ }
                                            <input type="checkbox" onChange={ passwordToggle } disabled={ meta.value === '' } />

                                            {/* password hidden */ }
                                            <BsEyeSlash className="swap-off text-xl" />

                                            {/* password showing */ }
                                            <BsEye className="swap-on text-xl" />
                                        </label>
                                    )
                                }
                            </div>

                            <label className="label p-0 pt-1">
                                <small className="label-text-alt text-error flex items-center min-h-[1rem] self-start">
                                    {
                                        showErrorMessage &&
                                        meta.touched &&
                                        meta.error &&
                                        <ErrorMessage component={ ErrorWrapper } name={ props.name } />
                                    }
                                </small>

                                {
                                    props.type === 'password' &&
                                    props.passwordreset_path && (
                                        <Link
                                            to={ props.passwordreset_path }
                                            type='button'
                                            className={
                                                `text-primary xl:text-xl link link-hover 
                                                hover:link-primary font-semibold 
                                                min-h-fit flex items-center w-fit`
                                            }
                                        >
                                            Forgot Password?
                                        </Link>
                                    )
                                }
                            </label>
                        </div>
                    </>
                )
            }
        </Field>
    )
}