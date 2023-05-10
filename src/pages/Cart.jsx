import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
import MainContainer from "../components/ui/MainContainer";
import { clearCartItem } from "../redux/fetures/cart-slice";

export default function Cart() {
  const dispatch = useDispatch();
  const { cartItems, cartTotal } = useSelector((state) => state.cart);

  const handleClearCart = () => dispatch(clearCartItem());

  return (
    <MainContainer>
    <div className=" w-full h-[500px] px-[120px] flex items-center flex-col gap-10">
      {cartItems?.length ? (
        <>
          <div
            className="w-full flex items-c
            flex-col gap-2"
            >
            {cartItems?.map((item) => {
              return <CartProduct key={item?.id} item={item} />;
            })}
          </div>
          <div className="w-full grid grid-cols-2">
            <div className="flex items-center justify-start">
              <button
                className="py-1 px-10 bg-orange-600 text-white rounded-lg"
                onClick={handleClearCart}
                >
                Clear All
              </button>
            </div>
            <div className="flex items-center justify-end">
              <p className="text-lg">
                Total price: {cartTotal?.toLocaleString()}
                <span className="text-orange-600 font-medium">$</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div>
          <p className="text-4xl h-full text-orange-600 mt-[200px] "> No Cart Items</p>
        </div>
      )}
    </div>
    </MainContainer>
  );
}

// <img src={item?.image} alt="" className=" w-[300px] h-[300px]" />
// <p>{item?.title}</p>
