import NavLinks from "./Shared/NavLinks/NavLinks";
import Resume from "./Shared/Resume/Resume";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-7 text-slate-300">
      <div className="flex justify-start">
        <NavLinks />
      </div>
      <span className="flex justify-end">
        <Resume />
      </span>
    </div>
  );
};

export default Navbar;
