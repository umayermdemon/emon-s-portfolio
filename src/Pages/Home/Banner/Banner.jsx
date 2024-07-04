/* eslint-disable react/no-unescaped-entities */

import profileImg from "../../../assets/file.png";

const Banner = () => {
  return (
    <div className="mt-12 max-w-7xl mx-auto">
      <div className="flex items-center flex-col lg:justify-between lg:flex-row">
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl text-white font-bold font-poppins">
            Hi, I'm{" "}
          </h1>
          <h1 className="text-6xl text-white font-bold font-poppins">
            Md. Emon Miah{" "}
          </h1>
          <h2 className="text-[#FFB641] font-poppins">Junior Web Developer</h2>
          <p className="font-poppins text-white pb-4">
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

        <div className="flex-1 pl-72">
          <img
            src={profileImg}
            className="max-w-lg rounded-full bg-[#FFB641]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
