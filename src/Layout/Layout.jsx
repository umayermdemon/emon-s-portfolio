import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <NavBar />
        <div className="min-h-[calc(100vh-235px)]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
