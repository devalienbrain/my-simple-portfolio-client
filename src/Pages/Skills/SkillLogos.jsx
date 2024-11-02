import typexcript from "../../../public/Resources/1typescript.png";
import redux from "../../../public/Resources/2redux.png";
import nextjs from "../../../public/Resources/3nextjs.png";
import mongodb from "../../../public/Resources/4MOngoDB.png";
import express from "../../../public/Resources/5Express.png";
import react from "../../../public/Resources/6react.png";
import nodejs from "../../../public/Resources/7nodejs.png";

function SkillLogos() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col gap-7">
        <div className="flex justify-around align-middle items-center gap-2 md:gap-5 lg:gap-16">
          <Logo logoSrc={typexcript} alt={typexcript} /> TypeScript
          <Logo logoSrc={redux} alt={redux} /> Redux
          <Logo logoSrc={nextjs} alt={nextjs} /> NextJS
          <Logo logoSrc={mongodb} alt={mongodb} /> MongoDB
          <Logo
            logoSrc={express}
            alt={express}
            className="text-white bg-white"
          />{" "}
          Express
          <Logo logoSrc={react} alt={react} /> React
          <Logo logoSrc={nodejs} alt={nodejs} />
          NodeJS
        </div>
      </div>
    </section>
  );
}

function Logo({ logoSrc, alt }) {
  return (
    <div className="logo">
      <img className="h-7" src={logoSrc} alt={alt} />
    </div>
  );
}

export default SkillLogos;
