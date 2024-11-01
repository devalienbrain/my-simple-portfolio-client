import Resume from "../../Pages/Resume/Resume";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLinks from "./Shared/NavLinks/NavLinks";
import Logo from "./Shared/Logo/Logo";
import SocialLink from "./Shared/SocialLink/SocialLink";
import FollowMe from "../../Pages/About/FollowMe";

const Navbar = () => {
  // console.log(user);
  return (
    <div className="flex justify-between py-3 sticky top-0 z-10">
      <div className="flex justify-start items-center gap-3 text-base">
        <NavLinks />
      </div>
      <span className="flex justify-end hover:bg-cyan-500">
        <Resume />
      </span>
    </div>
  );
};

export default Navbar;
