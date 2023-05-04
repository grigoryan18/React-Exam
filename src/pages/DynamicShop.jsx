import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function DynamicShop() {
  const { cat } = useParams();
  const {shopProducts} = useSelector(state => state.shop);

  return (
    <div className=" w-full px-[80px]">
      <div className=" w-full grid grid-cols-4 gap-5">
        {shopProducts?.filter(item => cat ? item?.category === cat : item)?.map((item) => {
          return (
            <div >
              <div className=" w-full overflow-hidden">
                <img src={item?.image} alt="" className=" object-cover" />
              </div>
              <div>
                <p>{item?.title}</p>
                <p>{item?.categoryName}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
