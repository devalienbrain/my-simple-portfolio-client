import Marquee from "react-fast-marquee";
// import LogosSection from "./LogoSection";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdOutlinePhoneForwarded } from "react-icons/md";
import { MdMyLocation } from "react-icons/md";
import devIcon from "../../../public/Resources/icon-developer.gif";
import SocialLink from "../Header/Shared/SocialLink/SocialLink";

const Footer = () => {
  return (
    <>
      <div className="py-16">
        <div className="container mx-auto">
          <div className="flex flex-row-reverse justify-center items-end gap-2 md:gap-9">
            <div className="flex flex-col gap-2 text-xs">
              <p className="flex gap-2 justify-start items-center">
                <MdOutlineMarkEmailUnread className="w-5 h-5 text-cyan-300" />
                <span>hassansabbir0321@gmail.com</span>
              </p>
              <p className="flex gap-2 justify-start items-center">
                <MdOutlinePhoneForwarded className="w-5 h-5 text-cyan-300" />{" "}
                <span>+880 1893 070812</span>
              </p>
              <p className="flex gap-2 justify-start items-center">
                <MdMyLocation className="w-5 h-5 text-cyan-300" />{" "}
                <span>Dhaka, Bangladesh</span>
              </p>
            </div>

            <div className="flex flex-col gap-1 justify-center items-end text-right text-sm font-semibold pt-5 border-r pr-2 md:pr-9">
              {/* <div className="flex justify-end bg-transparent">
                <img src={devIcon} alt="Developer" />
              </div> */}
              <div>
                <span className="font-black text-lg shadow-xl py-4">
                  Hassan
                </span>
              </div>
              <div>
                <p>Software Engineer</p>
              </div>
              <div className="flex  justify-end items-center gap-2 pr-2">
                <SocialLink />
              </div>
              <p>
                <small>Full-stack Web Developer</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-left p-5 ">
        <p>
          <small>@ 2024 Hassan - All Rights Reserved </small>
        </p>
      </div>
    </>
  );
};

export default Footer;
