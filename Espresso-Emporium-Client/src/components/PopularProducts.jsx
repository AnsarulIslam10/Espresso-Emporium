import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { LuCoffee } from "react-icons/lu";

const PopularProducts = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="mt-32 max-w-7xl mx-auto px-2">
    <div className="text-center mb-28">
        <p>--- Sip & Savor ---</p>
        <h2 className="font-ranch text-5xl text-amber-900 " style={{textShadow: '#1B1A1A 1px 0 10px'}}>Our Popular Products</h2>
        <Link to={'addCoffee'} className="btn bg-[#E3B577] font-ranch border-2 border-black font-normal rounded-md text-white mt-4" style={{textShadow: '#1B1A1A 1px 0 10px'}}>Add Coffee<LuCoffee className="text-black"/></Link>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
