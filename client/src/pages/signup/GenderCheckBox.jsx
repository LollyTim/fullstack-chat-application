import React from "react";

const GenderCheckBox = ({ selectedGender, onChechboxChange }) => {
  return (
    <div className=" flex gap-2">
      <div className=" form-control flex flex-row gap-1 items-center">
        <label
          htmlFor=""
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className=" text-white label-text">Male</span>
        </label>
        <input
          type="checkbox"
          onChange={() => onChechboxChange("male")}
          checked={selectedGender === "male"}
          className=" checkbox border-slate-900"
        />
      </div>
      <div className=" form-control gap-1 flex flex-row items-center">
        <label
          htmlFor=""
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className=" text-white label-text">Female</span>
        </label>
        <input
          type="checkbox"
          checked={selectedGender === "female"}
          onChange={() => onChechboxChange("female")}
          className=" checkbox border-slate-900"
        />
      </div>
    </div>
  );
};

export default GenderCheckBox;
