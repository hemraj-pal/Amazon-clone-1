import React from "react";
import html from "../../public/htmllogo1.png";
import css from "../../public/css.jpg";
import JavaScript from "../../public/javascriptlogo.png";
import reactjs from "../../public/reactjs.png";
import tailwind from "../../public/tailwind.png";
import Bootstrap from "../../public/bootstarp.svg";
function Experience() {
  const carditems = [
    {
      id: 1,
      logo: html,
      name: "html",
    },
    {
      id: 2,
      logo: css,
      name: "css",
    },
    {
      id: 3,
      logo: JavaScript,
      name: "javascript",
    },
    {
      id: 4,
      logo: reactjs,
      name: "react",
    },
    {
      id: 5,
      logo: tailwind,
      name: "tailwind",
    },
    {
      id: 6,
      logo: Bootstrap,
      name: "Bootstrap",
    },
  ];
  return (
    <>
      <div   name="Experience"
      className="max-w-screen-2xl  container mx-auto px-4 md:px-20 my-16">
        <div>
          <h1 className="text-3xl font-bold mb-3">Portfolio</h1>
          <span className="underline font-semibold">
            Worked 6 months as a Frontend Developer Intern using HTML, CSS, JavaScript, React, Tailwind, and Bootstrap.
          </span>
          <br />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-7 my-3 mt-2">
            {carditems.map(({ id, logo, name }) => {
              return (
                <div
                  key={id}
                  className="flex flex-col items-center gap-2 justify-center shadow-md border-2px rounded-full md:h-[200px] md:w-[200px] p-1 cursor-pointer hover:scale-75 duration-300 overflow-hidden hover:text-[20px] hover:font-bold "
                >
                  <img
                    src={logo}
                    className="w-[120px]  rounded-full "
                  />
                  <div>
                    <div className="">{name}</div>
                    
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
