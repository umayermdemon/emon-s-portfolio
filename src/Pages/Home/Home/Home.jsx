
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className="relative">
      <Banner />
      <AboutMe />
      <Skills />
      <Projects/>
    </div>
  );
};

export default Home;
