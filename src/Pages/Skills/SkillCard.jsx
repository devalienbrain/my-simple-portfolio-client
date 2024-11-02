const SkillCard = ({ skill }) => {
  const { id, title, logo } = skill;
  return (
    <div className="border p-2">
      <img src={logo} alt="tech-icon" className="w-7 h-7" />
      <span className="font-bold text-lg">
        {title}
      </span>
    </div>
  );
};

export default SkillCard;
