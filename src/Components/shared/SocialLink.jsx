import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLink = () => {
  return (
    <div className="flex gap-4">
      <span className="w-7 hover:scale-105">
        <a href="https://github.com/devalienbrain" target="_blanc">
          <FaGithub className="w-full h-full hover:text-green-500" />
        </a>
      </span>
      <span className="w-7">
        <a
          href="https://www.linkedin.com/in/md-sabbir-hassan-21a0962a0/"
          target="_blanc"
        >
          <FaLinkedin className="w-full h-full hover:rotate-12 hover:text-blue-500" />
        </a>
      </span>
    </div>
  );
};

export default SocialLink;
