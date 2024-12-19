const SkillCard = ({ skill }) => {
  const { id, title, logo } = skill;
  return (
    <div className="border p-2">
      <img src={logo} alt="tech-icon" className="w-8 h-8" />
      <span className="font-bold py-11">{title}</span>
    </div>
  );
};

export default SkillCard;
