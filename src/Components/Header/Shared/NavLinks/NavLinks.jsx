import { RxSlash } from "react-icons/rx";
const NavLinks = () => {
  const links = (
    <>
      <div className="flex justify-start gap-5 md:gap-7">
        <a href="#banner" className="flex items-center hover:text-cyan-400">
          <span>home</span>
          <RxSlash />
        </a>
        <a href="#skills">
          <span className="hover:text-cyan-400">skills</span>
        </a>
        <a href="#projects">
          <span className="hover:text-cyan-400">projects</span>
        </a>
      </div>
    </>
  );
  return <div> {links}</div>;
};

export default NavLinks;
