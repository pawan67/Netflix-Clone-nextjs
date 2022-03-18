import React from "react";
import { BASE_IMG_URL } from "../common/requests";
import Image from "next/image";
const Card = ({ data }) => {
  console.log(data);
  return (
    <div className=" flex justify-center text-white">
      <Image
        src={`${BASE_IMG_URL}${data.backdrop_path}`}
        alt={data.title}
        className=" rounded-lg"
        width={350}
        height={200}
      />
    </div>
  );
};

export default Card;
