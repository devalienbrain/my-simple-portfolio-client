// DashboardNavbar.js
import NavLinks from "./shared/NavLinks";

const DashboardNavbar = () => {
  return (
    <div className="flex justify-between items-center py-7 text-slate-300">
      <div className="flex justify-start">
        <NavLinks dashboard={true} /> {/* Pass dashboard prop as true */}
      </div>
    </div>
  );
};

export default DashboardNavbar;
