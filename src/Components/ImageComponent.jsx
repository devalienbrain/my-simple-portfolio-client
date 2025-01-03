import { Link } from "react-router-dom";
import bannerImg from "/Resources/hassan.png";

const ImageComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="flex-1 flex justify-start items-center">
        <Link to="/login">
          <img
            // ref={bannerImgRef}
            alt="Hassan's Photo"
            src={bannerImg}
            className="w-96"
          />
        </Link>
      </div>
      <div className="flex-1 flex flex-col justify-end items-center">
        <span className="text-2xl font-semibold text-lime-400 animate-pulse">
          Buy me a cofee?
        </span>
        <button>Go</button>
      </div>
    </div>
  );
};

export default ImageComponent;
