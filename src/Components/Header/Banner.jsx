import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Banner = () => {
  const bannerImgRef = useRef();

  useGSAP(() => {
    gsap.to(bannerImgRef.current, {
      duration: 3,
      x: 10,
      repeat: 1,
      ease: "elastic",
    });
  });

  useEffect(() => {
    const typewriterElement = document.getElementById("typewriter");

    if (typewriterElement) {
      new Typewriter(typewriterElement, {
        strings: [
          "Full-stack Web Developer",
          "MERN Developer",
          "React.js Frontend Developer",
          "Software Engineer",
        ],
        autoStart: true,
        loop: true,
        delay: 300,
      });
    }
  }, []);

  return (
    <div className="w-full flex items-center justify-start py-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-semibold">
          Hi, I'm <span className="font-bold">Sabbir Hassan</span>
        </h1>
        
        <div id="typewriter" className="text-2xl font-medium text-gray-300"></div>
        
        <p className="text-base font-light max-w-md text-gray-400 mt-2">
          I specialize in crafting, deploying, and maintaining seamless web
          infrastructures for flawless user experiences!
        </p>
      </div>
    </div>
  );
};

export default Banner;
