import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../components/Product";

export default function Shop() {
  const { shopProducts } = useSelector((state) => state.shop);

  return (
    <div className=" w-full h-full flex justify-center">
      <div className=" w-[300px] h-[500px] border-2 rounded-md px-10 mt-10 border-purple-600">
        <Link to="/cart">
          <FaShoppingCart className="w-10 h-10 mt-5 text-purple-600" />
        </Link>
        <p className="flex flex-col text-2xl text-purple-600 mt-3">
          CATEGORY
          <Link to="/shop/womens" className="text-xl text-orange-600 px-3">
            Women's
          </Link>
          <Link to="/shop/mens" className="text-xl text-orange-600 px-3">
            Men's
          </Link>
        </p>
        <p></p>
      </div>
      <div className=" w-[1000px] px-5 grid grid-cols-2 gap-x-5 ">
        {shopProducts?.map((item) => {
          return <Product key={item?.id} item={item}/>;
        })}
      </div>
    </div>
  );
}
