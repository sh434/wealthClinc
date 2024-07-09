import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
  const isAuthenticated = user;
  if (isAuthenticated) {
    return children;
  } else {
    <Navigate to="/" />;
  }
  //   return <div>ProtectedRoute</div>;
};

export default ProtectedRoute;

// pehle token lo cookie me se gettoken or  us token ko validate kro
// saydh wo token se he user kaa data milega agr hme user kaa data mil jata hai
// toh us user ko wo page display krwa do

// or agr token nhi hai / login nhi hi toh redirect krwado do login page pr tb handlelogin krte time cookies
//  ko set krlo tb privateRoute work krne lgenge
