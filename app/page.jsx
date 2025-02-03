import SloganSection from "./_components/layout/SloganSection/SloganSection";
import Hero from "@/app/_components/layout/HeroSection/HeroSection";
import SectionTitle from "./_components/UI/SectionTitle/SectionTitle";
import FeaturesSection from "./_components/layout/FeaturesSection/FeaturesSection";
import YearsSection from "./_components/layout/YearsSection/YearsSection";
import FeaturedCoursesSection from "./_components/layout/FeaturedCoursesSection/FeaturedCoursesSection";

import "./_styles/_variables.scss"

import "./page.scss";
export default function Home() {
  return (
    <>
      <Hero />
      <SloganSection />
      <FeaturedCoursesSection />
      <FeaturesSection />
      <SectionTitle>السنوات الدراسية</SectionTitle>
      <YearsSection />
    </>
  );
}
