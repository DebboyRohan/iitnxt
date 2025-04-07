import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const programCards = [
  {
    title: "Mental Health & Emotional Wellbeing",
    description:
      "Our mental health sessions are thoughtfully designed to support students in managing stress, anxiety, and the pressures of academic life. Led by the esteemed Dr. M. Vijaya Gopal, these sessions provide expert guidance on cultivating a positive mindset.",
    images: [
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format",
      "https://images.unsplash.com/photo-1593814681464-eef5af2b0628?w=500&auto=format",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&auto=format",
    ],
    color: "indigo",
    buttonText: "Explore Sessions",
  },
  {
    title: "Physical Health & Fitness",
    description:
      "Our physical health programs emphasize regular exercise, balanced nutrition, and active lifestyles. These sessions include guided fitness routines, yoga classes, and nutritional workshops aimed at improving concentration and reducing stress.",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&auto=format",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=500&auto=format",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=500&auto=format",
    ],
    color: "emerald",
    buttonText: "View Programs",
  },
  {
    title: "Self-Defense for Women",
    description:
      "Empowering young women to feel safe and confident is a key priority. Our self-defense workshops are tailored specifically for female students and designed to impart practical skills and techniques for personal safety.",
    images: [
      "https://plus.unsplash.com/premium_photo-1712438460750-b4c9f3ad0659?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW4lMjBzZWxmJTIwZGVmZW5jZXxlbnwwfDB8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1671856129092-ef4f4c412186?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW4lMjBzZWxmJTIwZGVmZW5jZXxlbnwwfDB8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&auto=format",
    ],
    color: "rose",
    buttonText: "Learn Techniques",
  },
  {
    title: "Art & Creative Expression",
    description:
      "Our art workshops provide students with the opportunity to explore various forms of creative expression, including painting, digital art, and mixed media. These sessions encourage students to express themselves and reduce stress.",
    images: [
      "https://plus.unsplash.com/premium_photo-1663050956267-fa2f5f905862?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0JTIwY2xhc3Nlc3xlbnwwfDB8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1678559612446-2bb33661007c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFydCUyMGNsYXNzZXN8ZW58MHwwfDB8fHww",
      "https://media.istockphoto.com/id/1884498371/photo/senior-woman-making-a-craft-product-on-a-ceramics-workshop.webp?a=1&b=1&s=612x612&w=0&k=20&c=3jttYPSKy2yq47uJVIvoSIaFYhT-_ap2DmviuakC09U=",
    ],
    color: "amber",
    buttonText: "Join Workshops",
  },
];

const MentalHealth = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6 flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-100 opacity-30 rounded-full filter blur-3xl -z-10"></div>
        <div className="text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6"
          >
            Wellness Programs at <span className="text-blue-600">IITNXT</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto"
          >
            Holistic development through mental health support, physical
            fitness, self-defense training, and creative expression
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 max-w-6xl mx-auto mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white rounded-xl shadow-md p-8 text-center"
        >
          <p className="text-gray-700 leading-relaxed">
            At IITNXT, we believe that true innovation begins with a healthy
            mind, body, and spirit. Our comprehensive Student Wellness Programs
            are designed to empower students by addressing all aspects of
            well-being, building resilience and confidence in today's
            competitive world.
          </p>
        </motion.div>
      </section>

      {/* Program Cards */}
      <section className="px-6 max-w-7xl mx-auto pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid md:grid-cols-2 gap-8"
        >
          {programCards.map((program, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className={`bg-${program.color}-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={program.images[0]}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3
                  className={`text-2xl font-bold text-${program.color}-800 mb-4`}
                >
                  {program.title}
                </h3>
                <p className="text-gray-700 mb-6">{program.description}</p>
                <div className="flex space-x-4 mb-4">
                  {program.images.slice(1).map((img, i) => (
                    <div
                      key={i}
                      className="w-20 h-20 rounded-lg overflow-hidden shadow"
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <button
                  className={`px-6 py-2 bg-${program.color}-100 text-${program.color}-700 rounded-full font-medium hover:bg-${program.color}-200 transition-all`}
                >
                  {program.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl font-bold text-indigo-900 mb-12"
          >
            What Our Students Say
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The mental health sessions helped me manage my anxiety during exams.",
                author: "Priya",
              },
              {
                quote:
                  "I've never felt stronger or more confident after the self-defense workshops.",
                author: "Ananya",
              },
              {
                quote:
                  "The art workshops became my perfect stress reliever every week.",
                author: "Rahul",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.2 }}
                className="bg-blue-50/50 p-6 rounded-xl"
              >
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="text-blue-600 font-medium">
                  {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Begin Your Wellness Journey?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Join our community of students committed to holistic development and
            personal growth.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <button className="px-8 py-3 bg-white text-indigo-900 rounded-full font-medium hover:bg-gray-100 transition-all shadow-lg text-lg">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MentalHealth;
