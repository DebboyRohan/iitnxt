"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { defaultpic } from "../assets/asset";

const HeroSection = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const roles = ["Developers", "Researchers", "Innovators", "Leaders"];

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    const i = loopNum % roles.length;
    const fullText = roles[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(100);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  };

  useEffect(() => {
    animate(count, 100, { duration: 3, ease: "easeOut" });
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-r from-blue-50 to-cyan-50 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="grid grid-cols-5 gap-8 opacity-30">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.3 }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2,
              }}
              className="h-8 w-8 rounded-full bg-blue-200"
            />
          ))}
        </div>
      </motion.div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main heading with typewriter effect */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
        >
          Meet Our <span className="text-blue-600">{text}</span>
          <span className="ml-1 inline-block w-1 h-12 bg-blue-600 animate-pulse"></span>
        </motion.h1>

        {/* Subheading with progress counter */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8"
        >
          <motion.span className="font-medium text-blue-600">
            {rounded}
          </motion.span>
          + professionals driving innovation
        </motion.p>

        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-flex flex-col items-center text-blue-600 cursor-pointer"
            onClick={() => {
              document
                .getElementById("team-grid")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="text-sm mb-2">Meet the team</span>
            <FaArrowDown className="text-xl" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating card previews */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.8 + i * 0.1,
              duration: 0.6,
              type: "spring",
              damping: 10,
            }}
            className="absolute bg-white shadow-md rounded-lg w-24 h-32 border border-gray-100"
            style={{
              left: `${10 + i * 15}%`,
              rotate: i % 2 === 0 ? -5 : 5,
            }}
          >
            <div className="w-12 h-12 rounded-full bg-gray-200 mx-auto mt-4"></div>
            <div className="mt-2 px-2 text-center">
              <div className="h-3 bg-gray-200 rounded-full w-3/4 mx-auto mb-1"></div>
              <div className="h-2 bg-gray-100 rounded-full w-1/2 mx-auto"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const TeamCard = ({ member }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-all w-full max-w-xs mx-auto"
    >
      <div className="p-6 text-center">
        {/* Profile Image Placeholder - Replace with your image */}
        <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <span className="text-2xl font-medium">
                {member.name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Name */}
        <h3 className="text-xl font-medium text-gray-800 mb-1">
          {member.name}
        </h3>

        {/* Role */}
        <p className="text-gray-600 mb-3">{member.role}</p>

        {/* Institute */}
        <div className="flex items-center justify-center text-gray-500 text-sm mb-4">
          <span className="mr-1">in</span>
          <span>{member.institute || "Institute"}</span>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-3">
          <motion.a
            href={member.email !== "#" ? `mailto:${member.email}` : "#"}
            className={`p-2 rounded-full ${
              member.email !== "#"
                ? "text-gray-600 hover:bg-gray-100"
                : "text-gray-300 cursor-not-allowed"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope size={16} />
          </motion.a>
          <motion.a
            href={member.linkedin !== "#" ? member.linkedin : "#"}
            className={`p-2 rounded-full ${
              member.linkedin !== "#"
                ? "text-gray-600 hover:bg-gray-100"
                : "text-gray-300 cursor-not-allowed"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin size={16} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

// Usage in your TeamPage component:
const Team = () => {
  const teamMembers = [
    {
      name: "Rohan",
      role: "Chief Technical Officer",
      institute: "IIT Kharagpur",
      email: "rohankumarpandey234@gmail.com",
      linkedin: "www.linkedin.com/in/rohan2311",
      image: "/images/team/rohan.png", // or null for placeholder
    },
    {
      name: "Pavan Tummala ",
      role: "Academic Associate - Technology",
      image: defaultpic,
      institute: "IIT Kharagpur",
      email: "rohan@example.com",
      linkedin: "#",
    },
    {
      name: "M Simhachal",
      role: "Manager",
      image: "/images/team/simha.png",
      institute: "IIT Kharagpur",
      email: "mudavathsimhachalnaik@gmail.com",
      linkedin: "#",
    },
    {
      name: "Shriya Berelli ",
      role: "HR & operations",
      image: "/images/team/shriya.png",
      institute: "IIT Kharagpur",
      email: "rohan@example.com",
      linkedin: "#",
    },
    {
      name: "Pandu Jarapla ",
      role: "Digital Outreach Associate & student ambassador ",
      image: defaultpic,
      institute: "IIT Kharagpur",
      email: "pandunaik17835@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/pandu-naik-4256a4274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Sanjay Jaiswal ",
      role: " Senior Consultant - Strategy",
      image: defaultpic,
      institute: "IIT kanpur",
      email: "rohan@example.com",
      linkedin: "#",
    },
    {
      name: "Madimisseti Srinivas ",
      role: "Acadmic Advisor(Faculty @ E&ECE - NIT AP )",
      image: defaultpic,
      institute: "National Institute of Technology ,AP",
      email: "msrinivas@iitkgp.ac.in",
      linkedin: "#",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <div id="team-grid" className="py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
