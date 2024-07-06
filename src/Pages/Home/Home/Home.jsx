
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
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
      <Contact/>
    </div>
  );
};

export default Home;
