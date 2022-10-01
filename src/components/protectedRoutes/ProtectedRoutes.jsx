import {Outlet} from "react-router-dom"
import { useSelector } from "react-redux";
import Login from "../Login/Login";
import Navbar from "../navbar/Navbar"

function ProtectedRoutes() {
  const {isLoggedIn} = useSelector((store) => store.auth);
  return isLoggedIn ? (
    <div>
        <Navbar />
        <Outlet />
    </div>
  ) : <Login />
}

export default ProtectedRoutes