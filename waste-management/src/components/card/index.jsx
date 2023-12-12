import CustomButton from "../CustomButton";
import styles from "./card.module.css";
import { useNavigate } from "react-router-dom";

const Card = ({
  src,
  cardText,
  cardHeader,
  cardTitle,
  disabled,
  buttonText,
  buttonLink,
  // onClick,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (buttonLink) {
      navigate(buttonLink);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={src} />
        <p className={styles.title}>{cardTitle}</p>
        <div className={styles.cardHidden}>
          <p className={styles.titleIn}>{cardHeader}</p>
          <p>{cardText}</p>
          <CustomButton
            disabled={disabled}
            onClick={handleCardClick}
            containerStyle={styles.button}
            buttonLink={buttonLink}
            buttonText={buttonText}
          />
        </div>
      </div>
      <span className={styles.error}></span>
    </div>
  );
};

export default Card;
