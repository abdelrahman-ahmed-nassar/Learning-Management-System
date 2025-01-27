import { useState, useEffect } from "react";

// Define screen size constants
const VERY_LARGE_SCREEN = 1600;
const LARGE_SCREEN = 991;
const MEDIUM_SCREEN = 776;
const SMALL_SCREEN = 600;
const SO_SMALL_SCREEN = 400;

function useDeviceType() {
    const [deviceType, setDeviceType] = useState("desktop");

    useEffect(() => {
        const updateDeviceType = () => {
            const width = window.innerWidth;
            if (width < SO_SMALL_SCREEN) {
                setDeviceType("extra-small");
            } else if (width >= SO_SMALL_SCREEN && width < SMALL_SCREEN) {
                setDeviceType("small");
            } else if (width >= SMALL_SCREEN && width < MEDIUM_SCREEN) {
                setDeviceType("medium");
            } else if (width >= MEDIUM_SCREEN && width < LARGE_SCREEN) {
                setDeviceType("large");
            } else if (width >= LARGE_SCREEN && width < VERY_LARGE_SCREEN) {
                setDeviceType("very-large");
            } else {
                setDeviceType("extra-large");
            }
        };

        updateDeviceType();
        window.addEventListener("resize", updateDeviceType);

        return () => {
            window.removeEventListener("resize", updateDeviceType);
        };
    }, []);

    return deviceType;
}

export default useDeviceType;