import React from "react";

const GenderCheckBox = () => {
  return (
    <div className=" flex gap-2">
      <div className=" form-control flex flex-row gap-1 items-center">
        <label htmlFor="" className={`label gap-2 cursor-pointer`}>
          <span className=" text-white label-text">Male</span>
        </label>
        <input type="checkbox" className=" checkbox border-slate-900" />
      </div>
      <div className=" form-control gap-1 flex flex-row items-center">
        <label htmlFor="" className={`label gap-2 cursor-pointer`}>
          <span className=" text-white label-text">Female</span>
        </label>
        <input type="checkbox" className=" checkbox border-slate-900" />
      </div>
    </div>
  );
};

export default GenderCheckBox;
