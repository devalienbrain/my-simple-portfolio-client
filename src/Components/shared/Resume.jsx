import { PiDownloadSimpleThin } from "react-icons/pi";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxios";

function Resume() {
  const [resumeViewLink, setResumeViewLink] = useState("");
  const [resumeDownloadLink, setResumeDownloadLink] = useState("");
  const [error, setError] = useState(null);
  const axiosInstance = useAxiosPublic();

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axiosInstance.get("/links");
        setResumeViewLink(response?.data?.resumeViewLink);
        setResumeDownloadLink(response?.data?.resumeDownloadLink);
        setError(null); // Clear any previous error
      } catch (error) {
        setError(error.response?.data?.message || "Error fetching resume links");
      }
    };
    fetchLinks();
  }, [axiosInstance]);

  return (
    <div className="flex justify-center items-center gap-4 my-5">
      {error && <p className="text-red-500 font-semibold">{error}</p>}
      <a href={resumeViewLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-400">
        <p>Resume</p>
      </a>
      <a href={resumeDownloadLink} download className="flex items-center gap-1 hover:text-cyan-400">
        <PiDownloadSimpleThin className="w-5 h-5" />
      </a>
    </div>
  );
}

export default Resume;
