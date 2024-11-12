import React from "react";

export const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 flex flex-col justify-center items-center py-20">
      <h2 className="mb-8 font-semibold text-2xl">Contact Us</h2>
      <form action="" className="flex flex-col space-y-4 w-full md:w-[60%] lg:w-[40%]">
        <input
          type="text"
          placeholder="Enter Your Username"
          name="username"
          className="p-2 bg-[#000] text-white border rounded-md focus:outline-none"
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          className="p-2 bg-[#000] text-white border rounded-md focus:outline-none"
        />
        <textarea
          className="p-2 bg-[#000] text-white rounded-md border focus:outline-none"
          name="text"
          placeholder="Enter Your Message"
          autoComplete="off"
          rows={8}
        ></textarea>
        <button className="border rounded-xl p-2 bg-[#2a2a2a] text-white hover:bg-[#000] transition duration-300">
          Send
        </button>
      </form>
    </div>
  );
};
