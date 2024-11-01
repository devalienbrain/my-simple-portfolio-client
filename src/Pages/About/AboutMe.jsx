import { useRef } from "react";
import bannerImg from "/Resources/hassan.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Lottie from "react-lottie";
import animationData from "../../lotties/rocket.json";
import FollowMe from "./FollowMe";

const AboutMe = () => {
  const bannerImgRef = useRef();
  const title = "ABOUT ME";
  useGSAP(() => {
    gsap.to(bannerImgRef.current, {
      duration: 3,
      x: 10,
      repeat: 1,
      ease: "elastic",
    });
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex flex-col justify-center gap-10">
      <div className="flex-1 flex justify-center">
        <img
          ref={bannerImgRef}
          alt="Hassan's Photo"
          src={bannerImg}
          className="w-96 hover:scale-110 ease-in"
        />
      </div>

      <div className="flex-1 flex flex-col items-center md:items-start justify-center">
        <div className="pt-4 flex flex-col gap-y-5 text-center md:text-left md:max-w-lg">
          <span className="bg-gradient-to-r from-cyan-600 via-cyan-400 to-blue-400 bg-clip-text text-transparent text-xl font-semibold">
            A passionate Full stack web Developer
          </span>
          {/* <span className="text-4xl md:text-5xl font-extrabold">
              Md. Sabbir Hassan
            </span> */}
          <p className="text-sm font-extralight space-x-4 space-y-5">
            I'm a Full Stack Web Developer well-versed in a variety of
            technologies, including React.js for dynamic frontend experiences,
            Tailwind CSS for streamlined styling, and Node.js/Express.js for
            robust backend development. With expertise in MongoDB, I excel at
            managing data efficiently. Currently, I'm expanding my skill set by
            exploring Next.js for enhanced server-side rendering and Redux for
            state management. Always eager to dive into new and cutting-edge
            technologies, I'm committed to staying at the forefront of web
            development trends. Let's collaborate and create innovative
            solutions together!
          </p>
        </div>
        <div className="py-5">
          <FollowMe />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
