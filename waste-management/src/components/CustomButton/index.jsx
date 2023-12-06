import { Link } from "react-router-dom";
import styles from "./CustomButton.module.css";

const CustomButton = ({
  onClick,
  containerStyle,
  buttonText,
  disabled,
  buttonLink,
}) => {
  return (
    <button
      disabled={disabled}
      className={!disabled ? ` ${containerStyle}` : `${styles.disabled}`}
      // className={`btn${containerStyle}`}
      onClick={onClick}
    >
      <Link to={buttonLink}>{buttonText}</Link>
    </button>
  );
};

export default CustomButton;
