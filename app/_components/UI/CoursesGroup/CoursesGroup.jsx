"use client";

import React from "react";
import { theme, ConfigProvider } from "antd";
import { BiSolidTopArrow } from "react-icons/bi";

import "./CoursesGroup.scss";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

import Collapse from "../Collapse/Collapse";
import CourseCard from "../CourseCard/CourseCard";

const CoursesGroup = ({ label, children }) => {
  return (
    <div className="CoursesGroup">
      <Collapse title={"احدث الكورسات"}>
        <div className="courses-container">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </Collapse>
    </div>
  );
};

export default CoursesGroup;
