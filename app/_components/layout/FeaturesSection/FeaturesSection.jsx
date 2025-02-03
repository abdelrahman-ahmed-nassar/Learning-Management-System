import React from "react";

import "./FeaturesSection.scss";

import FeatureCard from "../../UI/FeatureCard/FeatureCard";

import { IoRepeat } from "react-icons/io5";
import { TbClockPlus } from "react-icons/tb";
import { FaPenToSquare } from "react-icons/fa6";

const FeaturesSection = () => {
  return (
    <section className="FeaturesSection">
      <div className="wrapper-container">
        <FeatureCard
          textPrimary={"توفير"}
          textSecondary={"للوقت و المجهود"}
          icon={<TbClockPlus />}
        ></FeatureCard>
        <FeatureCard
          textPrimary={"امتحانات و واجبات"}
          textSecondary={"تفاعلية"}
          icon={<FaPenToSquare />}
        ></FeatureCard>
        <FeatureCard
          textPrimary={"متابعة"}
          textSecondary={"دورية و مستمرة"}
          icon={<IoRepeat />}
        ></FeatureCard>
      </div>
    </section>
  );
};

export default FeaturesSection;
