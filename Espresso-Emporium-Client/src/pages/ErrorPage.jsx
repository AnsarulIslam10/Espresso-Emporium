import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <Link to={"/"}>
          <button
            className="flex items-center gap-2 self-start text-3xl font-ranch text-amber-900"
            style={{ textShadow: "#1B1A1A 1px 0 10px" }}
          >
            <FaArrowLeft /> Back To Home
          </button>
        <img src="https://i.ibb.co.com/dQxbPGR/404.gif" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
