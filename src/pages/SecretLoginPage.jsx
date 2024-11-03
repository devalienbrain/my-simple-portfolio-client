import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const SecretLoginPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null); // State to handle error messages

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError(null); // Reset any previous errors
    navigate("/dashboard");
  };

  return (
    <div className="hero min-h-screen pt-10 font-semibold">
      <div className="card w-full max-w-xl ">
        <form className="card-body" onSubmit={handleEmailLogin}>
          <h1 className="text-4xl font-extrabold text-center mb-4">Login!</h1>

          {/* Display error message */}
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered w-full pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            <label className="label">
              <Link to="#" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-black text-white w-full">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SecretLoginPage;
