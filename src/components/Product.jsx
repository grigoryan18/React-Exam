import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/fetures/cart-slice";

export default function Product({ item }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => dispatch(addToCart(item));

  return (
    <div className="mt-[100px] w-[300px] h-[450px] border-2 rounded-md border-orange-600 	">
      <div className=" w-full overflow-hidden">
        <img src={item?.image} alt="" className=" w-[300px] h-[300px]  " />
      </div>
      <div className="px-[80px]">
        <p className=" w-full  rounded-xl text-xl text-orange-600">
          {item?.title}
        </p>
        <p className=" text-lg">
          <span className="text-orange-600 px-2">$</span>
          {item?.price}
        </p>
        <button
          className=" mt-5 px-5 border-2 text-lg  border-purple-600 text-purple-600 rounded-md hover:bg-purple-600 hover:text-white transition-all"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
