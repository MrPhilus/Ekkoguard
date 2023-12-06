import styles from "./CustomButton.module.css";

const CustomButton = ({ onClick, containerStyle, buttonText, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={!disabled ? ` ${containerStyle}` : `${styles.disabled}`}
      // className={`btn${containerStyle}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default CustomButton;
