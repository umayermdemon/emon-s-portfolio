import bg from "../../../assets/Bg/bg1.jpg";

const AboutMe = () => {
  return (
    <div className="w-full border-none relative" id="about">
      <img
        src={bg}
        alt=""
        className="border-none h-[400px] md:h-[450px] lg:h-[500px] w-full object-cover"
      />

      <div className="flex flex-col lg:flex-row justify-between lg:max-w-7xl absolute top-10 md:top-16 lg:top-28 lg:left-80">
        <div className="flex-1 lg:transform  lg:-rotate-45 hidden lg:block">
          <h2 className="text-3xl font-semibold animate__heartBeat text-[#FFB641] text-center">
            About Me
          </h2>
        </div>
        <div className="block lg:hidden">
          <div className="flex justify-center ">
            <h1 className=" text-2xl mb-4 animate__heartBeat text-white gradient px-8 rounded-sm py-2 font-semibold">
              About Me
            </h1>
          </div>
        </div>
        <div className="flex-1 mx-8 lg:mx-0" data-aos="fade-left" data-aos-duration="2000">
          <h2 className="text-2xl text-[#FFB641]/[60] font-semibold pb-4">
            Who I am?
          </h2>
          <p className="text-justify text-white text-xs md:text-base font-poppins">
            I am MD. Emon Miah, a dedicated and enthusiastic Junior Web
            Developer based in Narsingdi Sadar, Narsingdi. With a solid
            foundation in web development technologies, I am passionate about
            building interactive, user-friendly, and responsive web
            applications. My technical skills include HTML, CSS, JavaScript,
            React, Node.js, Express.js, MongoDB, Axios, and JWT. I have
            successfully developed various projects, including e-commerce
            platforms, real-time chat applications, and personal blogs with
            authentication features. I am continuously striving to enhance my
            skills and stay updated with the latest industry trends. My goal is
            to work on innovative projects and collaborate with talented teams
            to create impactful web solutions that make a difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
