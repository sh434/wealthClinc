import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [screeSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [screeSize.width, screeSize.height];
};

export default useWindowSize;
