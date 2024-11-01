import Marquee from "react-fast-marquee";
import react from "/Resources/SkillsIcon/1React-Dark.svg";
import tailwind from "/Resources/SkillsIcon/2TailwindCSS-Dark.svg";
import js from "/Resources/SkillsIcon/3JavaScript.svg";
import express from "/Resources/SkillsIcon/4ExpressJS-Dark.svg";
import mongodb from "/Resources/SkillsIcon/5MongoDB.svg";
import figma from "/Resources/SkillsIcon/6Figma-Dark.svg";
import vscode from "/Resources/SkillsIcon/8VSCode-Dark.svg";

function LogosSection() {
  return (
    <Marquee speed={15}>
      <section className="container mx-auto">
        <div className="flex justify-around align-middle items-center gap-24">
          {/* <span>Languages and tools</span> */}
          {/* <div className="w-36 p-5 rounded-2xl bg-white/10"> */}
            <Logo logoSrc={react} alt={react} />
          {/* </div> */}

          <Logo logoSrc={tailwind} alt={tailwind} />
          <Logo logoSrc={js} alt={js} />
          <Logo logoSrc={express} alt={express} />
          <Logo logoSrc={mongodb} alt={mongodb} />
          <Logo logoSrc={figma} alt={figma} />
          <Logo logoSrc={vscode} alt={vscode} />
        </div>
      </section>
    </Marquee>
  );
}

function Logo({ logoSrc, alt }) {
  return (
    <div className="logo">
      <img className="h-7" src={logoSrc} alt={alt} />
    </div>
  );
}

export default LogosSection;
