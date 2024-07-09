import { useEffect, useState } from "react";

const useScrollY = (scrollIny) => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollIny) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollIny]);

  return [isSticky];
};

export default useScrollY;
