import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";
const PrivateRoute = ({ children }) => {
  const { user, isloading } = useAuth();
  const location = useLocation();

  if (isloading) {
    return (
      <div>
        <h1>Loading......................</h1>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
