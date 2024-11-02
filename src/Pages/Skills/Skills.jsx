import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import PageTitle from "../../Components/PageTitle/PageTitle";
import SkillLogos from "./SkillLogos";

const Skills = () => {
  const title = "Skills.";
  const subTitle = "Some skills I possess and have practiced.";

  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Skills.json");
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="skills" className="py-10">
      <h1 className="text-xl font-extrabold text-slate-300 py-5">Skill set</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-950/10 rounded-2xl">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill}></SkillCard>
        ))}
      </div>
    </div>
  );
};

export default Skills;
