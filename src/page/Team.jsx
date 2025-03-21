import { motion } from "framer-motion";
import "@fontsource/poppins";
import { rohan, simha, defaultpic } from "../assets/asset.js";

const teamMembers = [
  {
    name: "Rohan",
    role: "Cheif Technical Officer",
    image: rohan,
    words: "Passionate about innovation and teamwork.",
  },
  {
    name: "M Simhachal",
    role: "Manager",
    image: simha,
    words: "Building the future, one step at a time.",
  },
  {
    name: "Mehak Pawar",
    role: "HR & Operations Manager",
    image: defaultpic,
    words: "Believer in creativity and excellence.",
  },
];
export default function Team() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center text-center justify-center p-10 font-poppins">
      <h1 className="text-gray-900 text-center text-5xl font-bold mb-12 tracking-wide">
        Meet Our Team
      </h1>
      <div className="flex flex-wrap justify-center gap-16">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 rounded-full border-4 border-gray-300 shadow-lg"
              whileHover={{ scale: 1.1 }}
            />
            <h2 className="text-2xl font-semibold tracking-wide mt-4 text-gray-900">
              {member.name}
            </h2>
            <p className="text-sm font-medium tracking-wide  text-gray-900">
              {member.role}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
