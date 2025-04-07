"use client";
import { motion } from "framer-motion";
import {
  IconQuote,
  IconBulb,
  IconHeartHandshake,
  IconRocket,
} from "@tabler/icons-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const featureCards = [
    {
      icon: <IconBulb size={40} className="text-indigo-500" />,
      title: "Innovation",
      description: "Fostering creative thinking and problem-solving skills",
    },
    {
      icon: <IconHeartHandshake size={40} className="text-green-500" />,
      title: "Community",
      description: "Building a network of like-minded innovators",
    },
    {
      icon: <IconRocket size={40} className="text-orange-500" />,
      title: "Growth",
      description: "Accelerating your journey to technological mastery",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen py-20 px-6 md:px-16 lg:px-24 text-gray-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-100 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      {/* IITNxt Logo */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <img
          src="/iitnxtlogo.png"
          alt="IITNxt Logo"
          className="w-40 md:w-52 drop-shadow-lg hover:scale-105 transition-transform"
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="mt-12 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Tagline */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-flex items-center text-indigo-600 mb-4">
            <IconQuote className="rotate-180 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Empowering the Innovators of Tomorrow
            </h2>
            <IconQuote className="ml-2" />
          </div>
          <motion.p
            className="mt-4 text-xl text-indigo-500 font-medium"
            variants={itemVariants}
          >
            "Śikṣā sārthakaṃ jīvanam" - Education for a Meaningful Life
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
        >
          {featureCards.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* About Text */}
        <motion.div className="space-y-6" variants={containerVariants}>
          <motion.div
            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-200"
            variants={itemVariants}
          >
            <p className="text-lg leading-relaxed">
              IIT Nxt is a visionary initiative established to empower young
              minds by fostering innovation and technological expertise. Founded
              by Ch. Seshukumari, IIT Nxt is registered as a trust under the
              Andhra Pradesh Trust Act, with the following registration details:
              <span className="block mt-2 font-medium text-indigo-600">
                (Trust ID No: 4-317-21-2025, Document No/Year: 21/25, CS
                No/Year: 23/2025)
              </span>
            </p>
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-200"
            variants={itemVariants}
          >
            <p className="text-lg leading-relaxed">
              Our mission is to shape the next generation of tech leaders
              through hands-on learning, real-world projects, and mentorship
              from industry experts and IITians. We aim to bridge the gap
              between theoretical knowledge and practical implementation,
              guiding students to become creators of impactful solutions for
              societal welfare.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-200"
            variants={itemVariants}
          >
            <p className="text-lg leading-relaxed">
              Through this synergy, we aim to inspire innovation, promote
              well-being, and create a platform where knowledge and expertise
              come together to make a meaningful difference in communities. Our
              vision is to bridge the gap between academia and practical
              solutions, shaping a future where education drives impactful
              change.
            </p>
          </motion.div>

          <motion.div
            className="bg-indigo-50/50 border border-indigo-100 p-6 rounded-xl shadow-sm"
            variants={itemVariants}
          >
            <p className="text-lg leading-relaxed font-medium text-indigo-900">
              At IIT Nxt, we believe that every student has the potential to
              make a difference. We are committed to transforming education into
              a journey of exploration, creativity, and real-world
              problem-solving. Join us in making your ideas come to life and
              leave a mark on the world!
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-indigo-500 to-blue-600 p-6 rounded-xl shadow-lg"
            variants={itemVariants}
          >
            <p className="text-lg leading-relaxed text-white font-medium">
              <span className="block text-xl font-bold mb-2">🌟 Our Motto</span>
              "Dream, Innovate, and Transform - Together, Let's Build a
              Technological Future!"
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
