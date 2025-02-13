import React, { useContext } from "react";
import "./HeroSection.scss";

import heroImage from "@/public/assets/images/hero/mr.png";

import Image from "next/image";
import Link from "next/link";
import useGetYearName from "@/app/_lib/Hooks/useGetYearName";

function Hero({ year }) {
  const yearName = useGetYearName(year);

  return (
    <section className="HeroSection">
      <div className="hero__text">
        <h1>
          <span>م / محمد </span>
          <span className="colored">هيكل</span>
        </h1>
        <p className="welcome-message">مرحبًا بك في رحلة من المتعة والتعلم</p>
        <p className="description">
          لكل ما يتعلق بمنهج
          <span className="colored"> اللغة الإنجليزية </span>
        </p>

        <Link href="/login">
          <button> أنشئ حسابك الآن</button>
        </Link>
        <p className="year">{yearName}</p>
      </div>
      <div className="hero_image">
        <Image className="logo" src={heroImage} alt="logo" priority/>
      </div>
    </section>
  );
}

export default Hero;
