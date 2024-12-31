// import { useEffect, useState } from "react";
// import { MdOutlineMarkEmailUnread, MdOutlinePhoneForwarded, MdMyLocation } from "react-icons/md";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { BiUpArrowAlt } from "react-icons/bi";
// import useAxiosPublic from "../hooks/useAxios";

// const Footer = () => {
//   const [contactInfo, setContactInfo] = useState({
//     githubLink: "",
//     linkedinLink: "",
//     email: "",
//     phone: "",
//   });
//   const axiosInstance = useAxiosPublic();

//   useEffect(() => {
//     const fetchContactInfo = async () => {
//       try {
//         const response = await axiosInstance.get("/links");
//         setContactInfo(response?.data);
//       } catch (error) {
//         // If server fetch fails, load from local Links.json file
//         try {
//           const localResponse = await fetch("/Links.json");
//           const localData = await localResponse.json();
//           setContactInfo(localData);
//         } catch (localError) {
//           // No additional error handling needed
//         }
//       }
//     };

//     fetchContactInfo();
//   }, [axiosInstance]);

//   return (
//     <div className="py-4 bg-slate-950 text-gray-400">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs md:text-sm">

//         {/* Social Icons with Hover Arrow */}
//         <div className="flex gap-4 items-center">
//           <a
//             href={contactInfo.githubLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-1 group"
//           >
//             <FaGithub className="w-6 h-6 hover:text-gray-400 transition duration-200" />
//             <BiUpArrowAlt className="w-6 h-6 group-hover:text-cyan-400 group-hover:animate-blink transition duration-200 transform rotate-45" />
//           </a>
//           <a
//             href={contactInfo.linkedinLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-1 group"
//           >
//             <FaLinkedin className="w-6 h-6 hover:text-blue-300 transition duration-200" />
//             <BiUpArrowAlt className="w-6 h-6 group-hover:text-cyan-400 group-hover:animate-blink transition duration-200 transform rotate-45" />
//           </a>
//         </div>

//         {/* Contact Information */}
//         <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
//           <p className="flex items-center gap-1" title={`${contactInfo.email}`}>
//             <MdOutlineMarkEmailUnread className="w-4 h-4" />
//           </p>
//           <p className="flex items-center gap-1" title={`${contactInfo.phone}`}>
//             <MdOutlinePhoneForwarded className="w-4 h-4" />
//           </p>
//           <p className="flex items-center gap-1">
//             <MdMyLocation className="w-4 h-4" />
//             <span>Dhaka, Bangladesh</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import { useEffect, useState } from "react";
import {
  MdOutlineMarkEmailUnread,
  MdOutlinePhoneForwarded,
  MdMyLocation,
} from "react-icons/md";
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
  const axiosInstance = useAxiosPublic();

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await axiosInstance.get("/links");
        setContactInfo(response?.data);
      } catch (error) {
        try {
          const localResponse = await fetch("/Links.json");
          const localData = await localResponse.json();
          setContactInfo(localData);
        } catch (localError) {}
      }
    };

    fetchContactInfo();
  }, [axiosInstance]);

  return (
    <div className="py-4 bg-slate-950 text-gray-400">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start text-xs md:text-sm">
        {/* Social Icons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={contactInfo.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 group"
          >
            <FaGithub className="w-6 h-6 hover:text-gray-400 transition duration-200" />
            <BiUpArrowAlt className="w-4 h-4 group-hover:text-cyan-400 group-hover:animate-blink transition duration-200 transform rotate-45" />
          </a>
          <a
            href={contactInfo.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 group"
          >
            <FaLinkedin className="w-6 h-6 hover:text-blue-300 transition duration-200" />
            <BiUpArrowAlt className="w-4 h-4 group-hover:text-cyan-400 group-hover:animate-blink transition duration-200 transform rotate-45" />
          </a>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0 text-left">
          <p className="flex items-center gap-1" title={contactInfo.email}>
            <MdOutlineMarkEmailUnread className="w-4 h-4" />
            <span>{contactInfo.email || "Email not available"}</span>
          </p>
          <p className="flex items-center gap-1" title={contactInfo.phone}>
            <MdOutlinePhoneForwarded className="w-4 h-4" />
            <span>{contactInfo.phone || "Phone not available"}</span>
          </p>
          <p className="flex items-center gap-1">
            <MdMyLocation className="w-4 h-4" />
            <span>Dhaka, Bangladesh</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
