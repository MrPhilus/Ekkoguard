import React from "react";
import bgImg from "../../assets/images/disposalBg.jpg";

const DisposalCard = ({ cardTitle, details }) => {
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure>
          <img src={bgImg} alt="background" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline bg-olive-500 text-white">
              Schedule Pick-up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisposalCard;
