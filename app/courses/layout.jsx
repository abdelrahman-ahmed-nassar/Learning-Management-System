
import Hero from "../_components/layout/HeroSection/HeroSection";
import Wrapper from "../_components/layout/Wrapper/Wrapper";
import SloganSection from "../_components/layout/SloganSection/SloganSection";
import FeaturedCoursesSection from "../_components/layout/FeaturedCoursesSection/FeaturedCoursesSection";

export default function RootLayout({ children }) {
  return (
    <Wrapper>
      <Hero />
      <SloganSection  />
      <FeaturedCoursesSection />
      {children}
    </Wrapper>
  );
}