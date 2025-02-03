import React from "react";

import course1 from "@/public/assets/images/courses/course-1.jpg";

import Image from "next/image";

import "./CourseCard.scss";

const CourseCard = () => {
  return (
    <div className="CourseCard">
      <div className="container">
        <div className="image-container">
          <Image src={course1} alt="course-image" />
        </div>
        <div className="text-container">
          <div className="header">
            <h3>أزهر - الكورس السنوي للثانوية الأزهرية </h3>
            <div className="buttons">
              <button>الدخول للكورس</button>
              <button>اشترك الآن!</button>
            </div>
          </div>
          <div className="body">
            <p className="description">
              يشمل هذا الكورس 6 محاضرات + ورشة عمل على الفصل كاملاً ( مدة الكورس
              = 7 أسابيع ) الكورس مخفض وعليه خصم أكثر من 40 💯 🔥 المحاضرات
              كالتالى : الأسبوع الأول 1️⃣ ( الدعامة فى النبات 🌱 ) الأسبوع الثانى
              2️⃣ ( الهيكل العظمى فى الإنسان ) الأسبوع الثالث 3️⃣ ( من الغضاريف
              حتى نهاية الدرس الأول ) الأسبوع الرابع 4️⃣ ( مقدمة الحركة والحركة
              فى النبات ) الأسبوع الخامس 5️⃣ ( الجهاز العضلى والوحدة الحركية )
              الأسبوع السادس 6️⃣ ( الإنقباض والتعب والشد العضلى ) الأسبوع السابع
              والأخير 7️⃣ ( ورشة عمل الفصل كاملاً ) ⭐️ هنشرح وهنأكد علي رسومات
              وملاحظات الأزهر بعدين هنذاكر سوا بعدين هنحل من كتاب دكتور محمد
              أيمن أولاً وكتاب الإمتحان ثانياً وفى الورشة هنزود بإذن الله التفوق
              للعام والمرشد للأزهر ⭐️ على كل محاضرة فيه كويز خاص بالأزهر + واجب
              ودول هيتحلو معاك تليجرام فى جروب المشتركين ⭐️ إمتحان شامل بجوايز
              قيمة بعد الورشة بإذن الله🥇 ⭐️ هنرد على أسئلتك على التليجرام على
              مدار 16 ساعة يومياً من 8 ص ل 12 منتصف الليل ⭐️ تيم الدعم النفسى
              معاك ديماً لحل أى مشكله بتقابلك ويمنعك من التراكمات 💪🏽 ولا تنسى ….
              مُحمد يُحبك …❤️ ( وَأَنَّ سَعْيَهُ سَوْفَ يُرَى )
            </p>
          </div>
          <div className="footer">
            <div className="price">
              <span>199</span>
              <span>جنية</span>
            </div>
            <div className="dates">
              <span>الخميس، ٢ يناير ٢٠٢٥</span>
              <span>الجمعة، ٢٦ يوليو ٢٠٢٤</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
