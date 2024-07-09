import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useUrlNormalizer = (currentPath) => {
  //   const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // const currentPath = location.pathname;
    const lowercasePath = currentPath.toLowerCase();

    if (currentPath !== lowercasePath) {
      navigate(lowercasePath, { replace: true });
    }
  }, [currentPath, navigate]);
};

export default useUrlNormalizer;
