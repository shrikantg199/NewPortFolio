const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen text-white bg-gradient-to-b from-gray-800 to-black "
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto mb-8">
        <div className="pb-12 mt-40 lg:mt-2 ">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="mt-10 text-2xl">
          My Name is <span className="text-orange-500">Shrikant Gaikwad</span>.
          I did Bachelor of Engineering degree with expertise in Full-stack web
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

        <p className="text-2xl">
          I am adept at crafting intuitive user interfaces and optimizing
          performance. I have spearheaded innovative projects such as a
          real-time chat room web app that increased user engagement 40% and
          reduced login times 30%. I also built a MERN job portal that
          streamlined the job search process and boosted user engagement 40%.
        </p>
      </div>
    </div>
  );
};

export default About;
