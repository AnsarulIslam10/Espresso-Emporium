import React from "react";

const Gallery = () => {
  return (
    <div className="mt-32 max-w-7xl mx-auto px-2">
      <div className="text-center mb-28">
        <p>Follow Us Now</p>
        <h2
          className="font-ranch text-5xl text-amber-900 "
          style={{ textShadow: "#1B1A1A 1px 0 10px" }}
        >
          Follow on Instagram
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <img src="https://i.ibb.co.com/d4H4sdR/Rectangle-12.png" alt="" />
        <img src="https://i.ibb.co.com/8zryFR8/Rectangle-16.png" alt="" />
        <img src="https://i.ibb.co.com/Jqnxj2x/Rectangle-13.png" alt="" />
        <img src="https://i.ibb.co.com/jwCbj6X/Rectangle-14.png" alt="" />
        <img src="https://i.ibb.co.com/qFMyTfC/Rectangle-15.png" alt="" />
        <img src="https://i.ibb.co.com/MhQXn5h/Rectangle-9.png" alt="" />
        <img src="https://i.ibb.co.com/HFpd3ST/Rectangle-10.png" alt="" />
        <img src="https://i.ibb.co.com/5Y7CxfS/Rectangle-11.png" alt="" />
      </div>
    </div>
  );
};

export default Gallery;
