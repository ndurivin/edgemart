import React, { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full bg-white h-[80px] border-b">
      <div className="md:max-w-[1480px] max-w-[480px] m-auto w-full h-full flex justify-between items-center">
        <h1 className="font-bold h-[25px] text-[#008AD8]">
          <a href="/">DEV SOLUTIONS</a>
        </h1>
        <div className="hidden md:flex items-center">
          <ul className="flex gap-4">
            <li className="hover:text-[#008AD8] cursor-pointer">Home</li>
            <li className="hover:text-[#008AD8] cursor-pointer">About</li>
            <li className="hover:text-[#008AD8] cursor-pointer">Services</li>
            <li className="hover:text-[#008AD8] cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <button className="bg-[#008AD8] text-white px-5 py-2 gap-2 rounded-md font-bold items-center justify-between flex">
            <span className="pt-1">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            LOGIN
          </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {toggle ? (
            <ion-icon name="close"></ion-icon>
          ) : (
            <ion-icon name="menu"></ion-icon>
          )}

          {/* <ion-icon name="close"></ion-icon> */}
        </div>
      </div>

      <div
        className={
          toggle ? "absolute z-10 p-4 bg-white w-full px-5 md:hidden" : "hidden"
        }
      >
        <ul className="">
          <li className="p-4 hover:bg-[#008AD8] hover:text-white">Home</li>
          <li className="p-4 hover:bg-[#008AD8] hover:text-white">About</li>
          <li className="p-4 hover:bg-[#008AD8] hover:text-white">Services</li>
          <li className="p-4 hover:bg-[#008AD8] hover:text-white">Contact</li>
          <div>
            <button className="w-full my-4 bg-[#008AD8] text-white px-5 py-2 gap-2 rounded-md font-bold items-center justify-center flex hover:border border-[#008AD8] hover:text-[#008AD8] hover:bg-white">
              <span className="pt-1">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              LOGIN
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
