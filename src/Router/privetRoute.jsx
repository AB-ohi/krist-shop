import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
// import useUserData from "../Hook/useUserData";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  // const {User} = useUserData()
  const location = useLocation();
  if (loading ) {
    return (
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <img src="../../public/img/loading.gif" alt="" />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;
