import React, { useState } from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/icon-menu.svg";
import avatar from "../assets/image-avatar.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Cart from "./Cart";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const toggleCartVisibility = () => {
    setShowCart(!showCart);
  };
  return (
    <div className="w-full">
      <div className="w-10/12 mx-auto flex flex-row mt-8 gap-6 md:border-b-2 md:border-grayishBlue items-center h-16">
        <div onClick={handleNav} className="md:hidden z-30">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <div className="md:h-16 md:w-2/12">
          <img src={logo} alt="" />
        </div>
        <div className="w-6/12 hidden md:block">
          <ul className="flex flex-row gap-6 items-center">
            <li className="h-16 hover:border-b-4 border-orange">
              <a href="/">Collections</a>
            </li>
            <li className="h-16 hover:border-b-4 border-orange">
              <a href="/">Men</a>
            </li>
            <li className="h-16 hover:border-b-4 border-orange">
              <a href="/">Women</a>
            </li>
            <li className="h-16 hover:border-b-4 border-orange">
              <a href="/">About</a>
            </li>
            <li className="h-16 hover:border-b-4 border-orange">
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>

        <div className="h-16 w-4/12  relative">
          <div className="flex flex-row gap-8 justify-end items-center">
            <AiOutlineShoppingCart size={28} onClick={toggleCartVisibility} />
            <img
              onClick={toggleCartVisibility}
              src={avatar}
              alt=""
              className="border-2 w-10 h-10 border-orange rounded-full"
            />
          </div>

          {showCart && <Cart />}
        </div>
      </div>
      {/*start mobile menu*/}
      <div
        className={
          nav
            ? "md:hidden w-2/3 bg-white z-20 fixed h-full top-[0px] left-[0px] ease-in duration-500"
            : "md:hidden w-2/3 bg-white z-20 fixed h-full top-[0px] left-[-100%] ease-in duration-500"
        }
      >
        <div className="p-10 flex flex-col gap-6 mt-20">
          <ul className="flex flex-col gap-4">
            <li>
              <a>Collections</a>
            </li>
            <li>
              <a>Men</a>
            </li>
            <li>
              <a>Women</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden w-full inset-0 bg-black bg-opacity-70 z-10 fixed h-full ease-in-out duration-500"
            : "md:hidden w-full inset-0 bg-black bg-opacity-0 z-10 fixed h-full ease-in-out duration-500 hidden"
        }
      ></div>
      {/*end mobile menu*/}
    </div>
  );
};

export default Navbar;
