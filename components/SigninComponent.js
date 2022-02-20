import { Head } from "next/document";
import React, { useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { useUserContext } from "../context/userContext";
function SigninComponent() {
  const emailRef = useRef();

  const passwordRef = useRef();
  const { sign, setSign } = useUserContext();
  const { signInUser, forgotPassword, signInWithGoogle } = useUserContext();
  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email && password) signInUser(email, password);
  };
  return (
    <div>
      
      <div>
        <div
          data-aos="zoom-in"
          className=" text-white mx-auto p-16  bg-black/50 backdrop-blur-md rounded-2xl shadow-xl shadow-[#070000]  w-full sm:w-[460px] "
        >
          <h1 className=" text-white text-2xl font-medium mb-5">Sign In</h1>
          <form onSubmit={onSubmit} className=" space-y-5 flex flex-col">
            <input
              ref={emailRef}
              className=" outline-none rounded-md p-4 bg-[#333333]  "
              type="text"
              placeholder="Email"
            />

            <input
              ref={passwordRef}
              className=" outline-none rounded-md p-4 bg-[#333333]  "
              type="password"
              placeholder="Password"
            />
            <button
              type="submit"
              className=" active:scale-95 mt-3 text-white  rounded-md font-semibold p-4 w-full bg-[#e50914]"
            >
              Sign In
            </button>
          </form>
          <p
            onClick={() => setSign(false)}
            className=" cursor-pointer underline mt-5"
          >
            Don't have account Register
          </p>
          <div
            onClick={() => signInWithGoogle()}
            className=" text-base cursor-pointer mt-5 space-x-1 flex items-center "
          >
            <p className=" underline  ">Sign in with Google</p>{" "}
            <FcGoogle className=" text-xl" />
          </div>

          <p className=" mt-10 text-xs">
            This page is protected by Google{" "}
            <span
              className=" underline cursor-pointer "
              title="FUCK reCAPTCHA  "
            >
              reCAPTCHA
            </span>{" "}
            to ensure you're not a bot. Learn more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SigninComponent;
