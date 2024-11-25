import React from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa6";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, photo, chef } = coffee;
  return (
    <div className="flex items-center justify-between gap-6 border p-8">
      <div>
        <img className="h-52 object-contain" src={photo} alt="" />
      </div>
      <div className="flex justify-between items-center w-full">
        <div>
          <p>
            <span className="font-semibold">Name: </span>
            {name}
          </p>
          <p>
            <span className="font-semibold">Chef: </span>
            {chef}
          </p>
          <p>
            <span className="font-semibold">Price: </span>$69
          </p>
        </div>
        <div className="space-y-2">
          <div className="p-2 text-white text-sm cursor-pointer bg-[#D2B48C] rounded-md">
            <FaEye />
          </div>
          <div className="p-2 text-white text-sm cursor-pointer bg-[#3C393B] rounded-md">
            <FaPen />
          </div>
          <div className="p-2 text-white text-sm cursor-pointer bg-[#EA4744] rounded-md">
            <FaTrash />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
