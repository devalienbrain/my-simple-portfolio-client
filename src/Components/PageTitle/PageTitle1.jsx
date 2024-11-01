import anim from "../../../public/Resources/BannerImg/bannerImg.gif";
// import Lottie from "react-lottie";
// import animationData from "../../lotties/astronot.json";

const PageTitle1 = ({ title, subTitle }) => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-center">
      <div className="flex flex-col gap-7 p-5 md:p-10 my-7">
        <h1 className="text-5xl font-bold text-center">{title}</h1>
      </div>
      <hr className="hidden md:block border-none bg-slate-600 h-[1px] w-full" />
      <div className="animate-pulse opacity-25">
        <img src={anim} className="w-48" alt="anim" />
      </div>
    </div>
  );
};

export default PageTitle1;
