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
  const yearName = useGetYearName(id);
  return {
    title: {
      default: `${yearName}`,
    },
    description: "منصة تعليمية للغة الإنجليزية",
  };
}

import course1 from "@/public/assets/images/courses/course-1.jpg";
import course2 from "@/public/assets/images/courses/course-2.jpg";
import course3 from "@/public/assets/images/courses/course-3.jpg";
import course4 from "@/public/assets/images/courses/course-4.jpg";

const yearlyCourses = [
  {
    imageUrl: course1,
    title: "أزهر - الكورس السنوي للثانوية الأزهرية",
    description: "محتوي شرح مادة اللغة الإنجليزية لشهر ديسمبر 12 ❤️💯",
    coursePreviewUrl: "/course/4",
    coursePurchaseUrl: "/courses",
    price: "199",
    publishDate: "الخميس، ٢ يناير ٢٠٢٥",
    lastEditedDate: "الجمعة، ٢٦ يوليو ٢٠٢٤",
    id: 1,
  },
  {
    imageUrl: course2,
    title: "أزهر - الكورس السنوي للثانوية الأزهرية",
    description: "محتوي شرح مادة اللغة الإنجليزية لشهر ديسمبر 12 ❤️💯",
    coursePreviewUrl: "/course/4",
    coursePurchaseUrl: "/courses",
    price: "199",
    publishDate: "الخميس، ٢ يناير ٢٠٢٥",
    lastEditedDate: "الجمعة، ٢٦ يوليو ٢٠٢٤",
    id: 2,
  },
  {
    imageUrl: course3,
    title: "أزهر - الكورس السنوي للثانوية الأزهرية",
    description: "محتوي شرح مادة اللغة الإنجليزية لشهر ديسمبر 12 ❤️💯",
    coursePreviewUrl: "/course/4",
    coursePurchaseUrl: "/courses",
    price: "199",
    publishDate: "الخميس، ٢ يناير ٢٠٢٥",
    lastEditedDate: "الجمعة، ٢٦ يوليو ٢٠٢٤",
    id: 3,
  },
  {
    imageUrl: course4,
    title: "أزهر - الكورس السنوي للثانوية الأزهرية",
    description: "محتوي شرح مادة اللغة الإنجليزية لشهر ديسمبر 12 ❤️💯",
    coursePreviewUrl: "/course/4",
    coursePurchaseUrl: "/courses",
    price: "199",
    publishDate: "الخميس، ٢ يناير ٢٠٢٥",
    lastEditedDate: "الجمعة، ٢٦ يوليو ٢٠٢٤",
    id: 4,
  },
];

export default function Year({ params }) {
  const { id } = React.use(params);

  return (
    <Wrapper>
      <Hero year={id} />
      <SloganSection />
      <FeaturedCoursesSection />
      <SectionTitle year={id} />
      <CoursesGroup title={"أحدث الكورسات"}>
        {yearlyCourses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            imageUrl={course.imageUrl}
            description={course.description}
            lastEditedDate={course.lastEditedDate}
            price={course.price}
            publishDate={course.publishDate}
            id={course.id}
          />
        ))}
      </CoursesGroup>
    </Wrapper>
  );
}
