import { Helmet } from "react-helmet-async";
import Image from "../components/image";
import Education from "../components/Education";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Sabbir Hassan | Contact</title>
      </Helmet>
      <div>
        <Image />
        <Education />
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
