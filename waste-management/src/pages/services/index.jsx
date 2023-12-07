import React, { useState } from "react";
import Card from "../../components/card";
import styles from "./services.module.css";
import { useNavigate, Link } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import CustomButton from "../../components/CustomButton";

import { services } from "./Data";

const Services = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  const goToLogin = () => {
    navigate("/login");
    console.log("clicked");
  };

  return (
    <div>
      <section className={styles.header}>
        <IoMdArrowRoundBack className={styles.back} onClick={handleBackClick} />

        {/* <h1 className="text-2xl font-extrabold">SERVICES</h1> */}

        {!isLoggedIn ? (
          <>
            <div className="flex items-center gap-4">
              <Link
                className="font-semibold hover:text-olive-500"
                to={"/feedback"}
              >
                Feedback
              </Link>
              <FaRegUserCircle className={styles.user} />
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
