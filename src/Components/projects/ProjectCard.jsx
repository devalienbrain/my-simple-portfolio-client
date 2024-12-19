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
    <div className="border p-4">
      <div className="flex items-center gap-2 text-xl font-bold">
        {/* <span>{id}.</span> */}
        <span>{websiteName}</span>
        <a
          href={liveSiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-300"
        >
          <FaExternalLinkAlt />
        </a>
      </div>

      <div className="mt-4">
        <span className="text-slate-300 font-semibold">Technology used:</span>
        <div className="flex gap-2 flex-wrap mt-2">
          {technology.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm font-medium bg-slate-700 rounded-full text-cyan-300 hover:bg-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 mt-4 text-sm">
        <SiXdadevelopers className="w-5 h-5 text-cyan-400" />
        <a
          href={githubClientCode}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 hover:text-cyan-300 hover:underline"
        >
          Client Code
        </a>
        {githubServerCode && (
          <a
            href={githubServerCode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-cyan-300 hover:underline"
          >
            Server Code
          </a>
        )}
      </div>

      <p className="mt-4 text-sm text-gray-400">
        <span className="font-bold">Short description:</span> {details}
      </p>
    </div>
  );
};

export default ProjectCard;
