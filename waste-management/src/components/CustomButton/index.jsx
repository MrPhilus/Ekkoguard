import styles from "./CustomButton.module.css";

const CustomButton = ({ onClick, containerStyle, buttonText, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={!disabled ? ` ${containerStyle}` : `${styles.disabled}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default CustomButton;
