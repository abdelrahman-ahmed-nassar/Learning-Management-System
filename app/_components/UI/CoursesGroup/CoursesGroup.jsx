"use client";

import React from "react";
import { theme, ConfigProvider } from "antd";
import { BiSolidTopArrow } from "react-icons/bi";

import CoursesCollapse from "../Collapse/CoursesCollapse";

const CoursesGroup = ({ title, children }) => {
  return (
    <div className="mb-12 py-8 space-y-10 px-4 sm:px-10 lg:px-6">
      <CoursesCollapse title={title}>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </CoursesCollapse>
    </div>
  );
};

export default CoursesGroup;
