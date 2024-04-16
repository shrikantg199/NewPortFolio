import { motion, useScroll, useTransform } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const About = () => {
  const { scrollY } = useScroll();

  const textAnimation = useTransform(
    scrollY,
    [0, window.innerHeight / 2],
    [0, 1]
  );

  return (
    <div
      name="about"
      className="w-full h-screen text-white bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto mb-8">
        <div className="pb-18 mt-48 lg:mt-2 ">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            About
          </p>
        </div>
        <motion.p
          className="mt-10 text-2xl"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.8 }}
          style={{ opacity: textAnimation }}
        >
          My Name is <span className="text-orange-500">Shrikant Gaikwad</span>.
          I did Bachelor of Engineering degree with expertise in Full-stack
          development. I have hands-on experience{" "}
          <span className="text-orange-500">
            building responsive applications using JavaScript, React, Node.js
            and MongoDB.
          </span>
        </motion.p>
        <br />
        <motion.p
          className="text-2xl"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1 }}
          style={{ opacity: textAnimation }}
        >
          I have demonstrated strong technical skills including frontend
          development with React, backend development with Node.js and Express,
          and database management with MongoDB.
        </motion.p>
        <br />
        <motion.p
          className="text-2xl pb-8"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1.2 }}
          style={{ opacity: textAnimation }}
        >
          Key projects include a <span className="text-orange-500">
            YouTube clone
          </span>
          , a simple <span className="text-orange-500">cryptocurrency web app</span>, and{" "}
          <span className="text-orange-500">a food ordering application</span>.
          Demonstrated strong technical skills in frontend, backend and database
          development.
        </motion.p>
        <motion.p
          className="text-2xl"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1.4 }}
          style={{ opacity: textAnimation }}
        >
          Looking to leverage solid engineering foundation and full-stack skills
          to join a dynamic technology team as a web developer.
        </motion.p>
        <br />
      </div>
    </div>
  );
};

export default About;