import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import {
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import logo from "../../assets/logo4.png";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center text-lg font-semibold hover:text-[#FFB641] transition-colors"
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center text-lg font-semibold hover:text-[#FFB641] transition-colors"
        >
          About Me
        </a>
      </Typography>
      <Typography
        as="li"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center text-lg font-semibold hover:text-[#FFB641] transition-colors"
        >
          Blogs
        </a>
      </Typography>
      <Typography
        as="li"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center text-lg font-semibold hover:text-[#FFB641] transition-colors"
        >
          Contact
        </a>
      </Typography>
    </ul>
  );
}

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div>
      <Navbar className="mx-auto  px-6 py-3 pt-8 bg-[#100D23] border-none shadow-none">
        <div className="flex items-center text-lg font-semibold justify-between ">
          <img src={logo} alt="" className="w-16 rounded-full" />
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
