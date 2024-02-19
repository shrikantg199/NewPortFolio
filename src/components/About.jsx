const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen  text-white bg-gradient-to-b from-gray-800 to-black "
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto mb-8">
        <div className="pb-18 mt-48 lg:mt-2 ">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="mt-10 text-2xl fixed">
          My Name is <span className="text-orange-500">Shrikant Gaikwad</span>.
          I did Bachelor of Engineering degree with expertise in Full-stack
          development. I have hands-on experience{" "}
          <span className="text-orange-500">
            building responsive applications using JavaScript, React, Node.js
            and MongoDB.
          </span>
        </p>
        <br />

        <p className="text-2xl">
          I have demonstrated strong technical skills including frontend
          development with React, backend development with Node.js and Express,
          and database management with MongoDB.
        </p>
        <br />

        <p className="text-2xl pb-8">
          Key projects include a{" "}
          <span className="text-orange-500"> YouTube clone</span>, a simple
          <span className="text-orange-500"> cryptocurrency web app</span> , and{" "}
          <span className="text-orange-500"> a food ordering application</span>.
          Demonstrated strong technical skills in frontend, backend and database
          development. Looking to leverage solid engineering foundation and
          full-stack skills to join a dynamic technology team as a web
          developer.
        </p>
      </div>
    </div>
  );
};

export default About;
