import React, { useState } from "react";
import pic from "../../public/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menue, setmenue] = useState(false);
  const navitems = [
    {
      Id: 1,
      name: "Home",
    },
    {
      Id: 2,
      name: "About",
    },
    {
      Id: 3,
      name: "Portfolio",
    },
    {
      Id: 4,
      name: "Experience",
    },
    {
      Id: 5,
      name: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl  container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" />
            <h1 className="font-semibold text-xl cursor-pointer">
              
              Hemra<span className="text-green-500 text-2xl">j</span>
              <p className="text-sm">Web developer</p>
            </h1>
          </div>
          {/*desktop navbar*/}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navitems.map(({ Id, name }) => (
                <li
                  key={Id}
                   className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                >
               <Link
                    to={name}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setmenue(!menue)} className="md:hidden">
              {menue ?  <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div> 
        </div>
        {/* mobile navbar */}
        {menue && (
          <div className="bg-white">
            <ul  className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navitems.map(({ Id, name }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer font-semibold"
                  key={Id}
                >
                  <Link
                  onClick={() => setmenue(!menue)}
                    to={name}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
