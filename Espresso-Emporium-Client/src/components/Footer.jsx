import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="mt-32" style={{
        backgroundImage: "url('https://i.ibb.co.com/yfWMFH8/13.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}>
      <footer className="py-12 max-w-7xl mx-auto px-2">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <div className="mb-4">
              <img
                src="https://i.ibb.co.com/Kz4S2F8/logo1.png"
                alt="Espresso Emporium Logo"
                className="w-12 h-12 mr-3"
              />
              <h2
                className="text-3xl text-amber-900 text-brown-700 font-ranch"
                style={{ textShadow: "#1B1A1A 1px 0 10px" }}
              >
                Espresso Emporium
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="text-3xl text-gray-800 hover:text-brown-600"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-3xl text-gray-800 hover:text-brown-600"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="text-3xl text-gray-800 hover:text-brown-600"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-3xl text-gray-800 hover:text-brown-600"
              >
                <FaLinkedin />
              </a>
            </div>
            <h2
              className="text-3xl text-amber-900 text-brown-700 font-ranch"
              style={{ textShadow: "#1B1A1A 1px 0 10px" }}
            >
              Get in Touch
            </h2>
            <div className="space-y-2 mt-3">
              <p className="flex items-center text-gray-700">
                <FaPhone className="text-xl mr-2" /> +88 01533 333 333
              </p>
              <p className="flex items-center text-gray-700">
                <IoMdMail className="text-xl mr-2" /> info@gmail.com
              </p>
              <p className="flex items-center text-gray-700">
                <FaLocationDot className="text-xl mr-2" /> 72, Wall Street, King
                Road, Dhaka
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-2xl font-ranch text-amber-900 text-brown-700 mb-4" style={{ textShadow: "#1B1A1A 1px 0 10px" }}>
              Connect with Us
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full border-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full border-none"
              />
              <textarea
                placeholder="Message"
                className="textarea textarea-bordered w-full border-none"
                rows="4"
                
              ></textarea>
              <button className="btn btn-outline rounded-full text-amber-900 font-ranch font-medium text-xl bg-brown-600 hover:bg-brown-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
