import { useContext } from "react";
import { appContext } from "../../context/app-context";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { isLogin } = useContext(appContext);
  return <>{isLogin ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
