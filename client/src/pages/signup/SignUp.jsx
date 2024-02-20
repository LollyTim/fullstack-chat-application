import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignUp();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    // console.log(inputs);
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className=" text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className=" text-blue-500">ChaMi</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName" className=" label p-2">
              <span className=" text-white text-base label-text">Fullname</span>
            </label>
            <input
              type="text"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
              placeholder="Enter fullName"
              className="w-full bg-zinc-300 placeholder:text-gray-500 text-gray-900 input input-bordered h-10"
            />
          </div>
          <div>
            <label htmlFor="username" className=" label p-2">
              <span className=" text-white text-base label-text">Username</span>
            </label>
            <input
              type="text"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              placeholder="Enter Username"
              className="w-full bg-zinc-300 placeholder:text-gray-500 text-gray-900 input input-bordered h-10"
            />
          </div>
          <div>
            <label htmlFor="password" className=" label p-2">
              <span className=" text-white text-base label-text">Password</span>
            </label>
            <input
              type="password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
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
              type="password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              placeholder="Enter password again"
              className="w-full bg-zinc-300 placeholder:text-gray-500 text-gray-900 input input-bordered h-10"
            />
          </div>
          {/* grnder check box goes here  */}
          <GenderCheckBox
            selectedGender={inputs.gender}
            onChechboxChange={handleCheckboxChange}
          />

          <Link
            to="/login"
            clLinkssName=" hover:underline hover:text-blue-600 text-gray-200  text-sm  mt-2 inline-block"
          >
            Already have and an account?
          </Link>
          <div>
            <button
              className=" btn btn-block btn-sm mt-2 bg-zinc-300 hover:bg-[#66aae2] hover:text-white border-none text-[#3297ea]"
              disabled={loading}
            >
              {loading ? (
                <span className=" loading loading-spinner"></span>
              ) : (
                "Sighip"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
