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

import CoursesCollapse from "../Collapse/CoursesCollapse";
import CourseCard from "../CourseCard/CourseCard";

const CoursesGroup = ({ label, children }) => {
  return (
    <div className="CoursesGroup mb-12">
      <CoursesCollapse title={"الكورس السنوي"}>
        <div className="courses-container">
          {children}
        </div>
      </CoursesCollapse>
    </div>
  );
};

export default CoursesGroup;
