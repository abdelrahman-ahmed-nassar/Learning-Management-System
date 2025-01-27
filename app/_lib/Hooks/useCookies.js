import { useState, useEffect } from "react";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ""}${expires}; path=/`;
}

function useCookies(key, initialValue, days) {
  const [cookie, setCookieState] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = getCookie(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setCookieValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(cookie) : value;
      setCookieState(valueToStore);
      if (typeof window !== "undefined") {
        setCookie(key, JSON.stringify(valueToStore), days);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [cookie, setCookieValue];
}

export default useCookies;

// import React from "react";
// import useCookies from "./useCookies";

// const ExampleComponent = () => {
//   const [name, setName] = useCookies("name", "John Doe", 7);

//   return (
//     <div>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <p>{name}</p>
//     </div>
//   );
// };

// export default ExampleComponent;