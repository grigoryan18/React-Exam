import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../components/Product";

export default function DynamicShop({handleAddToCart}) {
  const { cat } = useParams();
  const { shopProducts } = useSelector((state) => state.shop);

  return (
    <div className=" w-full px-[80px] py-10">
      <div className=" w-full grid grid-cols-4 gap-5">
        {shopProducts
          ?.filter((item) =>
            cat ? item?.category === cat : item
          )
          ?.map((item) => {
            return <Product key={item?.id} item={item} />
          })}
      </div>
    </div>
  );
}
