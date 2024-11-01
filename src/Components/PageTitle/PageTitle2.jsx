// import anim from "../../../public/Resources/BannerImg/bannerImg.gif";
import Lottie from "react-lottie";
import animationData from "../../lotties/opener-loading.json";

const PageTitle2 = ({ title, subTitle }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center my-7">
      <div>
        <Lottie options={defaultOptions} height={100} width={100} />
      </div>
      <h1 className="text-5xl font-bold text-center">{title}</h1>
      {/* <hr className="hidden md:block border-none bg-slate-600 h-[1px] w-full" /> */}
    </div>
  );
};

export default PageTitle2;
