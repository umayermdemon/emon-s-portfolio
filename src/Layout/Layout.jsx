import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const Layout = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (
      document.documentElement.scrollTop > 20 ||
      document.body.scrollTop > 20
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div>
      <div>
        <NavBar />
        <div className="min-h-[calc(100vh-238px)]">
          <Outlet />
        </div>
      </div>
      <div>
        <button
          className={`scroll-to-top ${
            isVisible
              ? "show  p-4 gradient rounded-2xl text-[#FFB641]"
              : " p-4 gradient rounded-2xl text-[#FFB641]"
          }`}
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
// className="bg-[#bdb29f] p-4 gradient rounded-2xl text-[#FFB641]"
