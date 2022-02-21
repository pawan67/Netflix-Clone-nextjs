import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { AiFillDingtalkSquare, AiOutlinePlus } from "react-icons/ai";

function Accordian({question, answers}) {
  const [acc, setAcc] = useState(false);
  return (
    <div className=" bg-[#303030] mx-auto text-2xl sm:text-3xl max-w-[100%] md:max-w-[660px] xl:max-w-[760px]">
      <div className=" relative py-5 border-b-2 border-black">
        {question}
        <AiOutlinePlus
          onClick={() => setAcc(true)}
          className={` cursor-pointer text-white ${acc ? "hidden" : ""} absolute top-6 right-7`}
        />
        <IoCloseOutline
          onClick={() => setAcc(false)}
          className={` cursor-pointer text-white ${acc ? "" : "hidden"} absolute top-6 right-7`}
        />
      </div> 
      <div
        className={`  ${
          acc ? "p-7  " : " p-0 h-0"
        }  text-left text-2xl   overflow-hidden`}
      >
        {answers}
      </div>
    </div>
  );
}

export default Accordian;
