import React from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, photo, chef } = coffee;

  const handleDelete = id =>{
    console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        

        fetch(`http://localhost:5000/coffee/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.deletedCount > 0){
            Swal.fire({
              title: "Deleted!",
              text: "Your coffee has been deleted.",
              icon: "success"
            });
            const remaining = coffees.filter(cof => cof._id !== _id)
            setCoffees(remaining)
          }
        })
      }
    });
  }

  return (
    <div className="flex items-center justify-between gap-6 border rounded-xl bg-[#F5F4F1] text-gray-500 border-none p-8">
      <div>
        <img className="h-52 object-contain" src={photo} alt="" />
      </div>
      <div className="flex justify-between items-center w-full">
        <div>
          <p>
            <span className="font-semibold text-black">Name: </span>
            {name}
          </p>
          <p>
            <span className="font-semibold text-black">Chef: </span>
            {chef}
          </p>
          <p>
            <span className="font-semibold text-black">Price: </span>$69
          </p>
        </div>
        <div className="space-y-2 flex flex-col">
          <Link to={`coffeeDetails/${_id}`} className="p-2 text-white text-sm cursor-pointer bg-[#D2B48C] rounded-md">
            <FaEye />
          </Link>
          <Link to={`updateCoffee/${_id}`} className="p-2 text-white text-sm cursor-pointer bg-[#3C393B] rounded-md">
            <FaPen />
          </Link>
          <button onClick={()=>handleDelete(_id)} className="p-2 text-white text-sm cursor-pointer bg-[#EA4744] rounded-md">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
