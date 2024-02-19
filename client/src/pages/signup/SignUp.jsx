import React from "react";
import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className=" text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className=" text-blue-500">ChaMi</span>
        </h1>
        <form>
          <div>
            <label htmlFor="Fullname" className=" label p-2">
              <span className=" text-white text-base label-text">Fullname</span>
            </label>
            <input
              type="text"
              placeholder="Enter fullname"
              className="w-full bg-zinc-300 placeholder:text-gray-500 text-gray-900 input input-bordered h-10"
            />
          </div>
          <div>
            <label htmlFor="username" className=" label p-2">
              <span className=" text-white text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full bg-zinc-300 placeholder:text-gray-500 text-gray-900 input input-bordered h-10"
            />
          </div>
          <div>
            <label htmlFor="password" className=" label p-2">
              <span className=" text-white text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full bg-zinc-300 placeholder:text-gray-500 text-gray-900 input input-bordered h-10"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className=" label p-2">
              <span className=" text-white text-base label-text">
                Confirm Password
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter password again"
              className="w-full bg-zinc-300 placeholder:text-gray-500 text-gray-900 input input-bordered h-10"
            />
          </div>
          {/* grnder check box goes here  */}
          <GenderCheckBox />

          <a
            href=""
            className=" text-gray-200 text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have and an account?
          </a>
          <div>
            <button className=" btn btn-block btn-sm mt-2 bg-zinc-300 hover:bg-[#66aae2] hover:text-white border-none text-[#3297ea]">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
