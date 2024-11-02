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
      <div className="bg-slate-950 text-slate-100 font-semibold text-sm">
        <div className="p-2 max-w-4xl mx-auto">
          <Navbar />
          <div className="my-10">
            <Outlet />
          </div>
          <div className="py-3 shadow-md">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
