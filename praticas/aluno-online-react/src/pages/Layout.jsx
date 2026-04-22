import "./Layout.css";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Layout({ children }) {
  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content">
        <Topbar />

        <div className="content-area">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;