import React from "react";

const Banner = () => {
  return (
    <div
      className="flex justify-around items-center"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/n8pDMZ8/3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "800px", // Adjust height as needed
      }}
    >
      <div></div>
      <div>
        <h2 className="font-ranch text-[55px] mb-3 text-white">Would you like a Cup of Delicious Coffee?</h2>
        <p className="text-gray-200 max-w-lg mb-3">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
        <button className="btn bg-[#E3B577] rounded-none border-none font-ranch">Learn More</button>
      </div>
    </div>
  );
};

export default Banner;
