import React from 'react'


export default function Home() {
  <shoeImages/>
  return (
    <>
   <section className='w-full h-[800px]' style={{background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url('https://spreethemesprevious.github.io/bisum/img/hero.jpg') no-repeat center / cover"}}>
    <div className='w-full h-full flex justify-center items-center flex-col'>
      <h2 className=' w-full h-auto flex justify-center font-extrabold text-7xl text-white'>H & G MODA PAGES</h2>
      <div className='w-full h-auto flex justify-center items-center gap-3 pt-10'>
      <p className='font-xl text-white'>home pages</p>
      <p className='text-red-700'>|</p>
      <p className='font-xl text-white'>shop pages</p>
      <p className='text-red-700'>|</p>
      <p className='font-xl text-white'>about pages</p>
      </div>
      <div className='w-full h-auto flex justify-center items-center pt-[70px]'>
        <button className='w-[230px] h-[70px] bg-orange-700 text-white transition-all font-bold hover:bg-blue-950'>View Colections</button>
      </div>
    </div>
   </section>
   <section className='w-full h-auto'>
    <div className='w-full h-auto flex justify-center pt-[120px]'>
      <h2 className='text-7xl'>Home Pages</h2>
    </div>
    <div className='flex justify-center pt-[50px]'>
      <p>Choose one of styles or cutomize easily your site following your ideas.  <br /> More demos are coming soon.  </p>
      </div>
      <div className='w-full h-auto flex justify-around flex-wrap gap-12 pt-32'>
        <div className='bg-[url("https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg")] w-[450px] h-[600px] bg-no-repeat bg-cover bg-center shadow-2xl'></div>
        <div className='bg-[url("https://sc04.alicdn.com/kf/Hd2b6ec032a4b4d6497311f81424ea779p.jpg")] w-[450px] h-[600px] bg-no-repeat bg-cover bg-center shadow-2xl'></div>
        <div className='bg-[url("https://sc04.alicdn.com/kf/H427558096f484474ba22d12dfbd13248F.jpg")] w-[450px] h-[600px] bg-no-repeat bg-cover bg-center shadow-2xl'></div>
        <div className='bg-[url("https://rockclimbingcentral.com/wp-content/uploads/2019/03/climbingshoestight2.jpg")] w-[450px] h-[600px] bg-no-repeat bg-cover bg-center shadow-2xl'></div>
      </div>
   </section>
    </>
  
  )
}
