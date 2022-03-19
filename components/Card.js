import React, { useState } from "react";
import { BASE_IMG_URL } from "../common/requests";
import { FiInfo } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { BsPlayFill } from "react-icons/bs";

import Image from "next/image";
const Card = ({ data }) => {
  const [isHover, setIsHover] = useState(false);
  const [imageError, setImageError] = useState(false);
  const fallBackSrc =
    "https://res.cloudinary.com/dewctbby3/image/upload/v1647663227/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w_dugogx.jpg";

  const src = `${BASE_IMG_URL}${data.backdrop_path}`;
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className=" relative flex justify-center text-white"
    >
      <Image
        data-aos="zoom-in"
        src={imageError ? fallBackSrc : src}
        onError={() => setImageError(true)}
        alt={data.title}
        className=" rounded-lg"
        width={350}
        height={200}
      />

      <div
        className={`${
          isHover ? "absolute transition-all" : "hidden transition-all"
        } transition-all left-10  sm:left-5 flex items-center space-x-2 bottom-5`}
      >
        <div className="px-4 py-2 font-bold flex  justify-center items-center  space-x-1 rounded-md bg-[#d41420] ">
          <div>Play</div>
          <BsPlayFill />
        </div>
        <div className=" border-2 p-1 rounded-full  text-2xl">
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Card;
