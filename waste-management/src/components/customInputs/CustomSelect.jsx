import ErrorMark from "../../assets/svg/redError.svg";

const CustomSelect = ({
  onBlur,
  name,
  onChange,
  labelText,
  rightLabel,
  optionText,
  rightErrorText,
  className,
  options = [],
  errorText,
  value,
}) => {
  const hasError = errorText !== undefined;

  const getDayForLocation = (selectedLocation) => {
    switch (selectedLocation) {
      case "Alimosho":
        return "Monday";
      case "Yaba":
        return "Tuesday";
      case "Surulere":
        return "Wednesday";
      case "Lagos Island":
        return "Thursday";
      case "Lekki":
        return "Friday";
      default:
        return "";
    }
  };

  const dayForLocation = getDayForLocation(value);

  return (
    <div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-bold">{labelText}</span>
          {dayForLocation && (
            <div>
              <span className="label-text-alt text-olive-500 font-bold">
                {` Pick up days for ${value} are ${dayForLocation}s`}
              </span>
            </div>
          )}
        </label>

        <select
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          className={`select select-bordered w-full font-medium ${
            hasError && !value ? "select-error" : ""
          } ${className || ""}`}
        >
          <option disabled value="">
            {optionText}
          </option>
          {options.map((option) => (
            <option
              className="font-bold"
              key={option.position}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        {!value && errorText && (
          <label className="label">
            <span className="label-text-alt text-red-600 flex gap-1">
              <img src={ErrorMark} alt="error mark" />
              {errorText}
            </span>
            <span className="label-text-alt">{rightErrorText}</span>
          </label>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
