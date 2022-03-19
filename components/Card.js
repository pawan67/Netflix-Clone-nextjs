import React, { useState } from "react";
import { BASE_IMG_URL } from "../common/requests";
import { FiInfo } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { BsPlayFill } from "react-icons/bs";

import Image from "next/image";
import { useUserContext } from "../context/userContext";
const Card = ({ data }) => {
  const { isModal, setIsModal } = useUserContext();
  const { ModalData, setModalData } = useUserContext();

  const [isHover, setIsHover] = useState(false);
  const [imageError, setImageError] = useState(false);
  const fallBackSrc =
    "https://res.cloudinary.com/dewctbby3/image/upload/v1647663227/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w_dugogx.jpg";

  const src = `${BASE_IMG_URL}${data.backdrop_path}`;
  return (
    <>
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
          <div
            onClick={() => {
              setModalData(data);
              setIsModal(true);
            }}
            className=" border-2 p-1 rounded-full  text-2xl"
          >
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      {/* modal */}
      <div
        onClick={() => setIsModal(false)}
        className={` ${
          isModal
            ? " transition-all fixed flex justify-center items-center bottom-0 top-0 left-0 backdrop-blur-sm right-0 z-50"
            : "hidden"
        }  `}
      >
        <div className="  ">
          <div
            data-aos="fade-in"
            className=" rounded-xl bg-[#181818] w-[600px]"
          >
            <img
              className=" rounded-lg rounded-b-none w-full h-full"
              src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
              alt=""
            />
            <div className=" p-10">
              <h1 className=" text-white text-2xl font-bold">{data.title}</h1>
              <h2 className=" text-white mt-5 text-lg font-medium">
                {data.overview}
              </h2>

              <hr className=" my-5" />

              <h1 className=" text-white text-xl font-medium">
                Info on <span className=" font-semibold">{data.title}</span>
              </h1>

              <div className=" font-semibold mt-5 text-[#636363]">
                <div>
                  Release date :{" "}
                  <span className=" text-white">{data.release_date}</span>
                </div>
                <div>
                  Average vote :{" "}
                  <span className=" text-white">{data.vote_average}</span>
                </div>
                <div>
                  Original Language :{" "}
                  <span className=" text-white">{data.original_language}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
