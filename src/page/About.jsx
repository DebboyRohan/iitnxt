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
          src="/iitnxtlogo.png"
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
          IIT Nxt - Indian Innovators of Technology for Next Gen "Śikṣā
          sārthakaṃ jīvanam" - Education for a Meaningful Life
        </motion.p>

        <motion.p
          className="mt-4 text-lg leading-relaxed text-gray-700"
          variants={textVariants}
        >
          IIT Nxt is a visionary initiative established to empower young minds
          by fostering innovation and technological expertise. Founded by Ch.
          Seshukumari, IIT Nxt is registered as a trust under the Andhra Pradesh
          Trust Act, with the following registration details: (Trust ID No:
          4-317-21-2025,Document No / Year: 21/25,CS No / Year: 23/2025) Our
          mission is to shape the next generation of tech leaders through
          hands-on learning, real-world projects, and mentorship from industry
          experts and IITians. We aim to bridge the gap between theoretical
          knowledge and practical implementation, guiding students to become
          creators of impactful solutions for societal welfare.
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
          At IIT Nxt, we believe that every student has the potential to make a
          difference. We are committed to transforming education into a journey
          of exploration, creativity, and real-world problem-solving. Join us in
          making your ideas come to life and leave a mark on the world!
        </motion.p>
        <motion.p
          className="mt-4 text-lg leading-relaxed text-gray-700"
          variants={textVariants}
        >
          <b>Our Motto</b>: 🌟 "Dream, Innovate, and Transform - Together, Let's
          Build a Technological Future!"
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
