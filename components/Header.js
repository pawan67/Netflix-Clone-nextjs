import React, { useEffect, useState } from "react";
import Link from "next/link";
//IoMdArrowDropdown
import { IoMdArrowDropdown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { useUserContext } from "../context/userContext";
import { useRouter } from "next/router";
function Header() {
  const router = useRouter();
  const { user, logOutUser } = useUserContext();
  const [menu, setMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [userHandle, setUserHandle] = useState(false);
  const [down, setDown] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSearch(false);
    router.push(`/search/${searchText}`);
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (scrollPosition > 150) {
        setDown(true);
      }
      if (scrollPosition < 150) {
        setDown(false);
      }
      setScrollPosition(currentScrollY);
      console.log(down);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);
  return (
    <div className="relative">
      <div
        className={` ${
          down ? " bg-black  " : ""
        } bg-gradient-to-b z-50 from-black fixed left-0 right-0`}
      >
        <div className="  flex px-5 sm:px-10 items-center justify-between">
          <div className=" text-white flex items-center">
            <Link href="/">
              <div className=" h-20 flex items-center">
                <img
                  className="  sm:hidden w-14"
                  src="https://res.cloudinary.com/dewctbby3/image/upload/v1647661407/netflixLogo_wdgzbv.png"
                  alt=""
                />
                <img
                  className=" hidden sm:block z-50 cursor-pointer w-28 md:w-36"
                  src="https://res.cloudinary.com/dewctbby3/image/upload/v1647661380/netflix_mtsxhk.png"
                  alt=""
                />
              </div>
            </Link>
            <div className="hidden sm:block">
              <div className="  ml-5  text-lg flex space-x-5">
                <p>Home</p>
                <p>Movies</p>
                <p>Tv Shows</p>
              </div>
            </div>
          </div>
          <div className=" flex items-center space-x-7">
            <div className=" flex items-center space-x-2  ">
              <form onSubmit={handleSubmit}>
                <input
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder=" Search movies, series"
                  className={` ${
                    isSearch ? " w-auto p-1 border" : " w-0 "
                  }  outline-none transition-all text-white bg-transparent px-2  rounded-lg `}
                  type="text"
                />
              </form>
              <FiSearch
                onClick={() => setIsSearch(!isSearch)}
                className=" text-white  text-2xl "
              />
            </div>
            <div
              onClick={() =>
                userHandle ? setUserHandle(false) : setUserHandle(true)
              }
              className=" relative flex items-center space-x-2"
            >
              <img
                className=" w-10 rounded-full"
                src="https://res.cloudinary.com/dewctbby3/image/upload/v1647661487/user_nqjjjf.png"
                alt=""
              />
              <IoMdArrowDropdown className=" text-2xl text-white" />
              <div
                className={` ${
                  userHandle ? "" : "hidden"
                } absolute right-0 top-12 rounded-md z-50  text-white px-5 py-3   bg-[#1f1f1f]`}
              >
                <div
                  onClick={logOutUser}
                  className=" px-5 py-1 rounded-md active:scale-95 cursor-pointer bg-[#3a3a3a]"
                >
                  Signout
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => setMenu(true)}
          className={` ${down ? "hidden" : ""} ${
            menu ? "hidden" : ""
          } bg-[#292929]/60 text-white backdrop-blur-sm flex items-center px-5 justify-center w-28 mx-auto rounded-lg mt-1  py-2 text-sm sm:hidden z-40 `}
        >
          <p>Discover</p> <IoMdArrowDropdown />
        </div>
      </div>
      <div
        className={`  transition-all ${
          menu ? " top-0" : "-top-[100vh]"
        } absolute w-screen h-screen bg-gradient-to-b z-30  from-black`}
      >
        <div className=" mt-20 z-20  text-xl text-white flex flex-col justify-center items-center space-y-5 ">
          <p>Home</p>
          <p>Movies</p>
          <p>Tv Shows</p>
        </div>
        <div onClick={() => setMenu(false)} className=" h-full"></div>
      </div>
    </div>
  );
}

export default Header;
