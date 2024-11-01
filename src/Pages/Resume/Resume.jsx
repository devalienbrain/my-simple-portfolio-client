import { FaDownload } from "react-icons/fa";
function Resume() {
  const cvDownloadLink =
    "https://drive.google.com/uc?export=download&id=137qSybh1PpW1uoCoYmSh09pb0Xt9NY8vTwuELU8kFkI";

  return (
    <a href={cvDownloadLink}>
      <span className="flex justify-center gap-3 items-center">
        <span className="rounded-full w-9 h-9 flex justify-center items-center">
          <FaDownload />
        </span>
        <span className="flex-1 -ml-3 p-3 ">Resume</span>
      </span>
    </a>
  );
}

export default Resume;
