import React, { useEffect, useState } from "react";
//FiInfo
import { useRouter } from "next/router";
import { FiInfo } from "react-icons/fi";
import { BsPlayFill } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "axios";
import { useUserContext } from "../context/userContext";
function Banner() {
  const { isModal, setIsModal } = useUserContext();
  const { ModalData, setModalData } = useUserContext();
  const router = useRouter();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const RandNum = Math.floor(Math.random() * 20);

    setLoading(true);
    axios

      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=d4dd95b13ad35a11e9d9a98a3f2c901a`
      )
      .then((res) => {
        const data = res.data;
        setData(data.results[RandNum]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className=" bg-black flex  justify-start ml-5 md:ml-20 items-center h-screen w-screen">
        <div className=" text-xl flex space-x-2 items-center text-white">
          <div className="   rounded-md mx-auto mt-20">
            <div className="flex animate-pulse flex-col space-y-4  h-full justify-center ">
              <div className=" w-[210px] h-14 rounded-lg bg-slate-300"></div>
              <div className=" flex space-x-4">
                <div className=" rounded-lg w-24 h-8 bg-slate-300"></div>
                <div className=" rounded-lg w-24 h-8 bg-slate-300"></div>
              </div>
              <div className=" w-[320px] rounded-lg h-14 bg-slate-200"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
        }}
        className={`flex px-10 sm:px-20  relative    items-center bg-cover bg-center h-screen sm:h-[90vh] rounded-b-xl   `}
      >
        <div className=" absolute w-full h-32 bg-gradient-to-t from-black  to-transparent bottom-0 left-0 ring-0 z-20" />
        <div>
          <div data-aos="fade-up" className="    w-3/4">
            <h1 className=" drop-shadow-lg text-white text-5xl sm:text-6xl font-bold">
              {data.title}
            </h1>
            <div className=" flex space-x-2 mt-5 text-white font-semibold ">
              <div
                onClick={() => router.push("/splash")}
                className=" flex items-center space-x-2 justify-center text-base text-center py-2 rounded-md bg-[#e50914]/90 active:scale-95 cursor-pointer w-36 "
              >
                <BsPlayFill />
                <p>Play</p>
              </div>
              <div className=" cursor-pointer flex items-center space-x-2 justify-center text-base text-center  py-2 rounded-md active:scale-95 bg-[#6d6d6e]/80  w-36 ">
                <FiInfo />
                <p
                  onClick={() => {
                    setIsModal(true);
                    setModalData(data);
                  }}
                >
                  {" "}
                  More info
                </p>
              </div>
            </div>
            <div className=" -z-20 w-[90%] sm:w-2/4 text-lg  sm:text-2xl mt-5 text-white ">
              <p className=" line-clamp-3 drop-shadow-lg">{data.overview}</p>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
    </>
  );
}

export default Banner;
