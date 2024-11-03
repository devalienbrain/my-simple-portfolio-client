import { Outlet, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa"; // Import icons
import DashboardNavbar from "../components/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <>
      <div className="bg-slate-950 text-slate-300">
        <div className="block lg:flex">
          {/* Sidebar Section */}
          <div className="w-full lg:w-1/4 shadow-md p-4">
            {/* User Profile Info */}
            <div className="flex flex-row lg:flex-col items-start gap-4">
              {/* Profile Link */}
              <nav className="flex flex-col gap-4 w-full">
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
                {/* Additional Sidebar Links */}
                {/* Add more links as needed */}
              </nav>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="w-full lg:w-3/4 min-h-screen p-10">
            <div className="shadow-md">
              <DashboardNavbar />
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
