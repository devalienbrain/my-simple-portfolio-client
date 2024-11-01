import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { Button, Tooltip } from "@material-tailwind/react";

const JoinWith = () => {
  // Github & Google Login Starts
  const { loginGithub, loginGoogle, user, logOut } = useContext(AuthContext);
  const handleGoogleLogIn = () => {
    console.log("ki?");
    loginGoogle().then((result) => {
      toast.success("You Are Successfully Logged In");
      setShowJoinButton(false);
    });
  };

  const handleGithubLogin = () =>
    loginGithub()
      .then((res) => {
        toast.success("You Are Successfuly Logged In");
        setShowJoinButton(false);
      })
      .catch((err) => console.log(err));

  // Github & Google Login Ends

  // Modal starts
  const [showJoinButton, setShowJoinButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down a certain amount (e.g., 100 pixels)
      if (window.scrollY > 100) {
        setShowJoinButton(true);
      } else {
        setShowJoinButton(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Modal ends
  return (
    <>
      <ToastContainer></ToastContainer>

      {showJoinButton && (
        <button
          className="hover:underline"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          {user ? (
            <Tooltip
              content="Click to logout"
              placement="right"
              className="z-50 bg-white/0 text-red-500/50 animate-bounce"
            >
              <Button
                onClick={() => {
                  logOut();
                  stopPropagation();
                }}
                className="text-semibold text-base bg-red-900/5 text-green-600 animate-bounce flex justify-start items-center"
              >
                Say GoodBye !
              </Button>
            </Tooltip>
          ) : (
            <span>Join</span>
          )}
        </button>
      )}
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box bg-slate-950 text-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="absolute right-2 top-2">✕</button>
          </form>

          <div className="flex justify-center items-center text-center">
            <div className="flex flex-col gap-3">
              <div>Login With</div>
              <div className="mx-auto font-semibold text-center w-full border rounded-lg">
                <button
                  onClick={handleGoogleLogIn}
                  className="px-5 py-2 font-bold flex justify-center items-center gap-3"
                >
                  <FcGoogle></FcGoogle>
                  <span className="hover:text-blue-500">Google</span>
                </button>
              </div>
              <div className="mx-auto font-semibold text-center rounded-lg">
                <button
                  onClick={handleGithubLogin}
                  className="px-5 py-2 border font-black rounded-lg flex justify-center items-center gap-3"
                >
                  <FaGithub></FaGithub>
                  <span className="hover:text-green-600">Github</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
      <div>
        {user ? (
          <Tooltip
            content="Click to logout"
            placement="right"
            className="z-50 bg-white/0 text-red-500/50 animate-bounce"
          >
            <Button
              onClick={() => {
                logOut();
                stopPropagation();
              }}
              className="text-semibold text-base bg-red-900/5 text-green-600 animate-bounce flex justify-start items-center"
            >
              Say GoodBye !
            </Button>
          </Tooltip>
        ) : (
          <span
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Join
          </span>
        )}
      </div>
    </>
  );
};

export default JoinWith;
