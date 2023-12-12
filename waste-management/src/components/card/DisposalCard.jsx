import React from "react";
import bgImg from "../../assets/images/disposalBg.jpg";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DisposalCard = ({ id, cardTitle, details, duration, }) => {
  // const { subscriptions } = useSelector((state) => state.subscriptions);
  // console.log(subscriptions);
  // const sub = subscriptions.length > 0 ? subscriptions[0] : null;
  // const cardTitle = sub ? sub.location : "Location";
  // const details = sub ? sub.pickupAddress : "Pickup Address";
  // const duration = sub ? sub.selectedDuration : "Subscription type";

  return (
    <div className="py-4">
      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure>
          <img src={ bgImg } alt="background" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{ cardTitle }</h2>
          <p>{ details }</p>
          <p>{ `${duration}ly` }</p>
          <div className="card-actions justify-end">
            <Link to={ `checkout/${id}` } className="btn btn-outline bg-olive-500 text-white">
              Schedule Pick-up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisposalCard;
