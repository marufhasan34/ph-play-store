import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import bannerImage from '../../assets/images/hero.png'

const Banner = () => {
  return (
    <div className="min-h-[80vh] space-y-8 pt-15  text-center">
      <h2 className="text-6xl font-bold">We Build  <br /> <span className="text-purple-600">Productive</span> Apps</h2>
      <p className="text-gray-500">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className="flex gap-3 justify-center items-center">
        <button className="border border-gray-300 btn"> <IoLogoGooglePlaystore /> Google play</button>
        <button className="border border-gray-300 btn"> <FaAppStoreIos /> App store</button>
      </div>
      <img className="mx-auto" src={bannerImage} alt="" />
    </div>
  );
};

export default Banner;
