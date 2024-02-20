import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [passwors, setPassword] = useState("");
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className=" text-3xl font-semibold text-center text-gray-300">
          Login
          <span className=" text-blue-500"> ChaMi</span>
        </h1>
        <form>
          <div>
            <label htmlFor="" className=" label p-2">
              <span className=" text-white text-base label-text">Username</span>
            </label>
            <input
              type="text"
              value={username}
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-zinc-300 placeholder:text-gray-500 text-gray-900 input input-bordered h-10"
            />
          </div>
          <div>
            <label htmlFor="Username" className=" label p-2">
              <span className=" text-white text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter password"
              className="w-full bg-zinc-300 placeholder:text-gray-500 text-gray-900 input input-bordered h-10"
            />
          </div>
          <Link
            to="/signup"
            className=" text-gray-200 text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have and account?
          </Link>
          <div>
            <button className=" btn btn-block btn-sm mt-2 bg-zinc-300 hover:bg-[#66aae2] hover:text-white border-none text-[#3297ea]">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
