"use client";

import "./FormPageWrapper.scss";


export default function FormPageWrapper({children, image}) {
  return (
    <section className="form-page">
      <div className="image-container">
        <div
          className="image"
          style={{
            backgroundImage: `url(${image.src})`,
          }}
        >
          <div className="layer"></div>
        </div>
      </div>

      <div className="form-container">
        {children}
      </div>
    </section>
  );
}
