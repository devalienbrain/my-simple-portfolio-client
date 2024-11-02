import { Link } from "react-router-dom";
import { BiErrorAlt } from "react-icons/bi";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center text-left">
      <div className="flex flex-col space-y-11">
        <div className="bg-gradient-to-r from-cyan-600 via-cyan-400 to-blue-400 text-transparent bg-clip-text">
          <BiErrorAlt></BiErrorAlt>
          <p className="py-5">Oops..</p>
          Page Not Found!
        </div>
        <h2 className="text-5xl md:text-9xl font-black text-red-600">4 O 4</h2>
        <h1 className="text-xl font-bold text-red-500"> e r r o r !</h1>
        <Link to={"/"}>
          <div className="flex gap-2 text-sm bg-zinc-300/50 hover:bg-zinc-300/25 py-3 px-5 rounded-xl bg-gradient-to-r from-cyan-600 via-cyan-400 to-blue-400 text-white">
            <span className="text-sm font-bold">click to back home</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
