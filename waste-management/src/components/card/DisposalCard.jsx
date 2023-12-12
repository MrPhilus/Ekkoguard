import React from "react";
import bgImg from "../../assets/images/disposalBg.jpg";
import { useSelector } from "react-redux";

const DisposalCard = () => {
  const { subscriptions } = useSelector((state) => state.subscriptions);
  console.log(subscriptions);
  const sub = subscriptions.length > 0 ? subscriptions[0] : null;

  const cardTitle = sub ? sub.location : "Location";
  const details = sub ? sub.pickupAddress : "Pickup Address";
  const duration = sub ? sub.selectedDuration : "Subscription type";

  return (
    <div className="py-4">
      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure>
          <img src={bgImg} alt="background" />
        </figure>
        <div className="card-body">
          <div className="flex flex-col gap-4 md:gap-7 items-start h-full justify-between">
            <h2 className="card-title text-2xl md:text-4xl lg:text-5xl text-white">
              {cardTitle}
            </h2>
            <p className="text-sm md:text-base lg:text-lg">{details}</p>
            <div className="w-full flex items-center justify-between">
              <p
                className={
                  "capitalize font-bold text-lg md:text-2xl lg:text-3xl"
                }
              >
                {`${duration}ly`}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-ghost bg-olive-500 text-white">
                  Schedule Pick-up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisposalCard;
