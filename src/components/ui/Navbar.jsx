import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IconCart } from "../../icons/IconCart";

export default function Navbar() {
  const activ = ({ isActive }) => ({ color: isActive ? "orange" : null });
  const navigate = useNavigate();
  return (
    <header className="w-full h-[100px] flex justify-center bg-[#1b7688bb]">
      <nav className="w-full h-full flex justify-around items-center text-white">
        <div className="text-3xl font-bold tracking-widest">
          <NavLink
            to="/"
            className="hover:text-orange-600 transition-all cursor-pointer"
          >
            H & G MODA
            <span>|</span>
            <span className="text-orange-600">@</span>
          </NavLink>
        </div>
        <ul className="flex gap-5">
          <li>
            <NavLink to="/" style={activ}>
              Home
            </NavLink>
          </li>
          <li className="relative inline-block hover:block">
            <NavLink to="/shop" style={activ}>
              Shop
            </NavLink>
            <ul className="absolute left-0 top-[30px] bg-cyan-500 none hover:block">
              <li className=" relative">
                <NavLink>Woman's</NavLink>
                <ul className="absolute right-0 none hover:block">
                  <li>
                    <NavLink>Bags</NavLink>
                  </li>
                  <li>
                    <NavLink>Shoes</NavLink>
                  </li>
                  <li>
                    <NavLink>Accessorize</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink>Men's</NavLink>
                <ul className="absolute none hover:block">
                  <li>
                    <NavLink>Bags</NavLink>
                  </li>
                  <li>
                    <NavLink>Shoes</NavLink>{" "}
                  </li>
                  <li>
                    <NavLink>Accessorize</NavLink>{" "}
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/contact" style={activ}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div>
          <button
            className=" flex justify-center items-center gap-3 py-3 px-8 rounded-md uppercase bg-orange-600"
            onClick={() => navigate("/shop")}
          >
            <IconCart />
            Purchase now
          </button>
        </div>
      </nav>
    </header>
  );
}
