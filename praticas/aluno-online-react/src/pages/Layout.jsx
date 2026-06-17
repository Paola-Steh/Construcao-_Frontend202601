import "./Layout.css";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content">

          <Outlet />
      </div>
    </div>
  );
}

export default Layout;