import { PiDownloadSimpleThin } from "react-icons/pi";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxios";

function Resume() {
  const [resumeViewLink, setResumeViewLink] = useState("");
  const [resumeDownloadLink, setResumeDownloadLink] = useState("");
  const axiosInstance = useAxiosPublic();

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axiosInstance.get("/links");
        setResumeViewLink(response?.data?.resumeViewLink);
        setResumeDownloadLink(response?.data?.resumeDownloadLink);
      } catch (error) {
        // Fallback: Load from local Links.json if server fetch fails
        try {
          const localResponse = await fetch("/Links.json");
          const localData = await localResponse.json();
          setResumeViewLink(localData.resumeViewLink);
          setResumeDownloadLink(localData.resumeDownloadLink);
        } catch (localError) {
          // No further error handling required as per your request
        }
      }
    };

    fetchLinks();
  }, [axiosInstance]);

  return (
    <div className="flex justify-center items-center gap-1 my-5">
      <a href={resumeViewLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-400">
        <p>resume</p>
      </a>
      <a href={resumeDownloadLink} download className="flex items-center gap-1 hover:text-cyan-400">
        <PiDownloadSimpleThin className="w-5 h-5" />
      </a>
    </div>
  );
}

export default Resume;
