import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Shop() {
  const { shopProducts } = useSelector((state) => state.shop);

  return (
    <div className=" w-full h-full flex justify-center">
        <div className=" w-[300px] h-[500px] border-2 px-10 mt-10 border-purple-600">
          <FaShoppingCart className="w-10 h-10 mt-5 text-purple-600"/>
          <p className="flex flex-col text-2xl text-purple-600 mt-3">CATEGORY 
            <Link to='/shop/womens' className="text-xl text-orange-600 px-3">Women's</Link>
            <Link to='/shop/mens'  className="text-xl text-orange-600 px-3">Men's</Link>
          </p>
          <p>

          </p>
        </div>
      <div className=" w-[1000px] px-5 grid grid-cols-2 gap-x-5 ">
        {shopProducts?.map((item) => {
          return (
            <div className="mt-[150px] border-2 border-orange-600">
              <div className=" w-full h-[650px] overflow-hidden">
                <img src={item?.image} alt="" className=" object-cover center w-[500px] h-[500px] mt-8"/>
              </div>
              <div className="px-[150px] pb-[100px]">
                <p className=" w-full  rounded-xl text-2xl text-orange-600">{item?.title}</p>
                <p className=" text-xl"><span className="text-orange-600 px-2">$</span>{item?.price}</p>
                <button className=" bg-purple-600 mt-5 px-10 py-2 text-white rounded-md">Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
