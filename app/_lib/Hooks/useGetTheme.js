import { useState, useEffect } from "react";

const useGetTheme = () => {
  const [theme, setTheme] = useState(() => {
    return document.documentElement.getAttribute("data-theme");
  });

  useEffect(() => {
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          setTheme(document.documentElement.getAttribute("data-theme"));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      observer.disconnect();
    };

  }, []);

  return theme;
};

export default useGetTheme;
