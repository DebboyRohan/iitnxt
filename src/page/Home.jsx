import React from "react";
import { HeroParallaxDemo } from "../component/object/HeroParallaxDemo";
import CardGrid from "../component/object/CardGrid";
import ExpertSupport from "../component/object/ExpertSupport";
import WorkshopsSection from "../component/object/WorkshopsSection";
import HowItWorks from "../component/object/HowItWorks";

const Home = () => {
  return (
    <div>
      <div>
        <HeroParallaxDemo />
      </div>
      <div className="flex flex-col items-center gap-10 mx-5 my-5 text-center">
        <p className="text-2xl md:text-4xl font-bold text-gray-800 md:text-left leading-tight">
          Explore <span className="text-blue-600">Cutting-Edge Domains</span> at{" "}
          <span className="text-gray-900">IITNxt</span>
        </p>
        <CardGrid />
      </div>
      <div>
        <ExpertSupport />
        <WorkshopsSection />
        <HowItWorks />
      </div>
    </div>
  );
};

export default Home;
