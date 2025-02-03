
import React from "react";
import Hero from "../../_components/layout/HeroSection/HeroSection";
import Wrapper from "../../_components/layout/Wrapper/Wrapper";
import SloganSection from "../../_components/layout/SloganSection/SloganSection";
import FeaturedCoursesSection from "../../_components/layout/FeaturedCoursesSection/FeaturedCoursesSection";
import SectionTitle from "@/app/_components/UI/SectionTitle/SectionTitle";
import CoursesGroup from "@/app/_components/UI/CoursesGroup/CoursesGroup";
import CourseCard from "@/app/_components/UI/CourseCard/CourseCard";
// import useGetYearName from "@/app/_lib/Hooks/useGetYearName";



export default function Year({params}) {
  const { yearId } = React.use(params);
    return (
      <Wrapper>
        <Hero year={yearId} />
        <SloganSection  />
        <FeaturedCoursesSection />
        <SectionTitle year={yearId}/>
        <CoursesGroup label={"أحدث الكورسات"}>
          <h1>hello</h1>
          <CourseCard></CourseCard>
        </CoursesGroup>
      </Wrapper>
    );
}