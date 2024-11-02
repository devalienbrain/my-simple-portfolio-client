import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import Home from "../Pages/Home/Home";
import Banner from "../Components/Header/Banner";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import LogOutUser from "../Components/LogOutUser/LogOutUser";
import { Helmet } from "react-helmet-async";
import Projects from "../Pages/Projects/Projects";
import Education from "../Pages/About/Education";
import Contact from "../Pages/Contact/Contact";
import Image from "../Components/Image/image";
const MainLayout = () => {
  return (
    <>
      <Helmet>
        <title>Sabbir Hassan</title>
      </Helmet>
      <div className="bg-slate-950 text-slate-100 font-semibold text-sm">
        <div className="p-2 max-w-4xl mx-auto">
          <Navbar />
          <div className="mt-3">
            <Banner />
            <Skills />
            <Projects />
            <Image />
            <Education />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
      {/* <LogOutUser /> */}
    </>
  );
};

export default MainLayout;
