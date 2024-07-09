import { Route } from "react-router-dom";

const CustomRoute = ({ to, ...props }) => (
  <Route to={to.toLowerCase()} {...props} />
);

export default CustomRoute;
