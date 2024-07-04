import bg from "../../../assets/Bg/bg1.jpg";

const AboutMe = () => {
  return (
    <div className="w-full border-none relative" id="about">
      <img
        src={bg}
        alt=""
        className="border-none h-[500px] w-full object-cover"
      />

      <div className="flex flex-row justify-between max-w-7xl absolute top-28 left-80">
        <div className="flex-1 transform -rotate-45">
          <h2 className="text-3xl font-semibold text-[#FFB641] text-center">
            About Me
          </h2>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl text-[#FFB641]/[60] font-semibold pb-4">
            Who I am?
          </h2>
          <p className="text-justify text-white font-poppins">
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
