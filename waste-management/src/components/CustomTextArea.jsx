import React from "react";
import ErrorMark from "../assets/svg/redError.svg";

const CustomTextArea = ({
  placeholder,
  labelText,
  onChange,
  onBlur,
  value,
  readOnly,
  id,
  inputError,
  inputErrorRight,
}) => {
  return (
    <div>
      <label className="form-control" htmlFor={id}>
        <div className="label">
          <span className="label-text font-bold">{labelText}</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder={placeholder}
        ></textarea>
      </label>
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

export default CustomTextArea;
