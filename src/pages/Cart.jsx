import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {

  const {cartItems} = useSelector(state => state.cart);

  return (
    <div className=''>
      {
        cartItems?.map(item => {
          return (
            <div>
              <div>
                <img src={item?.image} alt="" />
              </div>
              <div>
                <p>{item?.title}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
