import React from "react";
import styles from "./home.module.css";
import logo from "../../assets/images/Ekoguard.png";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";

const Home = () => {
  const navigate = useNavigate();

  const goToServices = () => {
    navigate("/services");
  };

  return (
    <div>
      <main className={styles.main}>
        <header>
          <div className={styles.imageBox}>
            <img
              className={styles.logo}
              src={logo}
              alt="logo"
              width={"100vmax"}
            />
          </div>

          <section className={styles.heroSection}>
            <p className={styles.heroText}>
              A smart waste management system designed for YOU, to help keep
              your community clean.
            </p>
          </section>
        </header>

        <section className={styles.callToAction}>
          <button onClick={goToServices} className={styles.mainButton}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span>GET STARTED</span>
          </button>
          <CustomButton
            onClick={goToServices}
            containerStyle={styles.altButton}
            buttonText={"GET STARTED"}
          />
        </section>
      </main>
    </div>
  );
};

export default Home;
