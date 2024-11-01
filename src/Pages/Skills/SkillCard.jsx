const SkillCard = ({ skill }) => {
  const { id, title, logo } = skill;
  return (
    <div className="rounded-2xl shadow-2xl relative overflow-hidden group  bg-gradient-to-l from-slate-700/50 via-slate-800/50 to-slate-600/50 p-7">
      <div className="absolute inset-0 translate-y-[100%] group-hover:translate-y-[0%] bg-slate-300 transition-transform duration-500 p-5"></div>
      <div className="flex gap-5 justify-start items-center">
        <div className="flex-1 flex justify-end">
          <img
            src={logo}
            alt="tech-icon"
            className="bg-white p-2 w-12 group-hover:rotate-12 transition-transform duration-300"
          />
        </div>
        <div className="w-2/3 flex justify-start">
          <span className="font-bold text-lg text-red-600 group-hover:text-black relative z-10 duration-300 text-center">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
