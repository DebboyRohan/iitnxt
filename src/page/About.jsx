"use client";
import { motion } from "framer-motion";
import { logo } from "../assets/asset.js";
const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-100 to-green-200 min-h-screen py-20 px-6 md:px-16 lg:px-24 text-gray-800">
      {/* IITNxt Logo */}
      <div className="flex justify-center">
        <motion.img
          src={logo}
          alt="IITNxt Logo"
          className="w-40 md:w-52"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* About Section */}
      <motion.div
        className="mt-8 max-w-3xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900"
          variants={textVariants}
        >
          “ Empowering the Innovators of Tomorrow “
        </motion.h2>

        <motion.p
          className="mt-4 text-lg leading-relaxed text-gray-700"
          variants={textVariants}
        >
          At IITNxt, our mission is to empower young minds by providing
          high-quality training and project opportunities that address
          real-world challenges and contribute to societal welfare. We believe
          in nurturing talent during the early stages of their educational
          journey, especially among students from local engineering colleges, by
          fostering collaboration with IITians.
        </motion.p>

        <motion.p
          className="mt-4 text-lg leading-relaxed text-gray-700"
          variants={textVariants}
        >
          Through this synergy, we aim to inspire innovation, promote
          well-being, and create a platform where knowledge and expertise come
          together to make a meaningful difference in communities. Our vision is
          to bridge the gap between academia and practical solutions, shaping a
          future where education drives impactful change.
        </motion.p>

        <motion.p
          className="mt-4 text-lg leading-relaxed text-gray-700"
          variants={textVariants}
        >
          At IITNxt, we offer workshops and projects across a variety of
          high-demand fields to help you build skills and expertise that matter
          in today’s world. Dive into the future with these exciting domains.
        </motion.p>
      </motion.div>

      {/* Background Image */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src="/background-pattern.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default About;
