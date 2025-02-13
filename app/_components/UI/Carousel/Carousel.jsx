"use client";

import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

import "./Carousel.scss";

const Carousel = ({ items }) => {
  const [slide, setSlide] = useState(0);

  const prevSlide = () => {
    setSlide(slide === items.length - 1 ? 0 : slide + 1);
  };

  const nextSlide = () => {
    setSlide(slide === 0 ? items.length - 1 : slide - 1);
  };

  return (
    <div className="Carousel bg-mainGradient">
      <div style={{ overflowX: "hidden" }}>
        <div
          className="container"
          style={{ transform: `translateX(${slide * 100}%)` }}
        >
          {items.map(({ image, text }, idx) => {
            return (
              <div
                className={`carousel-item ${
                  slide === idx ? "slide" : "slide slide-hidden"
                }`}
                key={idx}
              >
                <Link href={text.link}>
                  <div className="image-container">
                    <Image
                      src={image.url}
                      alt="course-image"
                      placeholder="blur"
                    />
                  </div>
                  <div className="text-container">
                    <h3>{text.heading}</h3>
                    <p>{text.description}</p>
                    <span className="price bg-mainGradient">
                      {text.price} جنيه
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <BiSolidRightArrow onClick={nextSlide} className="arrow arrow-right" />
      <BiSolidLeftArrow onClick={prevSlide} className="arrow arrow-left" />
      <span className="indicators">
        {items.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx
                  ? "indicator indicator-active"
                  : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
