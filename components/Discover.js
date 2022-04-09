import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { settings } from "../common/settings";
import { useSelector } from "react-redux";
import { getAllMovies } from "../features/movieSlice";
import movieApi from "../common/apis/movieApi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import Card from "./Card";

import { APIkey } from "../common/apis/tmdbApiKey";
import SearchCard from "./SearchCard";
function Discover() {
  const [data, setData] = useState([{}]);
  const [data1, setData1] = useState([{}]);

  useEffect(() => {
    movieApi.get(`/trending/movie/day?api_key=${APIkey}`).then((res) => {
      setData(res.data.results);
    });
    movieApi
      .get(
        `discover/movie?api_key=${APIkey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2020&with_watch_monetization_types=flatrate`
      )
      .then((res) => {
        setData1(res.data.results);
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
    <div className=" sm:px-10   ">
      <div className=" px-5  my-5 text-white text-xl sm:text-2xl font-medium">
        Trending now{" "}
      </div>

      <Slider {...settings}>
        {data.slice(0, 7).map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </Slider>
      <div className=" px-5  my-5 text-white text-xl sm:text-2xl font-medium">
        Trending today
      </div>
      <Slider {...settings}>
        {data.slice(7, 14).map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </Slider>
      <div className=" px-5  my-5 text-white  text-xl sm:text-2xl font-medium">
        Trending this week{" "}
      </div>
      <Slider {...settings}>
        {data.slice(14, 20).map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </Slider>
      <div className=" px-5  my-5 text-white  text-xl sm:text-2xl font-medium">
        Best of this year{" "}
      </div>
      <Slider {...settings}>
        {data1.slice(0, 7).map((item) => (
          <SearchCard key={item.id} data={item} />
        ))}
      </Slider>
      <div className=" px-5  my-5 text-white  text-xl sm:text-2xl font-medium">
        Best of this Year{" "}
      </div>
      <Slider {...settings}>
        {data1.slice(8, 14).map((item) => (
          <SearchCard key={item.id} data={item} />
        ))}
      </Slider>
      <div className=" px-5  my-5 text-white  text-xl sm:text-2xl font-medium">
        Best of this century{" "}
      </div>
      <Slider {...settings}>
        {data1.slice(15, 20).map((item) => (
          <SearchCard key={item.id} data={item} />
        ))}
      </Slider>
    </div>
  );
}

export default Discover;
