import { RxSlash } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NavLinks = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === "/" && hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  const links = (
    <div className="flex justify-start gap-5 md:gap-7">
      <Link to="/#banner" className="flex items-center hover:text-cyan-400">
        <span>home</span>
        <RxSlash />
      </Link>
      <Link to="/#skills">
        <span className="hover:text-cyan-400">skills</span>
      </Link>
      <Link to="/#projects">
        <span className="hover:text-cyan-400">projects</span>
      </Link>
      <Link to="/contact">
        <span className="hover:text-cyan-400">contact me</span>
      </Link>
    </div>
  );

  return <div>{links}</div>;
};

export default NavLinks;
