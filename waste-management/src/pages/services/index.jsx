import React, { useState } from "react";
import Card from "../../components/card";
import styles from "./services.module.css";
import { useNavigate, Link } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import CustomButton from "../../components/CustomButton";
import { isAuthenticated } from "../../services/identityService";

import { services } from "./Data";
import { useSelector } from "react-redux";

const Services = () => {
  const isLoggedIn = isAuthenticated();
  const { authData } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <div>
      <section className={styles.header}>
        <IoMdArrowRoundBack
          className={`${styles.back} hover:text-olive-500`}
          onClick={handleBackClick}
        />

        {isLoggedIn ? (
          <>
            <div className="flex items-center gap-4">
              <Link
                className="font-semibold hover:text-olive-500"
                to={"/feedback"}
              >
                Suggestions or Complains?
              </Link>
              <FaRegUserCircle
                title={authData.firstName + " " + authData.firstName}
                className={`${styles.user} hover:text-olive-500`}
                onClick={goToProfile}
              />
            </div>
          </>
        ) : (
          <CustomButton
            containerStyle="btn btn-outline btn-sm text-white bg-olive-500 w-24"
            buttonText="Log In"
            onClick={goToLogin}
            buttonLink={"/login"}
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
