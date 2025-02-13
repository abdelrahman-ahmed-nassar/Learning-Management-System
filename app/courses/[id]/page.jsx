import React from "react";

import Hero from "../../_components/layout/HeroSection/HeroSection";
import Wrapper from "../../_components/layout/Wrapper/Wrapper";
import SloganSection from "../../_components/layout/SloganSection/SloganSection";
import FeaturedCoursesSection from "../../_components/layout/FeaturedCoursesSection/FeaturedCoursesSection";
import SectionTitle from "@/app/_components/UI/SectionTitle/SectionTitle";
import CoursesGroup from "@/app/_components/UI/CoursesGroup/CoursesGroup";
import CourseCard from "@/app/_components/UI/CourseCard/CourseCard";

import useGetYearName from "@/app/_lib/Hooks/useGetYearName";

// import useGetYearName from "@/app/_lib/Hooks/useGetYearName";

export async function generateMetadata({ params }) {
  const { id } = await params;

  return {
    title: {
      default: `${id}`,
    },
    description: "منصة تعليمية للغة الإنجليزية",
  };
}

export default function Course({ params }) {
  const { id } = React.use(params);

  return (
    <div>{id}</div>
  );
}
