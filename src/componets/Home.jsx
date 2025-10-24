import React from "react";
import pic from "../../public/photo.avif"
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { ReactTyped} from "react-typed";

function Home() {
  return (
    <>
      <div  name="Home"
      className="max-w-screen-2xl  container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24  space-y-2 order-2  md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
               <ReactTyped
               className="text-red-700 font-bold"
                     strings={["Developer","Programmer","Coder"]}
                      typeSpeed={40}
                      backSpeed={50}
                      loop={true}
                />
            </div>
            <br />
            <p className="md:text-md text-sm text-justify">
              Hello developers! I am a web developer looking for creative minds
              to join me.let's work together, share ideas, and build an amazing
              website. Your skills and teamwork can make this project
              successful. let's start creating something awesome
            </p>
            <br />
            {/*social media icon*/}
            <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center">
            <div className="space-y-2">
              <h1 className="font-bold text-center">Available on</h1>
              <ul className="flex space-x-5">
                <li>
                   <a href="https://www.facebook.com/" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                </li>
                <li>
                   <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                </li>
                <li>
                 <a href="https://t.me/" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                </li>
              </ul>
            </div>
                <div className="space-y-2">
                      <h1 className="font-bold">Currently Working</h1>
                        <div className="flex space-x-5">
                              <FaHtml5 className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"/>
                              <FaCss3 className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"/>
                              <SiJavascript className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"/>
                              <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"/>
                        </div>
                </div>
          </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 order-1 mt-8">
               <img src={pic}
                  className="rounded-full md:w-[450px] md:h-[450px]"
               />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
