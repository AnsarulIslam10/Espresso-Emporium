import React from 'react';

const Navbar = () => {
    return (
        <div className='text-white text-center flex justify-center items-center text-4xl font-ranch' style={{
            backgroundImage: "url('https://i.ibb.co/G0yZnXc/nav.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "120px", // Adjust height as needed
        }}>
           <img className='w-[75px] mr-1' src="https://i.ibb.co.com/Kz4S2F8/logo1.png" alt="" /> Espresso Emporium
        </div>
    );
};

export default Navbar;