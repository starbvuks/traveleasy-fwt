import React from "react";

const Landing = () => {
  return (
    <div className="bg-slate-500 text-slate-100 font-medium h-screen">
      <div className="flex w-full justify-between pl-10">
        <div className="flex flex-col ml-8">
          <div className="flex flex-col ">
            <span className="text-5xl mt-24 ">Find Locations</span>
            <span className="text-5xl mt-4 ">Book</span>
            <span className="text-6xl font-bold text-slate-800 mt-4">
              It's That Easy
            </span>
          </div>
          <button className="button bg-slate-800 rounded-lg w-1/3 mt-9 py-1.5">
            Register
          </button>
          <div className="mt-48 animate-bounce">
            <span className="text-3xl">Contact us below</span>
          </div>
        </div>
        <img
          src="img/vacay.jpeg"
          alt="vacay"
          className="w-3/5 h-screen object-cover bg-left "
        />
      </div>
    </div>
  );
};

export default Landing;
