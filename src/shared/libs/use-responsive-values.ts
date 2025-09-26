import { useEffect, useState } from "react";

export const useResponsiveValues = ({ aspect }: { aspect: "16/9" | "3/4" }) => {
  const [values, setValues] = useState({
    cardWidth: "24%",
  });

  useEffect(() => {
    const handleResize = () => {
      if (aspect === "3/4") {
        if (window.matchMedia("(max-width: 480px)").matches) {
          setValues({ cardWidth: "45%" });
        } else if (window.matchMedia("(max-width: 640px)").matches) {
          setValues({ cardWidth: "35%" });
        } else if (window.matchMedia("(max-width: 769px)").matches) {
          setValues({ cardWidth: "30%" });
        } else {
          setValues({ cardWidth: "50%" });
        }
      } else {
        if (window.matchMedia("(max-width: 480px)").matches) {
          setValues({ cardWidth: "90%" });
        } else if (window.matchMedia("(max-width: 640px)").matches) {
          setValues({ cardWidth: "80%" });
        } else if (window.matchMedia("(max-width: 769px)").matches) {
          setValues({ cardWidth: "50%" });
        } else {
          setValues({ cardWidth: "44%" });
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return values;
};
