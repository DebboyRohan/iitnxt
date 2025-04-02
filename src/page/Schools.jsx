import React from "react";

const Schools = () => {
  const serviceOfferings = [
    {
      title: "PROGRAMS FOR AGE GROUP 8-11",
      points: [
        "🖌 AI-Powered Drawing & Animation – Use AI to turn your sketches into animations.",
        "📖 AI-Generated Storytelling & Comics – Create interactive stories using AI tools.",
        "🎮 Basic Game Design – Make simple games with Scratch and beginner-friendly platforms.",
        "🔢 Fun with Math & AI – Learn how AI helps solve math problems in an exciting way.",
        "🌍 Exploring Science with AI – Use AI to visualize space, weather, and other science concepts.",
        "🎵 AI & Music – Generate music beats using AI-powered tools.",
        "🛠 Creative DIY Projects – Hands-on activities with simple electronics and smart toys.",
      ],
    },
    {
      title: "PROGRAMS FOR AGE GROUP 12+",
      points: [
        "📱 No-Code App Development – Build real-world applications with AI-driven platforms.",
        "🌐 Website Development with AI & No-Code Tools – Learn web development without coding.",
        "🔧 DIY Robotics & Smart Devices – Design, build, and program robots & IoT systems.",
        "🚀 Drone Technology & Automation – Understand drone mechanics and applications.",
        "🕹 Game Development with AI – Create games with AI-generated characters & landscapes.",
        "🛠 PCB & Circuit Designing – Basics of electronics and how to create your own circuits.",
        "💻 Computer Basics & Cyber Awareness – Master essential computer skills for the future!",
        "💡 IT & Innovation Projects – Work on real-world tech projects guided by experts!",
        "🎨 Graphic Design & Digital Art – Master tools like Canva & Photoshop for creative design.",
      ],
    },
  ];

  const domainDetails = [
    {
      domain: "Fun with AI: Website, Mobile APP Building for Beginners",
      objective:
        "Teach students how to use AI tools to design professional websites with ease",
      topics: [
        "Introduction to website creation.",
        "Leveraging AI tools like Vercel and Voiceflow for quick deployment.",
        "Basics of HTML, CSS, and JavaScript for customization.",
        "Designing and hosting websites using no-code/low-code platforms.",
        "Adding interactive features using AI assistants.",
      ],
      project: "Students design and publish their personal or school website.",
      outcome:
        "Students will learn to use AI tools practically while understanding the basics of web technologies.",
    },
  ];

  const benefits = [
    {
      icon: "👐",
      title: "Hands-on Experience",
      description: "Interactive projects with real-world applications",
    },
    {
      icon: "👨‍🏫",
      title: "Expert Mentorship",
      description: "Guidance from industry professionals and academic leaders",
    },
    {
      icon: "🛠️",
      title: "Industry-Relevant Tools",
      description:
        "Exposure to leading technologies like Vercel, AI-powered design, and automation",
    },
    {
      icon: "🏆",
      title: "Hackathons & Competitions",
      description:
        "Participate in challenges that foster creativity and problem-solving",
    },
    {
      icon: "📜",
      title: "Certificates & Recognitions",
      description:
        "Earn certifications to enhance academic and career prospects",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden mb-16">
        <div className="relative z-10 max-w-4xl px-5">
          <p className="text-lg sm:text-xl text-blue-600 mb-4 uppercase tracking-wider font-semibold">
            Welcome to IITNxt
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-blue-600 to-purple-800 bg-clip-text text-transparent">
            Empowering the Innovators of Tomorrow
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1">
              Explore Programs
            </button>
            <button className="px-6 py-3 rounded-full bg-white text-blue-600 border-2 border-blue-600 font-semibold hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-blue-50/80 z-0"></div>
      </section>

      {/* Our Service Offerings */}
      <section className="my-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 relative pb-4">
          Our Service Offerings
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceOfferings.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-700 before:content-['•'] before:text-blue-500 before:font-bold"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="my-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 relative pb-4">
          Why Choose Our Programs?
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group"
            >
              <div className="flex flex-col h-full">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 flex-grow">{benefit.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-200/50">
                  <span className="inline-block w-8 h-1 bg-blue-500 rounded-full group-hover:w-12 transition-all duration-300"></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at bottom of benefits */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Innovation Journey?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join hundreds of students who are already building the future with
            our programs
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
            Enroll Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Schools;
