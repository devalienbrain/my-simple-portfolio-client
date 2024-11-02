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
    <div className="w-full py-10">
       <p className="text-base font-light text-gray-400">
        Hi, I'm <span className="font-bold">Sabbir Hassan</span> I specialize in crafting, deploying, and maintaining seamless web
          infrastructures for flawless user experiences!
        </p>
    </div>
  );
};

export default Banner;
