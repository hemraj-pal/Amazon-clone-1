import React from "react";
import html from "../../public/htmllogo1.png";
import css from "../../public/css.jpg";
import JavaScript from "../../public/javascriptlogo.png";
import reactjs from "../../public/reactjs.png";
import tailwind from "../../public/tailwind.png";
import Bootstrap from "../../public/bootstarp.svg";
function Portfoliyo() {
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
      <div   name="Portfolio"
      className="max-w-screen-2xl  container mx-auto px-4 md:px-20 mt-10">
        <div>
          <h1 className="text-3xl font-bold mb-3">Portfolio</h1>
          <span className="underline font-semibold">featured project</span>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
            {carditems.map(({ id, logo, name }) => {
              return (
                <div
                  key={id}
                  className="md:h-[300px] md:w-[300px] border-2px rounded-lg shadow-lg p-1 cursor-pointer hover:scale-75 duration-300 overflow-hidden hover:text-[20px] hover:font-bold "
                >
                  <img
                    src={logo}
                    className="h-[120px] w-[120px] p-1 rounded-full border-[2px]"
                  />
                  <div>
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 px-2 cl classname">
                      {name === "html" &&
                        "HTML is used to structure content on webpages."}
                      {name === "css" &&
                        "CSS styles and beautifies HTML content."}
                      {name === "javascript" &&
                        "JavaScript adds interactivity to websites."}
                      {name === "react" &&
                        "React helps build dynamic user interfaces."}
                      {name === "tailwind" &&
                        "Tailwind CSS provides utility-first styling."}
                      {name === "Bootstrap" &&
                        "Bootstrap is a responsive CSS framework."}
                    </p>
                  </div>
                  <div className="space-x-3 mt-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">video</button>
                    <button  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">source code</button>
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

export default Portfoliyo;
