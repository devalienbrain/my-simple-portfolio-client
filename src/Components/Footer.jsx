import { useEffect, useState } from "react";
import { MdOutlineMarkEmailUnread, MdOutlinePhoneForwarded, MdMyLocation } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiUpArrowAlt } from "react-icons/bi";
import useAxiosPublic from "../hooks/useAxios";

const Footer = () => {
  const [contactInfo, setContactInfo] = useState({
    githubLink: "",
    linkedinLink: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState(null);
  const axiosInstance = useAxiosPublic();

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await axiosInstance.get("/links");
        setContactInfo(response?.data);
        setError(null); // Clear any previous error
      } catch (error) {
        setError(error.response?.data?.message || "Error fetching contact information");
      }
    };
    fetchContactInfo();
  }, [axiosInstance]);

  return (
    <div className="py-4 bg-slate-950 text-gray-400">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs md:text-sm">
        
        {/* Social Icons with Hover Arrow */}
        <div className="flex gap-4 items-center">
          <a
            href={contactInfo.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 group"
          >
            <FaGithub className="w-6 h-6 hover:text-gray-400 transition duration-200" />
            <BiUpArrowAlt className="w-6 h-6 group-hover:text-cyan-400 group-hover:animate-blink transition duration-200 transform rotate-45" />
          </a>
          <a
            href={contactInfo.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 group"
          >
            <FaLinkedin className="w-6 h-6 hover:text-blue-300 transition duration-200" />
            <BiUpArrowAlt className="w-6 h-6 group-hover:text-cyan-400 group-hover:animate-blink transition duration-200 transform rotate-45" />
          </a>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
          <p className="flex items-center gap-1">
            <MdOutlineMarkEmailUnread className="w-4 h-4" />
            <span>{contactInfo.email}</span>
          </p>
          <p className="flex items-center gap-1">
            <MdOutlinePhoneForwarded className="w-4 h-4" />
            <span>{contactInfo.phone}</span>
          </p>
          <p className="flex items-center gap-1">
            <MdMyLocation className="w-4 h-4" />
            <span>Dhaka, Bangladesh</span>
          </p>
        </div>
      </div>

      {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
    </div>
  );
};

export default Footer;
