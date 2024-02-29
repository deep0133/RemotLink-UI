import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Service from "../Webservices/http";
const Login = () => {
  const services = new Service();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    var login_info = { email, password };
    setIsPending(true);

    try {
      const res = await services.post("api/website/login/", login_info);

      if (res.ok) {
        const data = await res.json();
        setIsPending(false);
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        navigate("/home");
      } else {
        throw new Error("Authentication Fail");
      }
    } catch (err) {
      if (err.name === "AbortError") {
      } else {
        setIsPending(false);
        setError(err.message);
        console.error(err);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-md shadow-md p-8">
          <div className="text-center mb-4">
            {/* <img src="assets/images/logo.png" alt="Logo" className="mx-auto" /> */}
            <h1>Remote Link</h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-group">
              <label className="block">Email</label>
              <input
                type="text"
                placeholder="Enter Your Email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div className="form-group">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div className="form-group"></div>
            <div className="form-group">
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <div className="form-group">
              {!isPending && (
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded w-full"
                >
                  Login
                </button>
              )}
              {isPending && (
                <button
                  type="submit"
                  disabled
                  className="bg-gray-400 text-white p-2 rounded w-full"
                >
                  Checking...
                </button>
              )}
            </div>
          </form>
          <p className="text-center">
            Forgot Password?{" "}
            <Link href="#" className="text-blue-500">
              Click Here.
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
