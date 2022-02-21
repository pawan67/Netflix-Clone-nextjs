import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Footer from "../components/Footer";
import { useUserContext } from "../context/userContext";
import SignUp from "../components/SignupComponent";
import { useRouter } from "next/router";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import SigninComponent from "../components/SigninComponent";
import Head from "next/head";
// ..

function Register() {
  const router = useRouter();
  useEffect(() => {
    AOS.init();
    if (sign != null) {
      router.push("/home");
    }
  });

  const { sign, setSign } = useUserContext();

  return (
    <div>
      <Head>
        <title>Netflix - Register</title>
      </Head>
      <div>
        <div className="bg-black md:bg-welcome h-screen  ">
          {/* Header */}
          <div className=" flex px-5 sm:px-10 items-center justify-between">
            <Link href="/">
              <div>
                <img
                  className=" cursor-pointer w-28  md:w-44"
                  src="images/netflix.png"
                  alt=""
                />
              </div>
            </Link>
            <div></div>
          </div>
          {/* Content */}
          {sign ? <SigninComponent /> : <SignUp />}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Register;
