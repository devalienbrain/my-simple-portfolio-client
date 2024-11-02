import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Projects.json");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Clean-up function in case component unmounts before fetch completes
    return () => {
      // Cancel any pending fetch requests or clean-up tasks
    };
  }, []); // Empty dependency array means this effect runs only once, on component mount
  return (
    <div id="projects">
      <h1 className="text-xl font-extrabold text-slate-300 py-5 my-10">
        Project showcasing
      </h1>
      <div>
        <div className="grid grid-cols-1 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="carousel w-full">
              <div id="item1" className="carousel-item w-full">
                <ProjectCard key={project.id} project={project}></ProjectCard>
              </div>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
