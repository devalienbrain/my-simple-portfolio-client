import { PiDownloadSimpleThin } from "react-icons/pi";
function Resume() {
  const cvDownloadLink =
    "https://drive.google.com/uc?export=download&id=137qSybh1PpW1uoCoYmSh09pb0Xt9NY8vTwuELU8kFkI";

  return (
    <a href={cvDownloadLink}>
      <div className="flex justify-center gap-1 items-center">
        <p className="text-slate-400">resume</p>
        <span className="rounded-full w-9 h-9 flex justify-center items-center">
          <PiDownloadSimpleThin />
        </span>
      </div>
    </a>
  );
}

export default Resume;
