// Experiences.js
import React, { useState } from "react";
import ExperienceItem from "./experience-item";
import { experiences } from "config/info";

const Experiences = () => {
  const [currentExp, setCurrentExp] = useState(
    experiences[0].companyName || ""
  );

  const handleExperienceChange = (newExp: string) => () => {
    setCurrentExp(newExp);
  };

  return (
    <div className="py-16 mb-[2rem]  mx-auto flex justify-center items-center flex-col md:p-0 p-6">
      <h2 className="flex mb-12 mt-[3rem] font-display md:text-6xl text-4xl items-center bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400 text-transparent">
        Real world experienced
      </h2>
      {experiences.map((exp) => (
        <ExperienceItem
          key={exp.companyName}
          currentExp={currentExp}
          handleExperienceChange={handleExperienceChange}
          {...exp}
        />
      ))}
    </div>
  );
};

export default Experiences;
