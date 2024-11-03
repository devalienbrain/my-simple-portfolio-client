import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Helmet>
        <title>Sabbir Hassan | Dev</title>
      </Helmet>
      <div className="bg-slate-950 text-slate-100 font-semibold text-sm min-h-screen flex flex-col">
        <div className="p-2 max-w-4xl mx-auto w-full flex flex-col flex-grow">
          {/* Navbar at the top */}
          <Navbar />

          {/* Main Content Area with dynamic height to fill screen */}
          <div className="my-10 flex-grow">
            <Outlet />
          </div>

          {/* Footer at the bottom */}
          <div className="py-3 shadow-md">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
