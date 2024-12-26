import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const SecretLoginPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    if (password === "000") {
      // Replace "yourSecretCode" with the actual secret
      navigate("/dashboard");
    } else {
      setError("Access Denied. Incorrect Password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white font-mono">
      <div className="w-full max-w-md p-8 space-y-8 border border-gray-700 rounded-md shadow-lg">
        <h2 className="text-center text-3xl font-extrabold">
          Restricted Access
        </h2>
        <p className="text-center text-gray-400 text-sm">
          This is a private portal intended solely for admin access.
          Unauthorized entry is prohibited. If you find yourself here, please
          note that this area requires a secure password.
        </p>
        <p className="text-center text-gray-500 text-xs italic mt-2">
          Access beyond this point is reserved. Trespassers beware—no hacking
          skills can bypass this gateway.
        </p>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleEmailLogin} className="space-y-6">
          <div className="form-control">
            <label className="block mb-1 text-gray-400">Secret Code</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter the secret code"
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:border-cyan-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="absolute right-2 top-2 cursor-pointer text-gray-500 hover:text-cyan-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
          </div>

          <div className="form-control mt-4">
            <button className="btn w-full bg-cyan-600 text-white font-semibold py-2 rounded-md hover:bg-cyan-700 transition duration-200">
              Access Admin Portal
            </button>
          </div>
        </form>

        <p className="text-center text-gray-400 text-xs mt-4">
          <Link to="/" className="text-cyan-400 hover:underline">
            Back to safety
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SecretLoginPage;
