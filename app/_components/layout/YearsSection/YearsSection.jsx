import React from "react";
import YearCard from "../../UI/YearCard/YearCard";

import "./YearsSection.scss";

import Year1 from "@/public/assets/images/years/year-1.png";
import Year2 from "@/public/assets/images/years/year-2.png";
import Year3 from "@/public/assets/images/years/year-3.png";

const YearsSection = () => {
  return (
    <section className="YearsSection">
      <YearCard
        image={Year1}
        mainText={"الصف الدراسي الأول"}
        secondaryText={"جميع كورسات الصف الأول الثانوي"}
        href={"years/1"}
        />
      <YearCard
        image={Year2}
        mainText={"الصف الدراسي الثاني"}
        secondaryText={"جميع كورسات الصف الثاني الثانوي"}
        href={"years/2"}
        />
      <YearCard
        image={Year3}
        mainText={"الصف الدراسي الثالث"}
        secondaryText={"جميع كورسات الصف الثالث الثانوي"}
        href={"years/3"}
      />
      
    </section>
  );
};

export default YearsSection;
