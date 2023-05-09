import React from "react";
import { Link } from "react-router-dom";
import { IconArrow } from "../icons/IconArrow";
import {
  FaCode,
  FaDice,
  FaFont,
  FaSearch,
  FaUserFriends,
} from "react-icons/fa";
import {
  SiAffinitydesigner,
  SiBootstrap,
  SiGooglemessages,
} from "react-icons/si";
import { BsGoogle } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { IoIosSpeedometer, IoLogoSass } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { MdEventNote } from "react-icons/md";

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
          <h2 className=" w-full h-auto flex justify-center font-extrabold text-7xl text-white hover:text-orange-600 cursor-pointer ">
            H & G MODA PAGES
          </h2>
          <div className="w-full h-auto flex justify-center items-center gap-3 pt-10">
            <Link to="/" className="font-xl text-white">
              home pages
            </Link>
            <p className="text-red-700">|</p>
            <Link to="/shop" className="font-xl text-white">
              shop pages
            </Link>
            <p className="text-red-700">|</p>
            <Link to="/cart" className="font-xl text-white">
              cart pages
            </Link>
            <p className="text-red-700">|</p>
            <Link to="/contact" className="font-xl text-white">
              contact pages
            </Link>
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
        <div className="w-full h-auto grid  grid-cols-2 gap-12 ml-24 pt-32">
          <div className="truncate">
            <div className='bg-[url("https://imageio.forbes.com/specials-images/imageserve/5fdfea07418a6547f71232ec/Allen-Edmonds-Courtside-Sneakers/960x0.jpg?height=924&width=711&fit=bounds")] w-[450px] h-[600px] bg-no-repeat bg-cover bg-center shadow-2xl'>
              <div>
                <Link to="/shop/mens">
                  <IconArrow />
                </Link>
              </div>
            </div>
          </div>
          <div className="truncate">
            <div className='bg-[url("https://sc04.alicdn.com/kf/Hd2b6ec032a4b4d6497311f81424ea779p.jpg")] w-[450px] h-[600px] bg-no-repeat bg-cover bg-center shadow-2xl'>
              <div>
                <Link to="/shop/womens">
                  <IconArrow />
                </Link>
              </div>
            </div>
          </div>
          <div className="truncate">
            <div className='bg-[url("https://i.pinimg.com/564x/9e/0d/73/9e0d733ec04a73f99a602905cc662425.jpg")] w-[450px] h-[600px] bg-no-repeat bg-cover bg-center shadow-2xl'>
              <div>
                <Link to="/shop/womens">
                  <IconArrow />
                </Link>
              </div>
            </div>
          </div>
          <div className="truncate">
            <div className='bg-[url("https://i.pinimg.com/564x/2a/c6/39/2ac6390ea3c46a2259991f998236e77c.jpg")] w-[450px] h-[600px] bg-no-repeat bg-cover bg-center shadow-2xl'>
              <div>
                <Link to="/shop/mens">
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
        <section className="w-full h-auto flex flex-wrap justify-around gap-9 pt-24 py-24">
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-cyan-600 bg-slate-200 flex justify-center items-center gap-5">
            <FaUserFriends className="w-10 h-10 " />
            <p>Friendly</p>
          </div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-cyan-600 bg-slate-200 flex justify-center items-center gap-5 ">
            <SiAffinitydesigner className="w-10 h-10 ml-8" />
            <p>Responsive Desighne</p>
          </div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-cyan-600 bg-slate-200 flex justify-center items-center gap-5">
            <FaDice className="w-10 h-10" />
            <p>Creative</p>
          </div>
          <div className="w-[270px] h-[221px] 2shadow-xl text-2xl font-bold text-cyan-600 bg-slate-200 flex justify-center items-center gap-5">
            <FaFont className="w-10 h-10" />
            <p>Icon Font</p>
          </div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-cyan-600 bg-slate-200 flex justify-center items-center gap-5">
            <BsGoogle className="w-10 h-10" />
            <p>Google Font</p>
          </div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-cyan-600 bg-slate-200 flex justify-center items-center gap-5">
            <SiGooglemessages className="w-10 h-10" />
            <p>Contact Form</p>
          </div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-cyan-600 bg-slate-200 flex justify-center items-center gap-5">
            <FaCode className="w-10 h-10" />
            <p>Clean Markup</p>
          </div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-cyan-600 bg-slate-200 flex justify-center items-center gap-5">
            <BiSupport className=" w-10 h-10" />
            <p>Real Support</p>
          </div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-cyan-600 bg-slate-200 flex justify-center items-center gap-5">
            <IoLogoSass className="w-10 h-10" />
            <p>Sass Available</p>
          </div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-cyan-600 bg-slate-200 flex justify-center items-center gap-5">
            <SiBootstrap className="w-10 h-10 ml-8" />
            <p>Bootstrap Comfortable</p>
          </div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-cyan-600 bg-slate-200 flex justify-center items-center gap-5">
            <IoIosSpeedometer className="w-10 h-10 ml-8" />
            <p>Fast Loading Speed</p>
          </div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-cyan-600 bg-slate-200 flex justify-center items-center gap-5">
            <FaSearch className="w-10 h-10" />
            <p>SEO Optimized</p>
          </div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-cyan-600 bg-slate-200 flex justify-center items-center gap-5">
            <GiHamburgerMenu className="w-10 h-10 ml-8" />
            <p>Responsive mega menu</p>
          </div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-cyan-600 bg-slate-200 flex justify-center items-center gap-5">
            <SlNote className="w-10 h-10 ml-8" />
            <p>Easy Customizable</p>
          </div>
          <div className="w-[270px] h-[221px] shadow-2xl text-2xl font-bold text-cyan-600 bg-slate-200 flex justify-center items-center gap-5">
            <MdEventNote className="w-10 h-10 ml-8" />
            <p>Detailed documentation</p>
          </div>
        </section>
      </section>
    </>
  );
}
