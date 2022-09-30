import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const navigate = useNavigate();
  const token = useSelector((store)=>store.auth.data.token)
  const isAuthenticated= useSelector((store)=>store.auth.data.isAuthenticated);
  console.log(store.auth)
  const { pathname } = useLocation();
  console.log(isAuthenticated)
  console.log(token)
  if(isAuthenticated){
    return children
  }else{
    <Navigate to="/login"
    state={{from:pathname}}
    replace
    />
  // //  return navigate("/login")
  }
  
};

export default RequiredAuth;
