import CustomButton from "../CustomButton";
import styles from "./card.module.css";

const Card = ({
  src,
  cardText,
  cardHeader,
  cardTitle,
  disabled,
  buttonText,
  onClick,
}) => {
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
            onClick={onClick}
            containerStyle={styles.button}
            buttonText={buttonText}
          />
        </div>
      </div>
      <span className={styles.error}></span>
    </div>
  );
};

export default Card;
