import React from "react";
import {
  threed,
  ai,
  business,
  computerTech,
  cybersecurity,
  graphicDesign,
  iot,
  programming,
  vlsi,
} from "../../assets/asset.js";

const cardData = [
  {
    title: "Artificial Intelligence & Machine Learning (AI & ML)",
    description:
      "Learn how machines think! Our workshops introduce you to core concepts of AI and ML, including data processing, deep learning, and problem-solving.",
    image: ai,
  },
  {
    title:
      "VLSI (Digital & Analog) with Verilog Designing and FPGA Implementation",
    description:
      "Master the foundation of electronics with our VLSI and digital circuit design workshops. Learn FPGA-based design and hardware innovation.",
    image: vlsi,
  },
  {
    title: "Cybersecurity with Real-Time Case Studies",
    description:
      "Protect the digital world! Explore real-time cybersecurity challenges, learn hacking prevention, and safeguard networks.",
    image: cybersecurity,
  },
  {
    title: "Programming Basics",
    description:
      "Lay a strong foundation in coding! Learn languages like Python & C and master essential programming concepts.",
    image: programming,
  },
  {
    title: "Computer Technology",
    description:
      "Understand digital circuits, programming, and implement designs on FPGA boards for innovation.",
    image: computerTech,
  },
  {
    title: "IoT and Embedded Systems with Real-Time Projects",
    description:
      "Build the Internet of Things! Work on real-time projects and master microcontrollers and sensor systems.",
    image: iot,
  },
  {
    title: "Graphic Designing",
    description:
      "Unleash your creativity! Learn Photoshop and design tools to create stunning visual content.",
    image: graphicDesign,
  },
  {
    title: "Business Development & Stock Marketing",
    description:
      "Understand market trends, finance, and stock trading for a future in business and investment.",
    image: business,
  },
  {
    title: "3D Modelling & Game Development",
    description:
      "Step into 3D! Learn Unity, Blender, and game development essentials for a creative future.",
    image: threed,
  },
];

function CardGrid() {
  return (
    <div className="w-full py-5  px-5 md:px-15 rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-24 mb-4 rounded-full"
            />
            <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
