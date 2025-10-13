import { useEffect, useState } from "react";

export const useMediaQuery = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 641);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobile,
    isTablet,
  };
};
