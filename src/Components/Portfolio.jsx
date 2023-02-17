import React from "react";
import boAt from "../assets/femella.PNG"
import starwar from "../assets/discovery.PNG"
import cric from "../assets/head.PNG"
import product from "../assets/nykaa.PNG"

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: boAt,
      title: "Femella-Clone",
      tech:"HTML | CSS | JavaScript } React ",
      desc:"This is a clone of an e-commerce website named Femella. Users can buy women clothes on this website. Pages we made:Home page, Login/Signup page, Product Page, Footer Page, Cart page, Payment Page.",
      link: "https://femellaa.netlify.app/",
      repo: "https://github.com/Dheeraj-Bhandari/Femella-Clone.git",
    },
    {
      id: 2,
      src: cric,
      title: "Headphonezone.in-Clone",
      tech:"HTML | CSS | JavaScript | React",
      desc:"This is a clone of electronic gadget website named Headphonezone.in where user can buy electronic gadget .Pages we made : Home Page, Footer, Product Page. ",
      link: "https://unique-sprite-5a80fe.netlify.app/",
      repo: "https://github.com/deepaksahu3698/headphonezone.in.git",
    },
    {
      id: 3,
      src: product,
      title: "Nykaa-Clone",
      tech:"HTML | CSS | JavaScript | React",
      desc:"This is a clone of an e-commerce website named Nykaa. Users can buy women beauty product on this website. Pages we made:Home page, Login/Signup page, Product Page, Footer Page, Cart page, Payment Page",
      link: "https://gifted-euler-2666f3.netlify.app/index.html",
      repo: "https://github.com/yashasvij-19/Construct-Week-Unit-4.git",
    },
    {
      id: 4,
      src: starwar,
      title: "Discoveryplus-Clone",
      tech:"HTML | CSS | JavaScript",
      desc:"This is a clone of an e-commerce website named Discoveryplus.in. Users can see live  video of animals & people. Pages we made:Home page, Login/Signup page, Product Page, Footer Page, Cart page, Payment Page",
      link: "https://discovery-plus.vercel.app/",
      repo: "https://github.com/PrabhatAcharya/Discovery-Plus_Clone.git",
    },
   
   
  ];

  return (
    <div
      name="projects"
      className="md:bg-stone-900	mb-20 w-full text-white max:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-20">
          <p className="text-orange-600	 text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6 text-lg	font-medium	text-neutral-400">I have Built some Projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-10 px-12 sm:px-0">
          {projects.map(({ id, src, link, repo,title ,tech,desc}) => (
            <div key={id} className="shadow-md shadow-orange-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md h-72 w-full duration-200 hover:scale-105"
              />
              <div className="text-center	pt-4 text-orange-500 font-bold	font-mono text-2xl	" >{title}</div>
             <div className="text-center pt-4 text-slate-300	font-medium	text-xl	"> <p>{desc}</p></div>
              <p className="text-center pt-4 text-slate-300	font-medium	text-xl	">Tech Stack: {tech}</p>
              <div className="flex items-center justify-center">
                <button
                  className="w-1/4 px-6 py-3 m-4  px-6 py-3 my-8 mx-auto flex justify-center items-center rounded-md bg-gradient-to-b from-orange-600 to-orange-700 hover:bg-white duration-300 bg-orange-700 hover:scale-105"
                  onClick={() => window.open(link, "_blank")}
                >
                  Demo
                </button>
                <button
                  className="w-1/4 px-6 py-3 m-4 bg-gradient-to-b from-orange-600 to-orange-700 px-6 py-3 my-8 mx-auto flex justify-center items-center rounded-md hover:scale-110 duration-300 bg-orange-700 hover:scale-105"
                  onClick={() => window.open(repo, "_blank")}
                >
                  GitHub
                </button>
              


              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
