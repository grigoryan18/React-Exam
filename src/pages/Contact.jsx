import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconMess } from "../icons/IconMess";
import { IconLoc } from "../icons/IconLoc";
import { IconPhone } from "../icons/IconPhone";
import ContactModal from "../components/ui/ContactModal";

const initialInpuVal = {
  fullName: "",
  email: "",
  subject: "",
  phoneNumber: "",
  message: "",
};

export default function Contact() {
  const [inputVal, setInputVal] = useState(initialInpuVal);
  const [isMessageSent, setIsMessageSent] = useState({
    isSuccess: false,
    isError: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, subject, phoneNumber, message } = inputVal;
    if (fullName.length > 7 && email && subject && phoneNumber && message) {
      setIsMessageSent({ isSuccess: true, isError: false });
      setTimeout(() => setIsMessageSent({isSuccess: false}), 2000);
      setInputVal(initialInpuVal);
    } else {
      setIsMessageSent({ isError: true });
    }
  };

  const handleChange = (e) => {
    setInputVal((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section >
      <section className="w-full h-[500px] flex justify-evenly items-center">
        <div className="h-[200px] w-[340px] border-2 p-8 pt-10 border-[#1f9cb5bb]">
          <IconMess />
          <h2 className="pt-4 text-xl font-medium text-orange-600">
            Mail Address
          </h2>
          <p className="pt-3 text-lg">1.mariamgrigoryan580@gmail.com</p>
          <p className="text-lg">2.crowcward@mail.ru</p>
        </div>
        <div className="h-[200px] w-[340px] border-2 p-8 pt-10 border-[#1f9cb5bb]">
          <IconLoc />
          <h2 className="pt-4 text-xl font-medium text-orange-600">
            Office Location
          </h2>
          <p className="pt-3 text-lg">S. Ararat, C. Vedi, Araratyan 44</p>
        </div>
        <div className="h-[200px] w-[340px] border-2 p-8 pt-10 border-[#1f9cb5bb]">
          <IconPhone />
          <h2 className="pt-4 text-xl font-medium text-orange-600">
            Phone Number
          </h2>
          <p className="pt-3 text-lg">+374 77-03-66-87</p>
          <p className="text-lg">+374 93-45-49-11</p>
        </div>
      </section>
      {isMessageSent?.isSuccess ? <ContactModal /> : null}
      <form
        className="w-[1000px] h-[650px] m-7 ml-52 border-2 border-[#1f9cb5bb]"
        onSubmit={handleSubmit}
      >
        <div className="p-10 tracking-widest">
          <h1 className="uppercase text-5xl font-bold pb-3">Drop us a line</h1>
          <p className="text-xl">We would like to hear from you.</p>
        </div>
        <div className=" w-full px-[120px] flex flex-col items-center  gap-10 ">
          <div className=" w-full grid grid-cols-2 gap-5">
            <input
              type="text"
              name="fullName"
              value={inputVal.fullName}
              onChange={handleChange}
              placeholder="Full name"
              className=" w-full p-2 text-lg border-2 rounded-lg outline-orange-600"
            />
            <input
              type="mail"
              name="email"
              value={inputVal.email}
              onChange={handleChange}
              placeholder="Email Address*"
              className=" w-full p-2 text-lg border-2 rounded-lg outline-orange-600"
            />
          </div>
          <div className=" w-full grid grid-cols-2 gap-5">
            <input
              type="text"
              name="subject"
              value={inputVal.subject}
              onChange={handleChange}
              placeholder="Type a subject"
              className="p-2 text-lg border-2 rounded-lg outline-orange-600"
            />
            <input
              type="number"
              name="phoneNumber"
              value={inputVal.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="p-2 text-lg border-2 rounded-lg outline-orange-600"
            />
          </div>
          <div className=" w-full pr-[10px]">
            <textarea
              id="mess"
              cols="67"
              rows="5"
              name="message"
              value={inputVal.message}
              onChange={handleChange}
              placeholder="Write your message here*"
              className=" w-full p-2 text-lg border-2 rounded-lg outline-orange-600"
            ></textarea>
          </div>
        </div>
        <div className="p-8 px-[120px]">
          <button
            className="bg-orange-600 text-white text-xl rounded-lg p-2 px-7"
            type="submit"
          >
            Send Message
          </button>
        </div>
        <div>
          {isMessageSent?.isError ? (
            <p className=" text-red-500 px-5">All input fields are required!</p>
          ) : null}
        </div>
      </form>
    </section>
  );
}
