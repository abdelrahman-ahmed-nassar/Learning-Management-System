import React, { useState, useRef } from "react";
import "./Collapse.scss"; // Import the CSS file for styling

const CoursesCollapse = ({ title, children }) => {
  const [titleFirst, ...restTitle] = title.split(" ");

  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        onClick={toggleCollapse}
        style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
      >
        <h3 className="py-8 text-5xl">
          <span>{titleFirst}</span>{" "}
          <span className="text-primary-600">{restTitle.join(" ")}</span>
        </h3>
        <div className="mr-5">
          <span className="text-sm text-secondary-500 underline">
            عرض الكورسات
          </span>
          <span className="text-sm text-secondary-500 underline">
            {isOpen ? "▲" : "▼"}
          </span>
        </div>
      </div>

      <div
        ref={contentRef}
        className={`collapse-content ${isOpen ? "open" : ""}`}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
      >
        {children}
      </div>
      {!isOpen && (
        <div
          onClick={toggleCollapse}
          className="mx-auto w-fit cursor-pointer rounded-md border-2 border-slate-500 bg-slate-500 bg-opacity-5 px-10 py-4 text-xl font-bold transition"
        >
          . . . .
        </div>
      )}
    </div>
  );
};

export default CoursesCollapse;
