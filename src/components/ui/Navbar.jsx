import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { IconCart } from "../../icons/IconCart";

export default function Navbar() {
  const activ = ({ isActive }) => ({ color: isActive ? "orange" : null });
  const navigate = useNavigate();

  return (
    <header className=" header w-full h-[80px] sticky top-0 bg-purple-600  flex justify-center">
      <nav className="w-full h-full relative flex justify-around items-center text-white">
        <div className="text-3xl font-bold tracking-widest">
          <NavLink
            to="/"
            className="hover:text-orange-500 transition-all cursor-pointer"
          >
            H & G MODA
            <span>|</span>
            <span className="text-orange-500">@</span>
          </NavLink>
        </div>
        <ul className=" h-full flex bg-purple-600 gap-5 text-xl z-10">
          <li className=" h-full flex items-center justify-center">
            <NavLink to="/" style={activ}>
              Home
            </NavLink>
          </li>
          <li className=" drop_list">
            <NavLink to="/shop" style={activ}>
              Shop
            </NavLink>
            <ul className="dropdown_menu">
              <li className="dropdown_list">
                <NavLink to="/shop/womens">Women's</NavLink>
              </li>
              <li className="dropdown_list">
                <NavLink to="/shop/mens">Men's</NavLink>
              </li>
            </ul>
          </li>
          <li className=" h-full flex items-center justify-center">
            <NavLink to="/contact" style={activ}>
              Contact
            </NavLink>
          </li>
          <li className=" h-full flex  items-center justify-center">
            <NavLink to="/cart" style={activ} >
              Cart
            </NavLink>
          </li>
        </ul>
        <div>
          <button
            className=" flex justify-center items-center gap-3 py-3 px-8 rounded-md uppercase bg-orange-600 hover:bg-white hover:text-orange-500 transition-all"
            onClick={() => navigate("/cart ")}
          >
            <IconCart />
            Purchase now
          </button>
        </div>
      </nav>
    </header>
  );
}
