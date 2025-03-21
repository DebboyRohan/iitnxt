"use client";
import { motion } from "framer-motion";
import { hiw1, hiw2, hiw3 } from "../../assets/asset.js";
const HowItWorks = () => {
  return (
    <section className="mx-5 relative bg-gradient-to-b from-blue-300 to-green-100 py-20 px-6 md:px-16 lg:px-24 text-gray-800 rounded-lg">
      {/* <div className="text-left mb-12">
        <h2 className="text-3xl text-center md:text-4xl font-bold">
          How It Works
        </h2>
      </div> */}

      {/* Internship Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {[
          {
            title: "STIPENDED INTERNSHIP",
            description:
              "Top 5% of Participants work on high-impact projects with IITian mentors & earn stipends.",
            image: hiw1,
          },
          {
            title: "FREE INTERNSHIP",
            description:
              "Contribute to projects and gain experience without cost. No barriers – just an opportunity to grow.",
            image: hiw2,
          },
          {
            title: "SELF-SPONSORED INTERNSHIP",
            description:
              "Participate in projects with a small fee. Performance-based transitions allow upgrades to free/stipend.",
            image: hiw3,
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white shadow-lg rounded-xl p-6 w-full md:w-1/3 text-center"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">{card.title}</h3>
            <p className="mt-2 text-gray-600">{card.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Apply Now Button */}
      <motion.div
        className="mt-10 flex justify-center"
        whileHover={{ scale: 1.1 }}
      >
        <button className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition">
          Apply Now
        </button>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
