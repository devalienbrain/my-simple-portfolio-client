import Resume from "../../Pages/Resume/Resume";
import NavLinks from "./Shared/NavLinks/NavLinks";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-3">
      <div className="flex justify-start items-center gap-3 text-base">
        <NavLinks />
      </div>
      <span className="flex justify-end hover:text-cyan-400">
        <Resume />
      </span>
    </div>
  );
};

export default Navbar;
