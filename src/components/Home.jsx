import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row ">
        <div className="flex flex-col justify-center h-full mr-2 mt-60">
          <h2 className="text-2xl font-medium text-white sm:text-7xl">
            I'm a Full Stack Web Developer.
          </h2>
          <p className="max-w-md py-4 text-gray-500 text-xl">
            I love to work on web application using technologies like React,
            Tailwind, ExpressJS and MongoDB.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Portfolio
              <span className="duration-300 group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <div className="mt-4">
              <div className="flex gap-8 mt-10 mb-6">
                <li className="list-none">
                  <a href="https://twitter.com/its_shri__11">
                    <FaTwitter className="text-4xl text-white hover:text-[#1DA1F2]" />
                  </a>
                </li>
                <li className="list-none">
                  <a href="https://www.linkedin.com/in/contactshrikantgaikwad/">
                    <FaLinkedin className="text-4xl text-white " />
                  </a>
                </li>
                <li className="list-none">
                  <a href="https://instagram.com/its_shri_20">
                    <LuInstagram className="text-4xl instagram text-white rounded-md" />
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="w-[70%] mx-auto blob rounded-2xl md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
