import Marquee from "react-fast-marquee";
import html from "../../../assets/Skills Logo/html.png";
import css from "../../../assets/Skills Logo/css.png";
import JavaScript from "../../../assets/Skills Logo/JavaScript.png";
import react from "../../../assets/Skills Logo/react.png";
import tailwind from "../../../assets/Skills Logo/tailwind.png";
import Bootstrap from "../../../assets/Skills Logo/Bootstrap.png";
import vite from "../../../assets/Skills Logo/vite.png";
import git from "../../../assets/Skills Logo/git.png";
import firebase from "../../../assets/Skills Logo/firebase.png";
import axios from "../../../assets/Skills Logo/axios.png";
import node from "../../../assets/Skills Logo/node.png";
import mongodb from "../../../assets/Skills Logo/mongodb.png";

const Skills = () => {
  return (
    <div className="my-12">
      <div className="flex justify-center ">
        <h1 className=" text-2xl lg:text-3xl text-white gradient px-8 rounded-sm py-2 font-semibold">
          Skills
        </h1>
      </div>
      <div className="pt-8 lg:max-w-7xl mx-2 lg:mx-auto">
        <Marquee>
          <div className="px-10 py-4 bg-[#1a1443] rounded-xl ml-4 flex flex-col items-center gap-4">
            <img src={html} className="w-16" />
            <h2 className="text-white font-semibold text-lg uppercase">Html</h2>
          </div>
          <div className="px-10 py-4 bg-[#1a1443] rounded-xl flex mx-4 flex-col items-center gap-4">
            <img src={css} className="w-16" />
            <h2 className="text-white font-semibold text-lg uppercase">Css</h2>
          </div>
          <div className="px-10 py-4 bg-[#1a1443] rounded-xl flex flex-col items-center gap-4">
            <img src={JavaScript} className="w-16" />
            <h2 className="text-white font-semibold text-lg">Javascript</h2>
          </div>
          <div className="px-10 py-4 bg-[#1a1443] rounded-xl flex mx-4 flex-col items-center gap-4">
            <img src={react} className="w-16" />
            <h2 className="text-white font-semibold text-lg">React</h2>
          </div>
          <div className="px-10 py-4 bg-[#1a1443] rounded-xl flex flex-col items-center gap-4">
            <img src={tailwind} className="w-16" />
            <h2 className="text-white font-semibold text-lg">Tailwind</h2>
          </div>
          <div className="px-10 py-4 bg-[#1a1443] rounded-xl flex mx-4 flex-col items-center gap-4">
            <img src={Bootstrap} className="w-16" />
            <h2 className="text-white font-semibold text-lg">Bootstrap</h2>
          </div>
          <div className="px-10 py-4 bg-[#1a1443] rounded-xl flex flex-col items-center gap-4">
            <img src={vite} className="w-16" />
            <h2 className="text-white font-semibold text-lg">Vite.js</h2>
          </div>
          <div className="px-10 py-4 bg-[#1a1443] rounded-xl flex mx-4 flex-col items-center gap-4">
            <img src={git} className="w-16" />
            <h2 className="text-white font-semibold text-lg">GIT</h2>
          </div>
          <div className="px-10 py-4 bg-[#1a1443] rounded-xl flex flex-col items-center gap-4">
            <img src={firebase} className="w-16" />
            <h2 className="text-white font-semibold text-lg">Firebase</h2>
          </div>
          <div className="px-10 py-4 bg-[#1a1443] rounded-xl flex mx-4 flex-col items-center gap-4">
            <img src={axios} className="w-16" />
            <h2 className="text-white font-semibold text-lg">Axios</h2>
          </div>
          <div className="px-10 py-4 bg-[#1a1443] rounded-xl flex flex-col items-center gap-4">
            <img src={node} className="w-16" />
            <h2 className="text-white font-semibold text-lg">Node.Js</h2>
          </div>
          <div className="px-10 py-4 bg-[#1a1443] rounded-xl flex mx-4 flex-col items-center gap-4">
            <img src={mongodb} className="w-16" />
            <h2 className="text-white font-semibold text-lg">MongoDB</h2>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
