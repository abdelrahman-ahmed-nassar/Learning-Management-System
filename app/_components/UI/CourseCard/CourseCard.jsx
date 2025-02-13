import React from "react";

import { TfiReload } from "react-icons/tfi";
import { FiFilePlus } from "react-icons/fi";

import course1 from "@/public/assets/images/courses/course-1.jpg";

import Image from "next/image";
import Link from "next/link";

const CourseCard = ({
  imageUrl,
  title,
  description,
  price,
  publishDate,
  lastEditedDate,
  id,
}) => {
  return (
    <div
      data-ui="courseCard"
      className="group relative h-fit w-fit max-w-full pb-10"
    >
      <div
        data-ui="container"
        className="flex flex-col items-center rounded-md"
      >
        <div
          data-ui="image-container"
          className="overflow-hidden rounded-2xl !border-0"
        >
          <Image
            src={imageUrl}
            alt="course-image"
            className="h-fit max-w-full rounded-2xl object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:saturate-150"
          />
        </div>
        <div className="z-10 -mt-10 w-full px-5">
          <div
            data-ui="text-container"
            className="transform space-y-4 rounded-md border border-slate-300 bg-primaryBg px-4 py-6 shadow-md transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-lg dark:border-slate-800"
          >
            <h3 className="pr-1 text-xl">{title} </h3>
            <div className="smooth h-[2px] w-full rounded-lg bg-primary-400 dark:bg-primary-600"></div>
            <div data-ui="body" className="mb-6 text-sm text-secondaryTxt">
              <p>{description}</p>
            </div>
            <div data-ui="divider" className="px-10">
              <div className="h-[2px] w-full bg-secondaryBg"></div>
            </div>
            <div className="mb-3 flex flex-col justify-center gap-3 md:flex-row md:items-center text-sm font-medium text-center">
              <Link
                href={`/courses/${id}`}
                className="border-accent hover:bg-accent rounded-full border-2 px-3 py-1 transition hover:text-white md:w-fit"
              >
                محتوي الكورس
              </Link>
              <Link
                href={`/courses/${id}/subscribe`}
                className="bg-accentGradient rounded-full px-3 py-1  text-white transition-colors hover:opacity-80 focus-visible:outline-none"
              >
                اشترك الآن!
              </Link>
            </div>
            <div className="h-[2px] w-full bg-secondaryBg"></div>
            <div
              data-ui="footer"
              className="flex-cols flex items-center justify-between md:flex-row"
            >
              <div
                data-ui="price"
                className="bg-accent rounded-md px-3 py-1 text-sm font-bold text-white"
              >
                <span className="mx-1 my-0 inline-block rounded-lg bg-primaryBg px-2 py-1 text-xs text-primaryTxt">
                  {price}
                </span>
                <span>جنية</span>
              </div>
              <div
                data-ui="dates"
                className="flex flex-col text-xs text-secondaryTxt"
              >
                <span className="flex items-center justify-between gap-2">
                  <span>{publishDate}</span>
                  <span>
                    <FiFilePlus />
                  </span>
                </span>
                <span className="flex items-center justify-between gap-2">
                  <span>{lastEditedDate}</span>
                  <span>
                    <TfiReload />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
