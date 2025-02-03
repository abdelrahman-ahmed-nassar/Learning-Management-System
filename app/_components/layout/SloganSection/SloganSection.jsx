import React from 'react';
import patterImg from "@/public/assets/images/hero/pattern.png";


import "./SloganSection.scss"

const SloganSection = () => {
  return (
  
    <section className="SloganSection">
    <div
      className="pattern"
      style={{
        backgroundImage: `url(${patterImg.src})`,
      }}
    ></div>
    <div className="text">
      <p>تذكر ... أدومها وإن قل</p>
    </div>
  </section>

  )
}

export default SloganSection