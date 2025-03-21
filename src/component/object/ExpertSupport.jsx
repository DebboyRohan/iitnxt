import { motion } from "framer-motion";
import { customerSupport } from "../../assets/asset";

const ExpertSupport = () => {
  return (
    <section className=" py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Side - Text */}
        <motion.div
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Expert Support
          </h2>
          <ul className="text-lg text-gray-800 space-y-3">
            <li>✅ Work on Real-World Projects that impact communities.</li>
            <li>✅ Mentorship from IITians and industry experts.</li>
            <li>✅ Collaborative Learning with top engineering peers.</li>
            <li>✅ Career Advancement through hands-on experience.</li>
            <li>✅ Social Impact by contributing to meaningful projects.</li>
          </ul>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={customerSupport}
            alt="Expert Support"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertSupport;
