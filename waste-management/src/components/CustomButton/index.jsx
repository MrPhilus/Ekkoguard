import styles from "./CustomButton.module.css";

const CustomButton = ({
  onClick,
  containerStyle,
  buttonText,
  disabled,
  icon,
  iconRight,
  isLoading = false,
}) => {
  return (
    <button
      disabled={disabled}
      className={!disabled ? ` ${containerStyle}` : `${styles.disabled}`}
      onClick={onClick}
    >
      {isLoading && <span className="loading loading-spinner"></span>}
      {icon && <span className={"mr-2"}>{icon}</span>}
      <span className={``}>{buttonText}</span>
      {iconRight && <span className={"ml-2"}>{iconRight}</span>}
    </button>
  );
};

export default CustomButton;
