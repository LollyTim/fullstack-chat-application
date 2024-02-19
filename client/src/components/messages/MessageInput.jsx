import React from "react";
import { BiSolidSend } from "react-icons/bi";

const MessageInput = () => {
  return (
    <form className="px-4 my-4">
      <div className="w-ful relative">
        <input
          type="text"
          placeholder="Send a message"
          className="border  text-lg rounded-lg w-full bg-zinc-300 text-gray-700"
        />
        <button
          type="submit"
          className=" absolute end-0 inset-y-0 text-[100] text-[#3e7eb2] flex items-center pe-3 z-50"
        >
          <BiSolidSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
