// pages/404.js
import React from "react";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="container">
      <h1 className="title">404 - Page Not Found</h1>
      <p className="description">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}
