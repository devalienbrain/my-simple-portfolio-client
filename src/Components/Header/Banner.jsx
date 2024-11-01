import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";
import Resume from "../../Pages/Resume/Resume";
import bannerImg from "/Resources/hassan.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import LottieAstronot from "../Animations/LottieAstronot";
// import "./glow.css";
import bi from "../../../public/Resources/BannerImg/bi.jpg";
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
    // Use useEffect to initialize Typewriter after component mount
    const typewriterElement = document.getElementById("typewriter");

    if (typewriterElement) {
      new Typewriter(typewriterElement, {
        strings: [
          "Full-stack web developer",
          "MERN Developer",
          "React.js Frontend developer",
          "Software Engineer",
        ],
        autoStart: true,
        loop: true,
        delay: 300,
      });
    }
  }, []);

  return (
    <div
      id="banner"
      className="pt-10"
      // style={{
      //   backgroundImage: "url(https://i.ibb.co/tZH5vjN/Untitled2.png)",
      //   objectFit: "cover",
      //   width: "100%",
      //   height: "100%",
      // }}
    >
      {/* <div className="hero-overlay bg-transparent bg-opacity-10">
        <img src={bi} alt="BI" className="w-full h-full" />
      </div> */}
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex-1 flex flex-col items-center justify-start">
          <div className="flex flex-col gap-y-3 text-left">
            <span className="bg-gradient-to-r from-cyan-600 via-cyan-400 to-blue-400 bg-clip-text text-transparent text-5xl font-semibold py-3">
              Hi. I'm
            </span>
            <span className="text-6xl font-extrabold">Sabbir Hassan</span>
            <div className="btext-4xl font-black"></div>
            <p className="text-sm font-light text-white/80 max-w-lg">
              I specialize in crafting, deploying, and maintaining seamless web
              infrastructures for flawless user experiences!
            </p>
            {/* <span className="w-1/3 py-2 rounded-2xl mx-auto md:mx-0 hover:bg-cyan-500">
              <Resume />
            </span> */}
            <span className="flex justify-start hover:bg-cyan-500">
              <Resume />
            </span>
          </div>
        </div>
        <div className="flex-1 flex justify-end items-center">
          <img
            // ref={bannerImgRef}
            alt="Hassan's Photo"
            src={bannerImg}
            className="w-96"
          />
          {/* <LottieAstronot /> */}
        </div>{" "}
      </div>
    </div>
  );
};

export default Banner;
