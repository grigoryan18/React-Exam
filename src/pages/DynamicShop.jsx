import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function DynamicShop({handleAddToCart}) {
  const { cat } = useParams();
  const { shopProducts } = useSelector((state) => state.shop);

  return (
    <div className=" w-full px-[80px]">
      <div className=" w-full grid grid-cols-4 gap-5">
        {shopProducts
          ?.filter((item) =>
            cat ? item?.category === cat : item
          )
          ?.map((item) => {
            return (
              <div className="mt-[100px] w-[300px] h-[450px] border-2 rounded-md border-purple-600 ">
                <div className=" w-full overflow-hidden">
                  <img src={item?.image} alt="" className="  w-[300px] h-[300px]  " />
                </div>
                <div className="px-[80px]">
                  <p className="w-full  rounded-xl text-xl text-orange-600">
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
          })}
      </div>
    </div>
  );
}
