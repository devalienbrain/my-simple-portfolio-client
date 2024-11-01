import { useState, useEffect } from "react";
import AboutMe from "./AboutMe";

const About = () => {
  const [showAboutButton, setShowAboutButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down a certain amount (e.g., 100 pixels)
      if (window.scrollY > 100) {
        setShowAboutButton(true);
      } else {
        setShowAboutButton(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-1/2 left-0 z-100 transform -translate-x-1/2 rotate-90">
      {/* Show the button based on the state */}
      {showAboutButton && (
        <button
          className="bg-[#9FEF00] text-black font-bold shadow-2xl py-2 px-4 relative left-0 flex justify-center items-center hover:animate-bounce"
          onClick={() => document.getElementById("my_modal_3").showModal()}
          style={{ transform: "translateY(-50%)" }}
        >
          ABOUT ME
        </button>
      )}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box  bg-gradient-to-r from-cyan-900/25 via-red-700/10 to-blue-600/20 rounded-2xl shadow-2xl">
          <AboutMe />
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-base btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* <div className="flex justify-center items-center text-center">
            <div>
              <h3 className="font-bold text-lg">
                Rate your Experience in My Web portal
              </h3>
              <div> 1 2 3 4 5 </div>
            </div>
           </div> */}
        </div>
      </dialog>
    </div>
  );
};

export default About;
