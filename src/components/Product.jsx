import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/fetures/cart-slice";

export default function Product({item}) {

  const dispatch = useDispatch();
  const handleAddToCart = () => dispatch(addToCart(item));

  return (
    <div
      className="mt-[150px] border-2 rounded-md border-orange-600"
    >
      <div className=" w-full h-[650px] overflow-hidden">
        <img
          src={item?.image}
          alt=""
          className=" object-cover center w-[500px] h-[500px] mt-8"
        />
      </div>
      <div className="px-[150px] pb-[100px]">
        <p className=" w-full  rounded-xl text-2xl text-orange-600">
          {item?.title}
        </p>
        <p className=" text-xl">
          <span className="text-orange-600 px-2">$</span>
          {item?.price}
        </p>
        <button
          className=" mt-5 px-15 py-2 border-2 text-xl  border-purple-600 text-purple-600 rounded-md hover:bg-purple-600 hover:text-white transition-all"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
