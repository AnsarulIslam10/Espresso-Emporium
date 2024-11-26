import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const {_id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = { name, chef, supplier, taste, category, details, photo };
    console.log(updatedCoffee);

    // send data to server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-4xl mb-12">
        <Link to={"/"}>
          <button className="flex items-center gap-2 self-start text-3xl font-ranch font-semibold">
            <FaArrowLeft /> Back To Home
          </button>
        </Link>
      </div>
      <div className="bg-[#F4F3F0] shadow-xl rounded-lg p-8 w-full max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-700 mb-2 font-ranch">
            Update Existing Coffee Details
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Fill in the form below to update the coffee details. Provide all the
            required information for accuracy.
          </p>
        </div>

        {/* form */}
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                defaultValue={name}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <input
                type="text"
                name="chef"
                placeholder="Enter coffee chef"
                defaultValue={chef}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                defaultValue={supplier}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                defaultValue={taste}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                defaultValue={category}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                defaultValue={details}
                className="input input-bordered w-full"
              />
            </div>
            <div className="col-span-1 sm:col-span-2">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                defaultValue={photo}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-amber-500 text-white w-full py-3 rounded-md hover:bg-amber-600 transition"
          >
            Update Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
