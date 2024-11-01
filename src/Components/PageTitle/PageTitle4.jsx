// import anim from "../../../public/Resources/BannerImg/bannerImg.gif";
import Lottie from "react-lottie";
import animationData from "../../lotties/loading.json";

const PageTitle4 = ({ title, subTitle }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-center">
      <div className="flex flex-col gap-7 p-5 md:p-10 my-7">
        <h1 className="text-5xl font-bold text-center">{title}</h1>
      </div>
      <hr className="hidden md:block border-none bg-slate-600 h-[1px] w-full" />
      <div>
        <Lottie options={defaultOptions} height={50} width={50} />
      </div>
    </div>
  );
};

export default PageTitle4;
