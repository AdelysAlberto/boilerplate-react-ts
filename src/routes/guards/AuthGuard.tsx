import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = () => {

  const validateUser = () => false;

  return validateUser() ? <Outlet /> : <Navigate replace to={'/'} />
}


export default AuthGuard; 