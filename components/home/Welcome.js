import Link from "next/link";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { useUserContext } from "../../context/userContext";

function Welcome() {
  const {sign, setSign} = useUserContext()
  return (
    <div>
      <div className=" bg-welcome h-screen  ">
        {/* Header */}
        <div className=" flex px-5 sm:px-10 items-center justify-between">
          <Link href="/">
            <div>
              <img
                className=" z-50 cursor-pointer w-28  md:w-44"
                src="images/netflix.png"
                alt=""
              />
            </div>
          </Link>
          <div>
            <Link href="/register">
              <button onClick={()=> setSign(true)} className=" active:scale-95 md:mr-5 px-4 py-1 text-sm sm:text-lg  rounded-[3px] bg-[#f40612] text-white ">
                Sign in
              </button>
            </Link>
          </div>
        </div>
        {/* Content */}
        <div className=" text-center mx-auto mt-40  w-3/4 text-white md:w-[800px]">
          <h1 className=" text-3xl md:text-7xl font-bold">
            Unlimited movies, TV shows and more.
          </h1>
          <h3 className=" text-lg md:text-2xl font-medium mt-3 md:mt-5">
            Watch anywhere. Cancel anytime
          </h3>
          <h4 className=" text-base  md:text-xl mt-3 md:mt-5">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
          <div className="  pb-32 sm:pb-52">
            <form className=" w-full flex flex-col sm:flex-row  justify-center mt-5">
              <input
                className=" py-4 rounded-r-sm sm:rounded-r-none sm:py-0 rounded-l-sm px-5 outline-none text-black w-full"
                type="text"
                placeholder="Email address"
              />
              <Link href="/register">
                <div onClick={()=> setSign(false)} className=" active:bg-[#f40612]/50 cursor-pointer mx-auto sm:mx-auto mt-10 sm:mt-0 rounded-r-sm w-32 text-sm sm:w-64 sm:py-4 sm:text-2xl py-2 justify-center rounded-l-sm sm:rounded-l-none bg-[#f40612] flex items-center">
                  Get Started
                  <MdArrowForwardIos className=" ml-3" />
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
