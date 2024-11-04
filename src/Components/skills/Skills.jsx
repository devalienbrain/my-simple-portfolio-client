import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import useAxiosPublic from "../../hooks/useAxios";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(null);
  const axiosInstance = useAxiosPublic();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("skills");
        setSkills(response.data);
        setError(null); // Clear error if fetch is successful
      } catch (error) {
        setError(
          error.response?.data?.message ||
            "Error fetching data. Loading from local..."
        );

        // If there’s an error, fetch data from the local Skills.json file
        try {
          const localResponse = await fetch("/Skills.json");
          const localData = await localResponse.json();
          setSkills(localData);
        } catch (localError) {
          setError("Error loading data from local JSON file");
        }
      }
    };

    fetchData();
  }, [axiosInstance]);

  return (
    <div id="skills" className="py-10">
      <h1 className="text-xl font-extrabold text-slate-300 py-5">Skill set</h1>

      {error && <p className="text-red-500 text-xs">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-950/10 rounded-2xl">
        {skills.map((skill) => (
          <SkillCard key={skill._id} skill={skill}></SkillCard>
        ))}
      </div>
    </div>
  );
};

export default Skills;
