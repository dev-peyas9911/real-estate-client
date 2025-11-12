import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import { MoonLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-[97vh] flex items-center justify-center">
        <MoonLoader color="#e74c3c" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signin" state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoute;