import React, { useState } from "react";
import Card from "../../components/card";
import styles from "./services.module.css";
import { useNavigate } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

import { services } from "./Data";

const Services = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  const goToDisposal = () => {
    navigate("/disposal");
    console.log("clicked");
  };

  return (
    <div>
      <section className={styles.header}>
        <IoMdArrowRoundBack className={styles.back} onClick={handleBackClick} />

        <h1 className="text-2xl font-extrabold">SERVICES</h1>

        {isLoggedIn ? (
          <FaRegUserCircle className={styles.user} />
        ) : (
          <CustomButton
            containerStyle="btn btn-outline btn-sm text-black"
            buttonText="Log In"
          />
        )}
      </section>
      <section className={styles.main}>
        {services.map((service) => {
          return (
            <Card
              key={service.cardTitle}
              src={service.imgSrc}
              cardTitle={service.cardTitle}
              cardHeader={service.cardHeader}
              cardText={service.cardText}
              buttonText={service.buttonText}
              buttonLink={service.buttonLink}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Services;
