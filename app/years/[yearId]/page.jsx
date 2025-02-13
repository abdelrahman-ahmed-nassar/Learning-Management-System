import React, { use } from "react";
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
  const { yearId } = await params;
  const yearName = useGetYearName(yearId);
  return {
    title: {
      default: `${yearName}`,
    },
    description: "منصة تعليمية للغة الإنجليزية",
  };
}

export default function Year({ params }) {
  const { yearId } = React.use(params);

  return (
    <Wrapper>
      <Hero year={yearId} />
      <SloganSection />
      <FeaturedCoursesSection />
      <SectionTitle year={yearId} />
      <CoursesGroup label={"أحدث الكورسات"}>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
      </CoursesGroup>
      <CoursesGroup label={"كورسات الفصول"}>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
      </CoursesGroup>
      <CoursesGroup label={"المحاضرات الاسبوعية"}>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
        <CourseCard></CourseCard>
      </CoursesGroup>
    </Wrapper>
  );
}
