import { RxSlash } from "react-icons/rx";
const NavLinks = () => {
  const links = (
    <>
      <div className="flex flex-col lg:flex-row justify-start gap-5 md:gap-7 font-bold text-slate-400">
        
        <a href="#skills">
          <span className="hover:text-cyan-400">Skills</span>
        </a>
        <a href="#projects">
          <span className="hover:text-cyan-400">Projects</span>
        </a>

        
      </div>
    </>
  );
  return <div> {links}</div>;
};

export default NavLinks;
