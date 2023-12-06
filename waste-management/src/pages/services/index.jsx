import React, { useState } from "react";
import Card from "../../components/card";
import styles from "./services.module.css";
import { useNavigate } from "react-router-dom";
import { cardImages } from "./images";

import { IoMdArrowRoundBack } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import CustomButton from "../../components/CustomButton";

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
      <section className={`pt-1 overflow-hidden ${styles.main}`}>
        <Card
          src={cardImages["disposal"]}
          cardTitle={"Waste Disposal"}
          cardHeader={"Schedule Disposal"}
          cardText={
            "Choose your preferred pick-up time and location, Request a bin..."
          }
          buttonText={"Proceed"}
          onClick={goToDisposal}
        />

        <Card
          src={cardImages["recycling"]}
          cardTitle={"Waste Recycling"}
          cardHeader={"Schedule Recycling"}
          cardText={"Separate your recyclables, Request a collection..."}
          buttonText={"Proceed"}
        />

        <Card
          disabled
          src={cardImages["wallet"]}
          cardTitle={"Wallet"}
          cardHeader={"View Balance & Rewards"}
          cardText={"Check your balance, Redeem rewards..."}
          buttonText={"Coming Soon"}
        />

        <Card
          disabled
          src={cardImages["history"]}
          cardTitle={"Schedule History"}
          cardHeader={"View History"}
          cardText={"View your past schedules, Check your history..."}
          buttonText={"Coming Soon"}
        />

        <Card
          disabled
          src={cardImages["resources"]}
          cardTitle={"Resources"}
          cardHeader={"View Resources"}
          cardText={"View resources to help understand recycling..."}
          buttonText={"Coming Soon"}
        />

        <Card
          disabled
          src={cardImages["newsfeed"]}
          cardTitle={"News Feed"}
          cardHeader={"Stay Updated"}
          cardText={"Get the latest information, share your views..."}
          buttonText={"Coming Soon"}
        />
      </section>
    </div>
  );
};

export default Services;
