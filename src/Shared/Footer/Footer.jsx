import { Typography } from "@material-tailwind/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className=" w-full py-6 mb-0  border-t border-[#FFB641]   bg-[#050709]">
        <div className="flex flex-col max-w-7xl mx-auto items-center justify-center  md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-[#FFB641] md:mb-0"
          >
            &copy; All Rights Reserved {currentYear} | Md.Emon Miah
          </Typography>
          <div className="flex gap-4 mt-4 text-white sm:justify-center">
            <ul className="my-1 flex gap-1 lg:mb-0 lg:mt-0 flex-row lg:items-center lg:gap-6">
              <Typography as="li" color="white" className="p-1 font-medium">
                <a
                  href="#about"
                  className="flex items-center text-lg font-semibold hover:text-[#FFB641] transition-colors"
                >
                  About Me
                </a>
              </Typography>
              <Typography as="li" color="white" className="p-1 font-medium">
                <a
                  href="#skills"
                  className="flex items-center text-lg font-semibold hover:text-[#FFB641] transition-colors"
                >
                  Skills
                </a>
              </Typography>
              <Typography as="li" color="white" className="p-1 font-medium">
                <a
                  href="#projects"
                  className="flex items-center text-lg font-semibold hover:text-[#FFB641] transition-colors"
                >
                  Projects
                </a>
              </Typography>
              <Typography as="li" color="white" className="p-1 font-medium">
                <a
                  href="#education"
                  className="flex items-center text-lg font-semibold hover:text-[#FFB641] transition-colors"
                >
                  Education
                </a>
              </Typography>
              <Typography as="li" color="white" className="p-1 font-medium">
                <a
                  href="#contact"
                  className="flex items-center text-lg font-semibold hover:text-[#FFB641] transition-colors"
                >
                  Contact
                </a>
              </Typography>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
