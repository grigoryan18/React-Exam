import React from "react";
import { Link } from "react-router-dom";
import { IconArrow } from "../icons/IconArrow";

export default function Home() {
  <shoeImages />;
  return (
    <>
      <section
        className="w-full h-[1000px]"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url('https://spreethemesprevious.github.io/bisum/img/hero.jpg') no-repeat center / cover",
        }}
      >
        <div className="w-full h-full flex justify-center items-center flex-col">
          <h2 className=" w-full h-auto flex justify-center font-extrabold text-7xl text-white">
            H & G MODA PAGES
          </h2>
          <div className="w-full h-auto flex justify-center items-center gap-3 pt-10">
            <p className="font-xl text-white">home pages</p>
            <p className="text-red-700">|</p>
            <p className="font-xl text-white">shop pages</p>
            <p className="text-red-700">|</p>
            <p className="font-xl text-white">about pages</p>
          </div>
          <div className="w-full h-auto flex justify-center items-center pt-[70px]">
            <button className="w-[220px] h-[50px] bg-orange-700 text-white transition-all font-bold text-lg rounded-lg hover:bg-cyan-700">
              View Colections
            </button>
          </div>
        </div>
      </section>
      <section className="w-full h-auto">
        <div className="w-full h-auto flex justify-center pt-[120px]">
          <h2 className="text-7xl text-cyan-700">Home Pages</h2>
        </div>
        <div className="flex justify-center pt-[50px] text-orange-600">
          <p>
            Choose one of styles or cutomize easily your site following your
            ideas.
          </p>
        </div>
        <div className="w-full h-auto flex justify-around flex-wrap gap-12 pt-32">
          <div className="truncate">
            <div className='bg-[url("https://imageio.forbes.com/specials-images/imageserve/5fdfea07418a6547f71232ec/Allen-Edmonds-Courtside-Sneakers/960x0.jpg?height=924&width=711&fit=bounds")] w-[450px] h-[600px] bg-no-repeat bg-cover bg-center shadow-2xl'>
              <div>
                <Link to="/shop">
                  <IconArrow />
                </Link>
              </div>
            </div>
          </div>
          <div className="truncate">
            <div className='bg-[url("https://sc04.alicdn.com/kf/Hd2b6ec032a4b4d6497311f81424ea779p.jpg")] w-[450px] h-[600px] bg-no-repeat bg-cover bg-center shadow-2xl'>
              <div>
                <Link to="/shop">
                  <IconArrow />
                </Link>
              </div>
            </div>
          </div>
          <div className="truncate">
            <div className='bg-[url("https://i.pinimg.com/564x/9e/0d/73/9e0d733ec04a73f99a602905cc662425.jpg")] w-[450px] h-[600px] bg-no-repeat bg-cover bg-center shadow-2xl'>
              <div>
                <Link to="/shop">
                  <IconArrow />
                </Link>
              </div>
            </div>
          </div>
          <div className="truncate">
            <div className='bg-[url("https://i.pinimg.com/564x/2a/c6/39/2ac6390ea3c46a2259991f998236e77c.jpg")] w-[450px] h-[600px] bg-no-repeat bg-cover bg-center shadow-2xl'>
              <div>
                <Link to="/shop">
                  <IconArrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-24">
        <div className="w-full h-[120px] bg-[#1b7688bb]">
          <p className="text-4xl text-white text-center font-medium pt-[45px]">
            RTL Demo Coming Soon.
          </p>
        </div>
        <div className="w-full h-auto flex flex-wrap justify-around gap-9 pt-24 py-24">
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-white bg-orange-600 flex justify-center items-center"><p>Friendly</p></div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-white bg-orange-600 flex justify-center items-center"><p>Responsive Desighne</p></div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-white bg-orange-600 flex justify-center items-center"><p>Creative</p></div>
          <div className="w-[270px] h-[221px] 2shadow-xl text-2xl font-bold text-white bg-orange-600 flex justify-center items-center"><p>Style</p></div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-white bg-orange-600 flex justify-center items-center"><p>Contact form</p></div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-white bg-orange-600 flex justify-center items-center"><p>Real Support</p></div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-white bg-orange-600 flex justify-center items-center"><p>Sass Avaible</p></div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-white bg-orange-600 flex justify-center items-center"><p>Contact</p></div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-white bg-orange-600 flex justify-center items-center"><p>For You</p></div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-white bg-orange-600 flex justify-center items-center"><p>For Family</p></div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-white bg-orange-600 flex justify-center items-center"><p>Shoes</p></div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-white bg-orange-600 flex justify-center items-center"><p>Parfumes</p></div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-white bg-orange-600 flex justify-center items-center"><p>Dresses</p></div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-white bg-orange-600 flex justify-center items-center"><p>For Animal</p></div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-white bg-orange-600 flex justify-center items-center"><p>For Vehicles</p></div>
        </div>
      </section>
    </>
  );
}
