import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UrlNormalizer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const currentPath = location.pathname;
    const lowercasePath = currentPath.toLowerCase();

    if (location.pathname !== lowercasePath) {
      navigate(lowercasePath, { replace: true });
    }
  }, [location, navigate]);
  return null;
};

export default UrlNormalizer;
