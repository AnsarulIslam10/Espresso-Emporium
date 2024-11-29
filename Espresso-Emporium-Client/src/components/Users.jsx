import React, { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);
  const handleUserDelete = id =>{
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
        fetch(`http://localhost:5000/users/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.deletedCount > 0){
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success"
            });
            const remainingUsers = users.filter(user => user._id !== id)
            setUsers(remainingUsers)
          }
        })
      }
    });
  }
  return (
    <div className="max-w-7xl px-2 mx-auto">
      <h2 className="text-3xl">Users: {users.length}</h2>
      <div className="overflow-x-auto bg-[#F4F3F0] p-10 mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td className="flex gap-3 text-amber-600">
                   <button><FaPen/></button>
                    <button onClick={()=> handleUserDelete(user._id)}><FaTrash/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
