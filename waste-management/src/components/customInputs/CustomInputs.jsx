import { useState } from "react";
import ErrorMark from "../../assets/svg/redError.svg";
import VisibilityOnIcon from "../../assets/svg/eyeslash.svg";
import VisibilityOffIcon from "../../assets/svg/eyeVisible.svg";

const CustomInput = ({
  type,
  id,
  placeholder,
  name,
  onChange,
  onBlur,
  value,
  labelText,
  labelRightText,
  inputError,
  inputErrorRight,
  className,
  readOnly,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="form-control w-full ">
      <label className="label" htmlFor={id}>
        <span className="label-text text-gray-900 font-bold">{labelText}</span>
        <span className="label-text-alt">{labelRightText}</span>
      </label>

      <div className="relative">
        <input
          type={isPasswordVisible ? "text" : type}
          placeholder={placeholder}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          readOnly={readOnly}
          value={value}
          className={`input input-bordered w-full  ${
            inputError ? "input-error" : ""
          } ${className || ""}`}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={handleTogglePasswordVisibility}
            className="absolute inset-y-0 right-0 px-2 flex items-center"
          >
            {isPasswordVisible ? (
              <img src={VisibilityOnIcon} alt="Hide password" />
            ) : (
              <img src={VisibilityOffIcon} alt="Show password" />
            )}
          </button>
        )}
      </div>

      {inputError && (
        <label className="label">
          <span className="label-text-alt text-red-600 flex gap-1">
            <img src={ErrorMark} alt="error mark" />
            {inputError}
          </span>
          <span className="label-text-alt">{inputErrorRight}</span>
        </label>
      )}
    </div>
  );
};

export default CustomInput;
