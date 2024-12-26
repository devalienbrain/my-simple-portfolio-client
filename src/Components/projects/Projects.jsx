import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import useAxiosPublic from "../../hooks/useAxios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const axiosInstance = useAxiosPublic();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axiosInstance.get("/projects");
        console.log(response?.data);
        setProjects(response?.data);
        setError(null); // Clear error if fetch is successful
      } catch (error) {
        setError(
          error.response?.data?.message ||
            "Error fetching projects data. Loading from local..."
        );

        // If there’s an error, fetch data from the local Projects.json file
        try {
          const localResponse = await fetch("/Projects.json");
          const localData = await localResponse.json();
          setProjects(localData);
        } catch (localError) {
          setError("Error loading projects data from local JSON file");
        }
      }
    };

    fetchProjects();
  }, [axiosInstance]);

  return (
    <div id="projects" className="py-10">
      <h1 className="text-2xl font-extrabold text-slate-300 py-5 my-5">
        Project showcasing
      </h1>

      {error &&
        // <p className="text-red-500 text-xs">{error}</p>
        console.log(error)}

      <div className="grid grid-cols-1 gap-10">
        {projects.map((project) => (
          <div key={project._id} className="carousel w-full">
            <div className="carousel-item w-full">
              <ProjectCard key={project._id} project={project}></ProjectCard>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
