import { motion } from "framer-motion";
import { temp } from "../../assets/asset.js";
const WorkshopsSection = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Side - Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={temp}
            alt="Workshops and Internships"
            className="w-full max-w-lg rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Join Our Skill-Building Workshops & Internships
          </h2>
          <h3 className="text-xl font-semibold text-green-700 mt-3">
            Transforming communities through innovation
          </h3>
          <p className="text-lg text-gray-800 mt-4">
            We offer an exclusive opportunity to engage in workshops that are
            designed to enhance your skills, broaden your knowledge, and
            contribute to societal welfare.
          </p>
          <p className="text-lg text-gray-800 mt-2">
            Participants will gain practical insights while working on impactful
            projects, all while connecting with industry experts and IIT
            mentors.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
