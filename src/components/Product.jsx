import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCart } from "../redux/fetures/cart-slice";
import { useNavigate } from "react-router-dom";

export default function Product({ item }) {
  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state.cart);
  const navigate = useNavigate();
  const productIsAdded = cartItems?.find(addedItem => addedItem?.id === item?.id);
  const handleAddToCart = (newItem) => {
    const exist = cartItems.find(cartItem => cartItem?.id === newItem?.id);
    if (exist) {
      dispatch(removeCart(exist?.id));
    } else {
      dispatch(addToCart(newItem))
    }
  };

  const handleViewProduct = () => navigate("/product/" + item?.id);

  return (
    <div className=" pb-4 flex items-center flex-col justify-between border-2 rounded-md border-orange-600 	">
      <div className=" w-full overflow-hidden" onClick={handleViewProduct}>
        <img src={item?.image} alt="" className=" w-full object-center object-cover " />
      </div>
      <div className="px-6 flex items-center flex-col gap-2">
        <p className=" rounded-xl text-xl text-orange-600">
          {item?.title}
        </p>
        <p className=" text-lg">
          <span className="text-orange-600">$</span>
          {item?.price?.toLocaleString()}
        </p>
        <button
          className=" mt-2 px-10 border-2 text-lg  border-purple-600 text-purple-600 rounded-md hover:bg-purple-600 hover:text-white transition-all"
          onClick={() => handleAddToCart(item)}
          style={{background: productIsAdded ? "orange" : null, color: productIsAdded ? "white" : null, borderColor: productIsAdded ? "orange" : null}}
        >
          {
            productIsAdded ? "Added to cart" : "Add to cart"
          }
        </button>
      </div>
    </div>
  );
}
