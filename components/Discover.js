import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { settings } from "../common/settings";
import { useSelector } from "react-redux";
import { getAllMovies } from "../features/movieSlice";
import movieApi from "../common/apis/movieApi";

import Card from "./Card";

import { APIkey } from "../common/apis/tmdbApiKey";
function Discover() {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    movieApi.get(`/trending/movie/day?api_key=${APIkey}`).then((res) => {
      console.log(res);
      setData(res.data.results);
      console.log(data);
    });
  }, []);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" sm:px-10   ">
      <div className=" px-5  my-5 text-white text-xl sm:text-2xl font-medium">
        Trending now{" "}
      </div>

      <Slider {...settings}>
        {data.slice(0, 7).map((item) => (
          <Card data={item} />
        ))}
      </Slider>
      <div className=" px-5  my-5 text-white text-xl sm:text-2xl font-medium">
        Trending today
      </div>
      <Slider {...settings}>
        {data.slice(7, 14).map((item) => (
          <Card data={item} />
        ))}
      </Slider>
      <div className=" px-5  my-5 text-white  text-xl sm:text-2xl font-medium">
        Trending this week{" "}
      </div>
      <Slider {...settings}>
        {data.slice(14, 20).map((item) => (
          <Card data={item} />
        ))}
      </Slider>
    </div>
  );
}

export default Discover;
