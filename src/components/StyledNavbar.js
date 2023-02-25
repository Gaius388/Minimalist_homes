import React, { useState } from "react";
import logo from "../images/logo 1.png";
import { NavLink } from "react-router-dom";
import { GrMenu, GrClose } from "react-icons/gr";

const StyledNavbar = () => {
  const [showBar, setShowBar] = useState(false);
  return (
    <>
      <section className="flex justify-between items-center pt-8 md:px-20 px-8 border-b bg-[#797ba6] relative">
        <img src={logo} alt="logo" className="block pb-3" />
        <GrMenu
          className="text-4xl ml-auto cursor-pointer md:hidden"
          onClick={() => setShowBar(true)}
        />
        <div>
          <ul className="hidden md:flex text-white text-2xl mr-24 space-x-16">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-b-2 pb-5" : null
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="properties"
              className={({ isActive }) =>
                isActive ? "border-b-2 pb-5" : null
              }
            >
              <li>Properties</li>
            </NavLink>
            <NavLink
              to="agent"
              className={({ isActive }) =>
                isActive ? "border-b-2 pb-5" : null
              }
            >
              <li>Agents</li>
            </NavLink>
            <NavLink
              to="blog"
              className={({ isActive }) =>
                isActive ? "border-b-2 pb-5" : null
              }
            >
              <li>Blog</li>
            </NavLink>
          </ul>
        </div>
        <nav className={showBar ? "grid md:hidden" : "hidden"}>
          <div className="absolute w-screen h-screen left-0 top-0 z-30 bg-[#797ba6]">
            <button onClick={() => setShowBar(false)}>
              <GrClose className="absolute right-0 mr-8 mt-8 text-4xl" />
            </button>
            <ul className="text-white absolute w-screen h-screen flex flex-col items-center mt-12 ">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "border-b-2" : null)}
              >
                <li className="my-4 text-2xl" onClick={() => setShowBar(false)}>
                  Home
                </li>
              </NavLink>
              <NavLink
                to="properties"
                className={({ isActive }) => (isActive ? "border-b-2" : null)}
              >
                <li className="my-4 text-2xl" onClick={() => setShowBar(false)}>
                  Properties
                </li>
              </NavLink>
              <NavLink
                to="agent"
                className={({ isActive }) => (isActive ? "border-b-2" : null)}
              >
                <li className="my-4 text-2xl" onClick={() => setShowBar(false)}>
                  Agents
                </li>
              </NavLink>
              <NavLink
                to="blog"
                className={({ isActive }) => (isActive ? "border-b-2" : null)}
              >
                <li className="my-4 text-2xl" onClick={() => setShowBar(false)}>
                  Blog
                </li>
              </NavLink>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};

export default StyledNavbar;
