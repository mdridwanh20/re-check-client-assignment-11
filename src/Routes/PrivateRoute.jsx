import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "../Component/ShareComp/Loader";
import { Navigate, useLocation } from "react-router";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    return (
      <Navigate to={`/login`} state={{ from: location }} replace></Navigate>
    );
  }

  return children;
}
