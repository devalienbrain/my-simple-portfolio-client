import { PiDownloadSimpleThin } from "react-icons/pi";
function Resume() {
  const cvDownloadLink =
    "https://drive.google.com/uc?export=download&id=137qSybh1PpW1uoCoYmSh09pb0Xt9NY8vTwuELU8kFkI";

  return (
    <a href={cvDownloadLink}>
      <div className="flex justify-center items-center gap-1 hover:text-cyan-400">
        <p>resume</p>
        <PiDownloadSimpleThin className="w-5 h-5" />
      </div>
    </a>
  );
}

export default Resume;
