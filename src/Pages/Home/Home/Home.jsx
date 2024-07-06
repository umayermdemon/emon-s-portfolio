
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Educations from "../Educations/Educations";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className="relative">
      <Banner />
      <AboutMe />
      <Skills />
      <Projects/>
      <Educations/>
    </div>
  );
};

export default Home;
