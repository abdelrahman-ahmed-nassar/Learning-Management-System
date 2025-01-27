"use client";

import { IoLogoFacebook, IoLogoWhatsapp, IoLogoYoutube } from "react-icons/io5";

import React from "react";
import "./Footer.scss";

function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="Footer">
      <div className="social-media-links">
        <ul>
          <SocialMediaLink href="https://www.facebook.com/">
            <IoLogoFacebook color="#0866FF" />
          </SocialMediaLink>
          <SocialMediaLink href="https://www.whatsapp.com/">
            <IoLogoWhatsapp color="#59CE72" />
          </SocialMediaLink>
          <SocialMediaLink href="https://www.youtube.com/">
            <IoLogoYoutube color="#FF0000" />
          </SocialMediaLink>
        </ul>
      </div>
      <div className="divider"></div>
      <div className="footer-message">
        <p className="emoji">💓</p>
        <p className="text">
          تم صنع هذه المنصة بهدف تهيئة الطالب لـ كامل جوانب الثانوية العامة و ما
          بعدها
        </p>
        <p className="emoji">💓</p>
      </div>
      <div className="copy-rights" dir="ltr">
        <p>
          <span>
            <span className="bracket">&lt;</span>
            Developed By
            <span className="bracket">&gt;</span>
          </span>

          <span className="developers-names">
            <span>
              <a
                className="developer-name"
                href="https://abdelrahman-nassar.netlify.app"
                target="_blank"
              >
                Abdelrahman
              </a>
            </span>
            <span>,</span>
            <span>
              <a className="developer-name" href="/" target="_blank">
                Yousof
              </a>
            </span>
          </span>

          <span>
            {" "}
            <span className="bracket">&lt;</span> All Copy Rights Reserved @
            {currentYear} <span className="bracket">&gt;</span>
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

function SocialMediaLink({ href, children }) {
  return (
    <li>
      <a href={href} target="_blank">
        {children}
      </a>
    </li>
  );
}
