import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return <div>{isLoggedIn ? <Outlet /> : <Navigate to={"/"} />}</div>;
};

export default ProtectedRoute;
