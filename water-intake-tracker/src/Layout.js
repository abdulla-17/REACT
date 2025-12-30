import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <p style={{color:"red"}}></p>
      <Outlet />
    </>
  );
}


export default Layout;
