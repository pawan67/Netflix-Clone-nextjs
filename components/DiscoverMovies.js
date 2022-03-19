import React, { useEffect, useState } from "react";
import Slider from "react-slick/lib/slider";
import movieApi from "../common/apis/movieApi";
import { APIkey } from "../common/apis/tmdbApiKey";
import { settings } from "../common/settings";
import Card from "./Card";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const DiscoverMovies = () => {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    movieApi
      .get(
        `/discover/movie?api_key=${APIkey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
      )
      .then((res) => {
        setData(res.data.results);
      });
  }, [data]);
  if (!data) {
    return (
      <div>
        <div className=" text-xl flex space-x-2 items-center text-white">
          <AiOutlineLoading3Quarters className=" animate-spin" />
          <p>Loading</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className=" sm:px-10   ">
        <div className=" px-5  my-5 text-white text-xl sm:text-2xl font-medium">
          Popular Movies{" "}
        </div>

        <Slider {...settings}>
          {data.slice(0, 7).map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </Slider>
        <div className=" px-5  my-5 text-white text-xl sm:text-2xl font-medium">
          Best of the Year
        </div>
        <Slider {...settings}>
          {data.slice(7, 14).map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </Slider>
        <div className=" px-5  my-5 text-white  text-xl sm:text-2xl font-medium">
          Best of this week{" "}
        </div>
        <Slider {...settings}>
          {data.slice(14, 20).map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DiscoverMovies;
