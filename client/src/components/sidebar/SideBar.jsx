import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const SideBar = () => {
  return (
    <div className="">
      <SearchInput />
      <div className=" divider px-3" />
      <Conversations />

      <LogoutButton />
    </div>
  );
};

export default SideBar;
