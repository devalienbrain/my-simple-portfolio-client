import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";


const Contact = () => {
  const form = useRef();
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
      <div className="flex gap-5 my-10" data-aos="fade">
          {/* Contact with form-email Starts*/}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full flex flex-col gap-3 card"
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
  );
};

export default Contact;
