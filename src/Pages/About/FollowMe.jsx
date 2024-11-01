import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const FollowMe = () => {
  return (
    <div className="flex gap-4 items-center justify-center">
      <h2 className=" bg-gradient-to-r from-cyan-800 via-blue-500 to-cyan-600 bg-clip-text text-transparent font-semibold">
        Follow me on:{" "}
      </h2>
      <span className="w-7 h-9 hover:scale-110">
        <a
          href="https://www.youtube.com/channel/UCA-u1hiQdsl5dEhpx11y3Ug"
          target="_blanc"
        >
          <FaYoutube className="w-full h-full hover:text-red-500" />
        </a>
      </span>
      <span className="w-7">
        <a
          href="https://www.facebook.com/profile.php?id=61558770101731"
          target="_blanc"
        >
          <FaFacebook className="w-full h-full hover:scale-105 hover:text-blue-500" />
        </a>
      </span>
      <span className="w-7">
        <a href="https://www.instagram.com/alienbrain.dev/" target="_blanc">
          <FaInstagram className="w-full h-full hover:scale-105" />
        </a>
      </span>
    </div>
  );
};

export default FollowMe;
