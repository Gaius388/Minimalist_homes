import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import { BsFillPrinterFill } from "react-icons/bs";
import {
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaGooglePlusG,
  FaPinterest,
  FaRss,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className=" border-2 border-transparent border-t-orange-500 md:mx-24 mx-8 my-12">
      <div className="grid md:grid-cols-2 py-12">
        <h1 className="self-center md:text-5xl text-3xl md:font-bold md:text-left text-center">
          Logo
        </h1>
        <div className="text-orange-500 text-sm ">
          <div className="w-4/6 grid grid-cols-2 gap-y-3 mb-4 mx-auto mt-4">
            <div className="flex gap-1 col-span-2 items-center">
              <IoLocationSharp />
              <p className="text-xs text-black">
                345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <MdLocalPhone />
              <p className="text-xs text-black">(123) 456-7890</p>
            </div>
            <div className="flex gap-1 ml-auto items-center">
              <BsFillPrinterFill />
              <p className="text-xs text-black">(123) 456-7890</p>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <small>Social media</small>
            <ImFacebook2 />
            <FaTwitter />
            <FaLinkedinIn />
            <FaYoutube />
            <FaInstagram />
            <FaGooglePlusG />
            <FaPinterest />
            <FaRss />
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col text-xs justify-between w-5/6 mt-6 border-2 border-transparent border-t-gray-100 pt-5 mx-auto">
        <div className="list-none flex uppercase gap-5 text-xs mb-4">
          <li>About us</li>
          <li>contact us</li>
          <li>help</li>
          <li>privacy policy</li>
          <li>Disclaimer</li>
        </div>
        <p className="text-center">Copyright © 2020 Minimum living cost. All rights reserved</p>
      </div>
    </section>
  );
};

export default Contact;
