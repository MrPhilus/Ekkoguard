import ErrorMark from "../../assets/svg/redError.svg";

const TextArea = ({
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
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text font-bold">{labelText}</span>
      </div>
      <textarea
        className="textarea textarea-bordered h-24"
        placeholder={placeholder}
      ></textarea>
      {inputError && (
        <label className="label">
          <span className="label-text-alt text-red-600 flex gap-1">
            <img src={ErrorMark} alt="error mark" />
            {inputError}
          </span>
          <span className="label-text-alt">{inputErrorRight}</span>
        </label>
      )}
    </label>
  );
};

export default TextArea;
