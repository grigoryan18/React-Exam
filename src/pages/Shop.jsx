import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import { productsDB } from "../data/DataBase"

export default function Shop() {
  const { shopProducts } = useSelector((state) => state.shop);
  
  const [categoryName, setCategoryName] = useState(null)

  const filtered = categoryName ? productsDB.filter(product => product.categoryName === categoryName) : productsDB

  return (
    <div className=" w-full h-full flex justify-around">
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
        <p className="uppercase pt-3 text-2xl text-purple-600 flex flex-col">
          assortment
          <p>{filtered.map(product => (
            <div key={product.id}>
              <p>{product.categoryName}</p>
            </div>
          ))}
            </p>
        </p>
      </div>
      <div className=" w-[1000px] flex flex-wrap gap-5">
        {shopProducts?.map((item) => {
          return <Product key={item?.id} item={item} />;
        })}
      </div>
    </div>
  );
}
