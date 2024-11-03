import { Outlet, NavLink } from "react-router-dom";
import { FaUser, FaPlus, FaEdit, FaTrash } from "react-icons/fa"; // Import necessary icons
import DashboardNavbar from "../components/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="bg-slate-950 text-slate-300 min-h-screen flex flex-col">
      <div className="flex">
        {/* Sidebar Section */}
        <div className="w-1/4 shadow-md px-4 flex flex-col">
          {/* Portfolio Title */}
          <h1 className="text-xl font-extrabold text-left py-11">Hassan</h1>

          <nav className="flex flex-col gap-4">
            {/* Profile Link */}
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-500"
              }
            >
              <FaUser className="inline mr-2" />
              Profile
            </NavLink>

            {/* Skills Link */}
            <NavLink
              to="/dashboard/skills"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-500"
              }
            >
              <FaPlus className="inline mr-2" />
              Skills
            </NavLink>

            {/* Projects Link */}
            <NavLink
              to="/dashboard/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-500"
              }
            >
              <FaEdit className="inline mr-2" />
              Projects
            </NavLink>

            {/* Important Links */}
            <NavLink
              to="/dashboard/links"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-500"
              }
            >
              <FaTrash className="inline mr-2" />
              Important Links
            </NavLink>
          </nav>
        </div>

        {/* Main Content Section */}
        <div className="w-3/4 p-4">
          <div className="shadow-md ">
            <DashboardNavbar />
          </div>

          {/* Main Content Area */}
          <div className="bg-slate-900 rounded-lg px-5 min-h-[60vh]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
