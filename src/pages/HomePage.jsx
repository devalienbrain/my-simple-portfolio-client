import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Sabbir Hassan | Home</title>
      </Helmet>
      <div>
        <Banner />
        <Skills />
        <Projects />
      </div>
    </>
  );
};

export default HomePage;
