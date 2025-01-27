import React from "react";
import Link from "next/link";
import logo from "@/public/assets/images/logos/logo.png";
import Image from "next/image";

import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo-container">
      <Link href="/">
        <Image className="logo" src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
