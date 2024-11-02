import {
  MdOutlineMarkEmailUnread,
  MdOutlinePhoneForwarded,
  MdMyLocation,
} from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-4">
      <div className="container mx-auto flex justify-between items-center text-xs">
        <div className="flex gap-4">
          <p className="flex items-center gap-1">
            <MdOutlineMarkEmailUnread className="w-4 h-4 text-gray-600" />
            <span>hassansabbir0321@gmail.com</span>
          </p>
          <p className="flex items-center gap-1">
            <MdOutlinePhoneForwarded className="w-4 h-4 text-gray-600" />
            <span>+880 1893 070812</span>
          </p>
          <p className="flex items-center gap-1">
            <MdMyLocation className="w-4 h-4 text-gray-600" />
            <span>Dhaka, Bangladesh</span>
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-5 h-5 text-gray-600" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-5 h-5 text-gray-600" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
