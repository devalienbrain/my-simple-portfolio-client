import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/skills");
        if (!response.ok) {
          throw new Error("Failed to fetch skills data.");
        }
        const data = await response.json();
        setSkills(data);
        setError(null); // Clear error if fetch is successful
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="skills" className="py-10">
      <h1 className="text-xl font-extrabold text-slate-300 py-5">Skill set</h1>
      
      {error && (
        <p className="text-red-500 font-semibold">
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-950/10 rounded-2xl">
        {skills.map((skill) => (
          <SkillCard key={skill._id} skill={skill}></SkillCard>
        ))}
      </div>
    </div>
  );
};

export default Skills;
