import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
// import PageTitle from "../../Components/PageTitle/PageTitle";
// import { Helmet } from "react-helmet-async";
import Aos from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import PageTitle from "../../Components/PageTitle/PageTitle";

import bannerImg from "/Resources/hassan.png";

const Contact = () => {
  const form = useRef();
  const title = "Contact.";
  const subTitle =
    "Results-driven professional. Skilled in full-stack web development. Eager to bring innovation and drive success. Please connect and send your message.";
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dcu6k55",
        "template_vf19dpu",
        form.current,
        "ILXv8meX2_amnqjVf"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Nice! thanks for contacting me.");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div id="contact">
      {/* <Helmet>
        <title>Hassan | Contact</title>
      </Helmet> */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex-1 flex justify-start items-center">
          <img
            // ref={bannerImgRef}
            alt="Hassan's Photo"
            src={bannerImg}
            className="w-96"
          />
          {/* <LottieAstronot /> */}
        </div>{" "}
        <div className="flex gap-5 my-10" data-aos="fade">
          {/* Contact with form-email Starts*/}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full flex flex-col gap-9 card"
          >
            <span className="text-slate-300 pb-3 font-bold text-xl text-center">
              Write Messege
            </span>
            <input
              type="text"
              name="user_name"
              className="rounded-md border flex-1 p-2"
              placeholder="Your Name"
            />
            {/* <label>Your email</label> */}
            <input
              type="email"
              name="user_email"
              className="rounded-md border flex-1 p-2"
              placeholder="Your Email"
            />
            {/* <label>Write your message here</label> */}
            <textarea
              name="message"
              placeholder="Write your message here"
              className="rounded-md border p-2"
            />
            <input
              type="submit"
              value="Send"
              className="p-3 border rounded-lg text-white hover:text-green-600 font-semibold"
            />
          </form>
          {/* Contact with form-email Ends*/}
        </div>
      </div>
    </div>
  );
};

export default Contact;
