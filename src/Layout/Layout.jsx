import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <div >
        <NavBar />
        <div className="min-h-[calc(100vh-238px)]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
