import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import { getUniqueCategories } from "../redux/fetures/shop-slice";

export default function Shop() {
  const dispatch = useDispatch();
  const { shopProducts, uniqueCategories } = useSelector((state) => state.shop);
  const {cartCount} = useSelector(state => state.cart);
  const [categoryCheck, setCategoryCheck] = useState([]);

  const handleChange = (e) => {
    const {value, checked} = e.target;
    checked ? setCategoryCheck(prev => [...prev, value]) : setCategoryCheck(categoryCheck?.filter(item => item !== value));
  }

  useEffect(() => {
    dispatch(getUniqueCategories())
  }, [dispatch])

  return (
    <div className=" w-full h-full grid grid-cols-[1fr_4fr] py-10 gap-8 px-10">
      <div className=" h-[500px] flex items-start flex-col border-2 rounded-md px-10 border-purple-600">
        <Link to="/cart" className=" relative flex items-center">
          <FaShoppingCart className="w-10 h-10 mt-5 text-purple-600" />
          <div className=" w-5 h-5 rounded-full flex items-center justify-center absolute top-4 -right-3 transition-all duration-150 bg-red-500" style={{opacity : cartCount ? "1" : "0"}}>
            <p className=" text-white text-[12px]">{cartCount}</p>
          </div>
        </Link>
        <div className="flex flex-col text-2xl text-purple-600 mt-3">
          CATEGORY
          <Link to="/shop/womens" className="text-xl text-orange-600 px-3 ">
            Women's
          </Link>
          <Link to="/shop/mens" className="text-xl text-orange-600 px-3">
            Men's
          </Link>
        </div>
        <div className="uppercase pt-3 text-2xl text-purple-600 flex flex-col">
          <div>
            <p>Assortment</p>
          </div>
          <div>
            {
              uniqueCategories?.map((category, index) => {
                return (
                  <div key={index}>
                    <input type="checkbox" value={category} id={category} onChange={handleChange} className=" accent-orange-500 cursor-pointer"/>
                    <label htmlFor={category} className="text-base font-medium cursor-pointer text-orange-600 px-2">{category}</label>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-5">
        {shopProducts?.filter(item => categoryCheck?.length ? item?.categoryName === categoryCheck?.find(categoryItem => categoryItem === item?.categoryName) : item)?.map((item) => {
          return <Product key={item?.id} item={item} />;
        })}
      </div>
    </div>
  );
}
