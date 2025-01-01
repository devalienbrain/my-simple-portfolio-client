import NavLinks from "./shared/NavLinks";
import Resume from "./shared/Resume";

const Navbar = () => {
  return (
    <nav className="w-full py-5 flex flex-col-reverse md:flex-row items-start md:items-center justify-between">
      {/* NavLinks for Desktop */}
      <div className="flex space-x-6">
        <NavLinks />
      </div>

      {/* Resume Link */}
      <div className="flex items-center">
        <Resume />
      </div>
    </nav>
  );
};

export default Navbar;
