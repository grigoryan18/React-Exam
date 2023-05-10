import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProduct } from '../redux/fetures/product-slice';

export default function SingleProduct() {

    const {id} = useParams();
    const dispatch = useDispatch();
    const {productItem} = useSelector(state => state.product);

    useEffect(() => {
        dispatch(getProduct(id))
    },)
  return (
    <div className=' px-[60px] py-10'>
      <div className=' w-full grid grid-cols-[1fr_2fr] gap-5'>
        <div className=''>
            <img src={productItem?.image} alt={productItem?.title} className=' w-full object-cover' />
        </div>
        <div className=' px-5'>
            <div>
                <p className=' text-3xl font-semibold'>{productItem?.title}</p>
            </div>
            <div>
                <p className=' text-xl font-semibold'><span className=' text-orange-500'>$</span>{productItem?.price?.toLocaleString()}</p>
            </div>
            <div>
                <p>Category: {productItem?.categoryName}</p>
            </div>
            <div>
                <p>Color: {productItem?.color}</p>
            </div>
            <div>
                <p>Sizes: {productItem?.size}</p>
            </div>
        </div>
      </div>
    </div>
  )
}
