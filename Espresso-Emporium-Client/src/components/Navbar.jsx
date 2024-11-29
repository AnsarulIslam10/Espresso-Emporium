import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="text-white px-2 text-4xl font-ranch"
      style={{
        backgroundImage: "url('https://i.ibb.co/G0yZnXc/nav.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "120px", // Adjust height as needed
      }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to={'/'}>
          <div className="flex mt-3 cursor-pointer items-center">
            <img
              className="w-[75px] mr-1"
              src="https://i.ibb.co.com/Kz4S2F8/logo1.png"
              alt=""
            />
            <h2>Espresso Emporium</h2>
          </div>
        </Link>
        <div className="mt-3 space-x-2">
          <Link
            to={"/users"}
            className="btn bg-[#E3B577] rounded-none border-none px-5 text-lg"
          >
            Users
          </Link>
          <Link
            to={"signin"}
            className="btn bg-[#E3B577] rounded-none border-none px-5 text-lg"
          >
            Sign In
          </Link>
          <Link
            to={"signup"}
            className="btn bg-[#E3B577] rounded-none border-none px-5 text-lg"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
