import React from "react";
import FoodApp from "../assets/portfolio/foodApp.png";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import QuizApp from "../assets/portfolio/QuizApp.png";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import { Link } from "react-scroll";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: FoodApp,
      demo: "https://food-app-indol-eta.vercel.app/",
      code: "https://github.com/shrikantg199/FoodApp.git",
    },
    {
      id: 2,
      src: reactParallax,
      demo: "#",
      code: "#",
    },
    {
      id: 3,
      src: navbar,
      demo: "#",
      code: "#",
    },
    {
      id: 4,
      src: QuizApp,
      demo: "https://quiz-app-red-eta.vercel.app/",
      code: "https://github.com/shrikantg199/QuizApp.git",
    },
    {
      id: 5,
      src: reactSmooth,
      demo: "",
      code: "#",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8  mt-24 lg:mt-40">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  href={id.demo}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  <a href={demo}> Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code}> code</a>
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
