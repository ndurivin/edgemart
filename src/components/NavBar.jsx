import React from "react";

// import { CgLogIn } from "react-icons/cg";

const NavBar = () => {
  return (
    <>
      <nav className="w-full bg-blue-800 h-20 items-center">
        <div className="w-[90%] flex text-white justify-between">
          <h1>EDGEMART</h1>
          <ul className="flex pt-6">
            <li className="px-5">
              {" "}
              <a href="">Home</a>{" "}
            </li>
            <li className="px-5">About</li>
            <li className="px-5">Services</li>
            <li className="px-5">Contact</li>
          </ul>
          <div className="pt-6 w-[20px]">
            <button className="p-1 rounded outline hover:outline-blue-400 w-20 font-bold">
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
