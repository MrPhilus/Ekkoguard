import React, { useState } from "react";
import Card from "../../components/card";
import styles from "./services.module.css";
import { useNavigate } from "react-router-dom";
import { cardImages } from "./images";
import { useSelector, useDispatch } from "react-redux";

import { IoMdArrowRoundBack } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { userLogIn } from "../../redux/slices/authSlice";
import CustomButton from "../../components/CustomButton";

const Services = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBackClick = () => {
    navigate("/");
  };

  const goToDisposal = () => {
    navigate("/disposal");
    console.log("clicked");
  };

  // const [dropDown, setDropDown] = useState(false);
  const [user, setUser] = useState("");

  const logIn = () => {
    dispatch(userLogIn(user));
    navigate(`/services/${user}`);
  };

  // const Login = () => {
  //   navigate();
  // };

  // const toggleUserDropdown = () => {
  //   setDropDown(!dropDown);
  // };

  return (
    <div>
      <section className={styles.header}>
        <IoMdArrowRoundBack className={styles.back} onClick={handleBackClick} />

        <h1>SERVICES</h1>

        {/* {!dropDown ? (
          <FaRegUserCircle className={styles.user} onClick={logIn} />
        ) : (
          <CustomButton buttonText={"Login"} />
        )} */}
        <FaRegUserCircle className={styles.user} onClick={logIn} />
      </section>

      <section className={styles.main}>
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
          src={cardImages["history"]}
          cardTitle={"Schedule History"}
          cardHeader={"View History"}
          cardText={"View your past schedules, Check your history..."}
          buttonText={"Proceed"}
        />

        <Card
          src={cardImages["history"]}
          cardTitle={"Schedule History"}
          cardHeader={"View History"}
          cardText={"View your past schedules, Check your history..."}
          buttonText={"Proceed"}
        />

        <Card
          src={cardImages["history"]}
          cardTitle={"Schedule History"}
          cardHeader={"View History"}
          cardText={"View your past schedules, Check your history..."}
          buttonText={"Proceed"}
        />
      </section>
    </div>
  );
};

export default Services;
