import React from 'react'
import { IconInstagram } from '../../icons/IconInstagram'
import { IconTwitter } from '../../icons/IconTwitter'
import { IconFacebook } from '../../icons/IconFacebook'
import { IconTiktok } from '../../icons/IconTiktok'
import { IconYoutube } from '../../icons/IconYoutube'

export default function Footer() {
  return (
    <section className='w-full h-[500px] bg-purple-600 flex justify-evenly items-center'>
      <div className='text-white text-lg'>
        <h2 className='text-2xl pb-8 text-orange-600'>About</h2>
        <p>About Us</p>
        <p>Press Center</p>
        <p>Our Magazine</p>
        <p>Our Group</p>
        <p>Work with us</p>
      </div>
      <div className='text-white text-lg'>
        <h2 className='text-2xl pb-8 text-orange-600'>Shopping</h2>
        <p>Brand Catalog</p>
        <p>Discount Codes</p>
        <p>Furniture</p>
        <p>Shoes</p>
        <p>Clothes</p>
      </div>
      <div className='text-white text-lg'>
        <h2 className='text-2xl pb-8 text-orange-600'>Help</h2>
        <p>Shoes</p>
        <p>Privacy Policy</p>
        <p>Support</p>
        <p>Contact</p>
        <p>...</p>
      </div>
      <div className='text-white'>
        <h1 className='text-orange-600 text-3xl pb-7'>H & G MODA</h1>
        <p className='pb-8 text-xl'>Stay up to date with all the news.</p>
        <div className='pb-5'>
          <input type="mail" placeholder='Your e-mail' className='p-2 rounded-md outline-orange-600'/>
          <button className='px-2 bg-orange-600 p-2 rounded-md'>SIGN UP</button>
        </div>
        <div className='flex gap-4 '>
          <IconInstagram />
          <IconTwitter />
          <IconFacebook />
          <IconTiktok />
          <IconYoutube />
        </div>
      </div>
    </section>
  )
}
