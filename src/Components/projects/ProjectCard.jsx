// import projectSs from "../../../public/Resources/projectSS.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import { SiXdadevelopers } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./animations.css";
const ProjectCard = ({ project }) => {
  const {
    id,
    websiteName,
    technology,
    details,
    liveSiteLink,
    githubClientCode,
    githubServerCode,
    ssUrl,
  } = project || [];

  const [firstChildHeight, setFirstChildHeight] = useState(0);
  const firstChildRef = useRef(null);

  useEffect(() => {
    if (firstChildRef.current) {
      const height = firstChildRef.current.offsetHeight;
      setFirstChildHeight(height);
    }
  }, [project]);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="flex flex-col gap-7 text-lg font-bold">
      <div className="flex items-center gap-2">
        {id}.
        <span className="bg-gradient-to-l from-cyan-400 via-cyan-500 to-blue-400 bg-clip-text text-transparent font-bold">
          {websiteName}
        </span>
        <a href={liveSiteLink} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt />
        </a>
      </div>
      <div className="flex flex-col gap-2">
        <span> Technology used: </span>{" "}
        {/* <span className="text-blue-700 ">{technology}</span> */}
        <div className="flex gap-1 flex-wrap text-sm">
          {technology.map((tech) => (
            <span
              key={tech}
              className=" p-2 bg-slate-100/10 hover:bg-slate-100/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 text-right text-sm font-bold">
        <span className="w-5 h-5">
          <SiXdadevelopers className="w-full h-full text-slate-200" />
        </span>
        <a
          href={githubClientCode}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 hover:underline hover:text-slate-200"
        >
          Client
        </a>
        {githubServerCode && (
          <a
            href={githubServerCode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:underline hover:text-slate-200"
          >
            Server
          </a>
        )}
      </div>
      <p>
        <span className="font-bold text-xs">
          Short description of the project:
        </span>{" "}
        <span className="text-xs"> {details}</span>
      </p>
    </div>
  );
};

export default ProjectCard;
