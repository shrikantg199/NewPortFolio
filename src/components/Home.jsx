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
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-20  mr-4">
          <h2 className="text-4xl sm:text-7xl font-medium text-white">
            I'm a Full Stack Developer.
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I love to work on web application using technologies like React,
            Tailwind, Next JS and GraphQL.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <div className="mt-4">
              <div className="flex gap-4 mt-10">
                <li className="list-none">
                  <a href="https://twitter.com/its_shri__11">
                    <FaTwitter className="text-3xl text-white" />
                  </a>
                </li>
                <li className="list-none">
                  <a href="https://www.linkedin.com/in/contactshrikantgaikwad/">
                    <FaLinkedin className="text-3xl text-white " />
                  </a>
                </li>
                <li className="list-none">
                  <a href="https://instagram.com/its_shri_20">
                    <LuInstagram className="text-3xl text-white" />
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
            className="blob  rounded-2xl mx-auto w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
