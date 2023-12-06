import { useState } from 'react';
import ErrorMark from '../../assets/svg/redError.svg';

const RadioButton = ({ labelText, onBlur, name, id, className, options = [], inputError }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (position) => {
    setSelectedOption(position);
  };

  return (
    <div className="form-control w-full">
      <label className="label" htmlFor={id}>
        <span className="label-text text-gray-900 text-lg">{labelText}</span>
      </label>

      <div className="relative">
        {options.map((option) => (
          <label key={option.position} className="flex py-1">
            <input
              className={`radio ${inputError ? 'input-error' : ''} ${className || ''}`}
              type="radio"
              name={name}
              onBlur={onBlur}
              value={option.position}
              checked={selectedOption === option.position}
              onChange={() => handleOptionChange(option.position)}
            />
            <span className="mx-3">{option.label}</span>
          </label>
        ))}
      </div>

      {inputError && (
        <label className="label">
          <span className="label-text-alt text-red-600 flex gap-1">
            <img src={ErrorMark} alt="error mark" />
            {inputError}
          </span>
        </label>
      )}
    </div>
  );
};

export default RadioButton;
