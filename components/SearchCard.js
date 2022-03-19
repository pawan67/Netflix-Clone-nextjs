import Image from "next/image";
import React from "react";
import { BASE_IMG_URL } from "../common/requests";

const SearchCard = ({ data }) => {
  return (
    <div className="   text-white">
      <Image
      width={350}
      height={190}
        className=" w-40"
        src={`${BASE_IMG_URL}${data.backdrop_path}`}
        alt=""
      />
      <div className=" w-40"></div>
    </div>
  );
};

export default SearchCard;
