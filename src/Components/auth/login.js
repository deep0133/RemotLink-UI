import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ loginStatus }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    var login_info = { email, password };
    setIsPending(true);
    fetch("https://stage1.remotlink.com/api/websitehh/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login_info),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("Authentication Fail");
        }
      })
      .then((data) => {
        setIsPending(false);
        localStorage.setItem("access_token", data["access_token"]);

        localStorage.setItem("refresh_token", data["refresh_token"]);
        window.location.reload();
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          // console.log("Aborted Fetch");
        } else {
          setIsPending(false);
          setError(err.message);
          // console.log(err.message);
        }
      });
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
            <div className="form-group">
              {/* <label className="checkbox-container">
                Remember Me
                <input type="checkbox" className="ml-2" />
                <span className="checkmark"></span>
              </label> */}
            </div>
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
            <a href="#" className="text-blue-500">
              Click Here.
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
