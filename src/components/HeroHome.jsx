import React from "react";
import backgroundImage from "../assets/background.webp";

const HeroSection = () => {
  return (
    <div className="relative h-96 w-full">
      {/* Background image with reduced opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.7, // Reduced opacity
        }}
      ></div>

      {/* Content overlay */}
      <div className="relative z-10 flex h-full w-full items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            #MindfulWorking
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;