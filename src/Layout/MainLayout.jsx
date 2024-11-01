import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import Home from "../Pages/Home/Home";
import Banner from "../Components/Header/Banner";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import LogOutUser from "../Components/LogOutUser/LogOutUser";
const MainLayout = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="p-2 max-w-5xl mx-auto">
          <Navbar />
          <Banner />
          <Skills />
          <Home />
          <Footer />
        </div>
      </div>
      {/* <LogOutUser /> */}
    </>
  );
};

export default MainLayout;
