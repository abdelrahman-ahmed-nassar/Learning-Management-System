import { useEffect } from "react";

function useKey(key, callback) {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === key) {
        callback(event);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [key, callback]);
}

export default useKey;


// import React from "react";
// import useKey from "./useKey";

// const ExampleComponent = () => {
//   const handleKeyPress = (event) => {
//     console.log(`Key pressed: ${event.key}`);
//   };

//   useKey("Enter", handleKeyPress);

//   return (
//     <div>
//       <p>Press the "Enter" key to trigger the callback function.</p>
//     </div>
//   );
// };

// export default ExampleComponent;