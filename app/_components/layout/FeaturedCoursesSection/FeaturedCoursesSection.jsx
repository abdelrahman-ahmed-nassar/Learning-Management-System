import React from "react";

import "./FeaturedCoursesSection.scss";

import course1 from "@/public/assets/images/courses/course-1.jpg";
import course2 from "@/public/assets/images/courses/course-2.jpg";
import course3 from "@/public/assets/images/courses/course-3.jpg";
import course4 from "@/public/assets/images/courses/course-4.jpg";

import Carousel from "../../UI/Carousel/Carousel";


import Image from "next/image";

const items = [
  {
    image: {
      url: course1,
      alt: "course",
    },
    text: {
      link: "/courses/1",
      heading: "كورس البيولوجيا الجزيئية كاملاً للعام والأزهر",
      description:"أهلا يك صديقى المراكم ية هنفرم كل اللى فات بإذن الله مى أقل من أسبوعين بس محتاجين نشد جامد ونعمل كل اللى علينا عشا ربنا يكرمنا",
      price: "200"
    }
  },
  {
    image: {
      url: course2,
      alt: "course",
    },
    text: {
      link: "/courses/2",
      heading: "كورس البيولوجيا الجزيئية كاملاً للعام والأزهر",
      description:"أهلا يك صديقى المراكم ية هنفرم كل اللى فات بإذن الله مى أقل من أسبوعين بس محتاجين نشد جامد ونعمل كل اللى علينا عشا ربنا يكرمنا",
      price: "150"
    }
  },
  {
    image: {
      url: course3,
      alt: "course",
    },
    text: {
      link: "/courses/3",
      heading: "كورس البيولوجيا الجزيئية كاملاً للعام والأزهر",
      description:"أهلا يك صديقى المراكم ية هنفرم كل اللى فات بإذن الله مى أقل من أسبوعين بس محتاجين نشد جامد ونعمل كل اللى علينا عشا ربنا يكرمنا",
      price: "150"
    }
  },
  {
    image: {
      url: course4,
      alt: "course",
    },
    text: {
      link: "/courses/4",
      heading: "كورس البيولوجيا الجزيئية كاملاً للعام والأزهر",
      description:"أهلا يك صديقى المراكم ية هنفرم كل اللى فات بإذن الله مى أقل من أسبوعين بس محتاجين نشد جامد ونعمل كل اللى علينا عشا ربنا يكرمنا",
      price: "150"
    }
  },
  
];

const FeaturedCoursesSection = () => {
  return (
    <>
      <section className="FeaturedCoursesSection">
        <div className="text-container">
          <h1 className="main-heading mb-7">
            الكورسات <span className="colored">المُقترحة</span>
          </h1>
          <p className="description">
            استعد للتفوق مع أفضل الكورسات على منصة م. محمد هيكل! الكورسات دي مش
            بس هتسهل عليك المذاكرة، لكنها كمان هتخليك مميز بين زمايلك!
          </p>
        </div>
        <div className="carousel-container">
          <Carousel items={items}></Carousel>
        </div>
      </section>
    </>
  );
};

export default FeaturedCoursesSection;
