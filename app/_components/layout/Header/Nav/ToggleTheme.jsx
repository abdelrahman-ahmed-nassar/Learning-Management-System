'use client';

import { useState, useEffect } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";
import "./ToggleTheme.scss";

const ToggleTheme = () => {
  const [colorTheme, setColorTheme] = useState(() => {
    const stored = localStorage.getItem("data-theme");
    return stored || "light";
  });

  useEffect(() => {
    document?.documentElement.setAttribute("data-theme", colorTheme);
  }, [colorTheme]);

  const changeTheme = () => {
    const newTheme = colorTheme === "light" ? "dark" : "light";
    setColorTheme(newTheme);
    localStorage.setItem("data-theme", newTheme);
  };

  return (
    <div className="theme-toggle" onClick={changeTheme}>
      {colorTheme === "light" ? (
        <IoMoon className="theme-icon moon" />
      ) : (
        <IoSunny className="theme-icon sun" />
      )}
    </div>
  );

};

export default ToggleTheme;