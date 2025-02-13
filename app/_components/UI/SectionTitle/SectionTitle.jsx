"use client";

import React from "react";
import "./SectionTitle.scss";
import useGetYearName from "@/app/_lib/Hooks/useGetYearName";

const SectionTitle = ({ children, year }) => {
  const yearName = useGetYearName(year);
  if (year) {
    return <h1 className="SectionTitle text-4xl md:text-5xl ">{yearName}</h1>;
  }
  return <h1 className="SectionTitle text-4xl md:text-5xl">{children}</h1>;
};

export default SectionTitle;
