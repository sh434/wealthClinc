import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const useScrollOnTop = (Y = 0, X = 0, path) => {
  let { pathname } = useLocation();
  //   let route = path;
  //   if (!route) {
  //     route = pathname;
  //   }
  let route = path || pathname;
  useEffect(() => window.scrollTo(X, Y), [X, Y, route]);
};

export default useScrollOnTop;
