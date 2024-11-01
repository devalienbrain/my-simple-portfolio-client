import { Helmet } from "react-helmet-async";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Education from "../About/Education";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Hassan | Home</title>
      </Helmet>
      <Projects></Projects>
      <Education></Education>

      <Contact></Contact>
    </div>
  );
};

export default Home;
