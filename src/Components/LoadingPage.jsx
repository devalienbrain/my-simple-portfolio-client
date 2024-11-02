import { useEffect, useState } from "react";
// import Lottie from "react-lottie";
import animationData from "../lotties/loading.json";
import "./loading.css";
import devPic from "/Resources/icon-developer.gif";
const LoadingPage = () => {
  const [loadingStyle, setLoadingStyle] = useState({
    backgroundColor: "rgba(0, 0, 0, 0)",
  });

  useEffect(() => {
    // Set the background color to the desired end color after a delay
    const timeout = setTimeout(() => {
      setLoadingStyle({ backgroundColor: "rgba(0, 0, 0, 1)" });
    }, 50); // Adjust the delay as needed

    // Clear the timeout on unmount to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex flex-col gap-7 justify-center items-center min-h-screen font-black bg-slate-950 text-white py-10">
      <div className="flex flex-col gap-9 items-start justify-center">
        <div className="flex items-center justify-center gap-2">
          <img src={devPic} className="w-16 h-16 " alt="Dev" />
        </div>
        <div className="flex justify-start items-center gap-5 text-lg">
          <div className="text-white">
            {/* <div className="bg-gradient-to-r from-blue-600 via-red-500 to-cyan-300 bg-clip-text text-transparent text-xl font-black">
            Hassan's portfolio
          </div> */}
            <div>Hey! Just hold on a moment..</div>
          </div>
          {/* <div
          className="loading-container flex  items-center justify-start gap-5 px-10"
          style={loadingStyle}
        >
          <Lottie options={defaultOptions} height={25} width={25} />
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
