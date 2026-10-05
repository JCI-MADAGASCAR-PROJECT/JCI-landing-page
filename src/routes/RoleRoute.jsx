import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Loader from './../components/ui/Loader';


const RoleRoute = ({ allowedRoles }) => {
  const { user, loading } = useContext(UserContext);
  
  if (loading) return (
<div className='bg-jci-blue flex flex-col justify-center items-center h-screen text-[20px] text-jci-white gap-3 font-poppins'>
  <Loader />
</div>
)

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to={`/admin/unauthorized`} replace />;
  }

  return <Outlet />;
};

export default RoleRoute;