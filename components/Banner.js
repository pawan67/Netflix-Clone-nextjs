import React, { useEffect, useState } from "react";
//FiInfo
import { FiInfo } from "react-icons/fi";
import { BsPlayFill } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "axios";
function Banner() {
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
      <div className=" bg-black flex justify-center items-center h-screen w-screen">
        <div className=" text-xl flex space-x-2 items-center text-white">
          <AiOutlineLoading3Quarters className=" animate-spin" />
          <p>Loading</p>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
      }}
      className={`flex px-10 sm:px-20  relative    items-center bg-cover bg-center h-screen sm:h-[80vh] rounded-b-xl   `}
    >
      <div className=" absolute w-full h-32 bg-gradient-to-t from-black  to-transparent bottom-0 left-0 ring-0 z-20" />
      <div>
        <div data-aos="fade-up" className="    w-3/4">
          <h1 className=" drop-shadow-lg text-white text-5xl sm:text-6xl font-bold">
            {data.title}
          </h1>
          <div className=" flex space-x-2 mt-5 text-white font-semibold ">
            <div className=" flex items-center space-x-2 justify-center text-base text-center py-2 rounded-md bg-[#e50914]/90 cursor-pointer w-36 ">
              <BsPlayFill />
              <p>Play</p>
            </div>
            <div className=" cursor-pointer flex items-center space-x-2 justify-center text-base text-center  py-2 rounded-md bg-[#6d6d6e]/80  w-36 ">
              <FiInfo />
              <p> More info</p>
            </div>
          </div>
          <div className=" -z-20 w-[90%] sm:w-2/4 text-lg  sm:text-2xl mt-5 text-white ">
            <p className=" line-clamp-3 drop-shadow-lg">{data.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
