import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Button, Tooltip } from "@material-tailwind/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import devIcon from "/Resources/icon-developer.gif";

const LogOutUser = () => {
  const { loginGithub, loginGoogle, user, logOut } = useContext(AuthContext);
  const handleGoogleLogIn = () => {
    console.log("ki?");
    loginGoogle().then((result) => {
      toast.success("You Are Successfully Logged In");
    });
  };

  const handleGithubLogin = () =>
    loginGithub()
      .then((res) => {
        toast.success("You Are Successfuly Logged In");
      })
      .catch((err) => console.log(err));

  return (
    <div className="shadow-2xl w-full bg-white text-black">
      <ToastContainer />
      {/* <div className="flex justify-start items-center">
        <img src={devIcon} alt="Developer" />
        <span className="font-black text-lg">Hassan</span>
      </div> */}
      {user ? (
        <div className="flex flex-col lg:flex-row gap-3 justify-end items-center">
          <div className="flex-1 flex justify-start">
            <div className="flex justify-start items-center">
              <img src={devIcon} alt="Developer" />
              <span className="font-black text-lg">Hassan</span>
            </div>
            {/* <span className="text-lime-800 font-bold">Welcome on board!</span> */}
          </div>
          <Tooltip
            content="Click to logout"
            placement="right"
            className="z-50 bg-white/0 text-red-500/50 animate-bounce"
          >
            <Button
              onClick={() => logOut()}
              className="text-semibold text-sm bg-white/5 text-blue-600 animate-bounce flex justify-start items-center"
            >
              Say GoodBye !
            </Button>
          </Tooltip>

          <div className="flex-1 flex flex-col-reverse lg:flex-row justify-center lg:justify-end items-center gap-3">
            <div className="flex flex-col text-center lg:text-right text-sm">
              <span className="font-semibold">{user.displayName}</span>
              <span>{user.email}</span>
            </div>
            <img
              src={user.photoURL}
              alt="user-photo"
              className="w-7 rounded-full"
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center gap-5 p-1 ">
          <div className="flex justify-start items-center">
            <img src={devIcon} alt="Developer" />
            <span className="font-black text-lg">Hassan</span>
          </div>
          <div className="flex-1 flex justify-end animate-pulse">
            {/* <span>Who is browsing?</span> */}
            {/* JoinWith Modal & ui starts */}
            <span
              className="hover:underline"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Please join
            </span>
          </div>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-white text-black">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="absolute right-2 top-2">✕</button>
              </form>

              <div className="flex justify-center items-center text-center">
                <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
                  <div>Login With</div>
                  <div className="mx-auto font-semibold text-center border rounded-2xl">
                    <button
                      onClick={handleGoogleLogIn}
                      className="px-4 py-2 font-bold flex justify-center items-center gap-3"
                    >
                      <FcGoogle></FcGoogle>
                      <span className="hover:text-blue-800">Google</span>
                    </button>
                  </div>
                  <div className="mx-auto font-semibold text-center rounded-lg">
                    <button
                      onClick={handleGithubLogin}
                      className="px-4 py-2 border font-black rounded-2xl flex justify-center items-center gap-3"
                    >
                      <FaGithub></FaGithub>
                      <span className="hover:text-green-800">Github</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </dialog>

          {/* JoinWith Modal & ui ends */}
        </div>
      )}
    </div>
  );
};

export default LogOutUser;
