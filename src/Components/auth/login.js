import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import generateUrl from "../admin/utils/urlGenerate";
import useLogout from "../../hooks/useLogout";
import { CrossIcon } from "../admin/assets/constants";

const Login = ({ unauthorizedUserSourcelink, loginModal, setLoginModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const { logutOutHandler } = useLogout();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const login_info = { email, password };
    setIsPending(true);
    try {
      const api = "api/website/login/";
      const subdomain = await generateUrl();
      const response = await fetch(subdomain + api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(login_info),
      });

      if (!response.ok) {
        if (response.status === 401) {
          await logutOutHandler();
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      setIsPending(false);

      localStorage.setItem("access_token", data.token.access);
      localStorage.setItem("refresh_token", data.token.refresh);
      localStorage.setItem("userdata", JSON.stringify(data.user));

      if (unauthorizedUserSourcelink) {
        window.open(unauthorizedUserSourcelink, "_blank");
      }

      // window.location.reload();
      if (data?.user?.is_admin) {
        navigate("/admin");
      } else {
        navigate("/home");
      }
      setLoginModal(false);
    } catch (err) {
      console.log("-------lgoin error---------- :", err.message);
      if (err.name === "AbortError") {
      } else {
        setIsPending(false);
        setError(err.message);
      }
    }
  };

  return (
    <div className='flex z-50 justify-center sticky bg-black/60 backdrop-blur-sm h-lvh w-full bottom-0 left-0 items-center '>
      <div className='w-full max-w-md relative'>
        <div
          onClick={() => setLoginModal(false)}
          className='absolute -top-8 right-0 scale-150 cursor-pointer brightness-200'
        >
          <CrossIcon />{" "}
        </div>
        <div className='bg-white rounded-md shadow-md p-8'>
          <div className='text-center mb-4'>
            {/* <img src="assets/images/logo.png" alt="Logo" className="mx-auto" /> */}
            <h1>Remote Link</h1>
          </div>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='form-group'>
              <label className='block'>Email</label>
              <input
                type='text'
                placeholder='Enter Your Email'
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className='w-full border border-gray-300 rounded p-2'
              />
            </div>
            <div className='form-group'>
              <label className='block'>Password</label>
              <input
                type='password'
                placeholder='Enter Your Password'
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className='w-full border border-gray-300 rounded p-2'
              />
            </div>
            <div className='form-group'></div>
            <div className='form-group'>
              {error && <p className='text-red-500'>{error}</p>}
            </div>
            <div className='form-group'>
              {!isPending && (
                <button
                  type='submit'
                  className='bg-blue-500 text-white p-2 rounded w-full'
                >
                  Login
                </button>
              )}
              {isPending && (
                <button
                  type='submit'
                  disabled
                  className='bg-gray-400 text-white p-2 rounded w-full'
                >
                  Checking...
                </button>
              )}
            </div>
          </form>
          <p className='text-center'>
            Forgot Password?{" "}
            <Link href='#' className='text-blue-500'>
              Click Here.
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
