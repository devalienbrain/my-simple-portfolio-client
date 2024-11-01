import "./GlitteringStar.css";
import starImage from "../../../public/Resources/Star.png";

const AnimatedStar = () => {
  return (
    <div>
      <img className="w-16" src={starImage} alt="Star" />
    </div>
  );
};

export default AnimatedStar;
