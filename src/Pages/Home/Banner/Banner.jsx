/* eslint-disable react/no-unescaped-entities */

import profileImg from "../../../assets/file.png";

const Banner = () => {
  return (
    <div className="lg:mt-12 lg:max-w-7xl mx-auto">
      <div className="flex items-center flex-col-reverse lg:justify-between lg:flex-row">
        <div className="flex-1 space-y-3 lg:space-y-4 px-4 md:px-0 ml-0 md:ml-8 lg:ml-0">
          <h1 className="text-base md:text-2xl text-white font-bold font-poppins">
            Hi, I'm{" "}
          </h1>
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold font-poppins">
            Md. Emon Miah{" "}
          </h1>
          <h2 className="text-[#FFB641] text-sm md:text-base font-poppins">Junior Web Developer</h2>
          <p className="font-poppins text-sm md:text-base text-white pb-4">
            Passionate about creating interactive and responsive web
            applications using modern technologies.
          </p>
          <a
            href="https://drive.google.com/file/d/1j82cd6oxSLNHOdTSGrxzeZVlDDffs3Cz/view"
            target="_blank"
          >
            <button className="hover:bg-[#FFB641] hover:text-gray-700 btn btn-outline font-bold text-[#FFB641]">
              Get Resume
            </button>
          </a>
        </div>

        <div className="flex-1 lg:pl-72">
          <img
            src={profileImg}
            className="max-w-xs lg:max-w-lg rounded-full bg-[#FFB641]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
