import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { _id, name, photo, chef, supplier, taste, category, details } = coffee;

  return (
    <div className="flex flex-col items-center justify-center py-10">
    <div className="w-full max-w-4xl mb-12">
      <Link to={"/"}>
        <button className="flex text-amber-900 items-center gap-2 self-start text-3xl font-ranch" style={{ textShadow: "#1B1A1A 1px 0 10px" }}>
          <FaArrowLeft /> Back To Home
        </button>
      </Link>
    </div>
    <div className="bg-[#F4F3F0] shadow-xl rounded-lg p-8 w-full max-w-4xl">

      {/* form */}
      <div className="flex items-center justify-center bg-[#F4F3F0] ">
      <div>
          <img src={photo} alt="" />
        </div>
        <div className="max-w-sm">
          <h2 className="text-amber-900 font-ranch text-2xl" style={{ textShadow: "#1B1A1A 1px 0 10px" }}>Niceties</h2>

          <p className="text-gray-500">
            <span className="font-semibold text-black">Name: </span>
            {name}
          </p>
          <p className="text-gray-500">
            <span className="font-semibold text-black">Chef: </span>
            {chef}
          </p>
          <p className="text-gray-500">
            <span className="font-semibold text-black">Supplier: </span>
            {supplier}
          </p>
          <p className="text-gray-500">
            <span className="font-semibold text-black">Taste: </span>
            {taste}
          </p>
          <p className="text-gray-500">
            <span className="font-semibold text-black">Category: </span>
            {category}
          </p>
          <p className="text-gray-500">
            <span className="font-semibold text-black">Details: </span>
            {details}
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CoffeeDetails;
