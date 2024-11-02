import { Link } from "react-router-dom";
import logo from "/Resources/hassan.png";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex justify-start gap-1 items-center">
        <img alt="Hassan's logo" src={logo} className="w-7 h-7 rounded-full" />
        <span className="font-black text-lg">Hassan's Profile</span>
      </div>
    </Link>
  );
};

export default Logo;
