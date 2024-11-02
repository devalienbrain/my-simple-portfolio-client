import { Helmet } from "react-helmet-async";
import ImageComponent from "../components/ImageComponent";
import Education from "../components/Education";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Sabbir Hassan | Contact</title>
      </Helmet>
      <div>
        <ImageComponent />
        <Education />
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
