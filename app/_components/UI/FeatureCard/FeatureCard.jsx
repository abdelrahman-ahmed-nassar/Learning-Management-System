import React from "react";
import "./FeatureCard.scss";

const FeatureCard = ({ children, icon, textPrimary, textSecondary }) => {
  return (
    <div className="FeatureCard">
      <div className="icon-wrapper">{icon}</div>
      <div className="text-wrapper">
        <span className="primary-text">{textPrimary}</span>{" "}
        <span className="secondary-text">{textSecondary}</span>
      </div>
    </div>
  );
};

export default FeatureCard;
