import React, { useEffect, useRef } from "react";
import { useRouter } from "next/dist/client/router";
import Head from "next/head"
const Splash = () => {
  const AudioRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      AudioRef.current.play();
    }, 200);
    setTimeout(() => {
      router.push("/home");
    }, 4500);
  });
   
  // Credit:  https://codepen.io/claudio_bonfati/pen/mdryxPv by claudio bonfati
  
  return (
    <>
    <Head>
    <title>Tudum </title>
    </Head>
      <div className=" h-screen">
        <audio ref={AudioRef} src="/tadum.mp3"></audio>
        <div id="container">
          <netflixintro letter="N">
            <div className="helper-1">
              <div className="effect-brush">
                <span className="fur-31"></span>
                <span className="fur-30"></span>
                <span className="fur-29"></span>
                <span className="fur-28"></span>
                <span className="fur-27"></span>
                <span className="fur-26"></span>
                <span className="fur-25"></span>
                <span className="fur-24"></span>
                <span className="fur-23"></span>
                <span className="fur-22"></span>
                <span className="fur-21"></span>
                <span className="fur-20"></span>
                <span className="fur-19"></span>
                <span className="fur-18"></span>
                <span className="fur-17"></span>
                <span className="fur-16"></span>
                <span className="fur-15"></span>
                <span className="fur-14"></span>
                <span className="fur-13"></span>
                <span className="fur-12"></span>
                <span className="fur-11"></span>
                <span className="fur-10"></span>
                <span className="fur-9"></span>
                <span className="fur-8"></span>
                <span className="fur-7"></span>
                <span className="fur-6"></span>
                <span className="fur-5"></span>
                <span className="fur-4"></span>
                <span className="fur-3"></span>
                <span className="fur-2"></span>
                <span className="fur-1"></span>
              </div>
              <div className="effect-lumieres">
                <span className="lamp-1"></span>
                <span className="lamp-2"></span>
                <span className="lamp-3"></span>
                <span className="lamp-4"></span>
                <span className="lamp-5"></span>
                <span className="lamp-6"></span>
                <span className="lamp-7"></span>
                <span className="lamp-8"></span>
                <span className="lamp-9"></span>
                <span className="lamp-10"></span>
                <span className="lamp-11"></span>
                <span className="lamp-12"></span>
                <span className="lamp-13"></span>
                <span className="lamp-14"></span>
                <span className="lamp-15"></span>
                <span className="lamp-16"></span>
                <span className="lamp-17"></span>
                <span className="lamp-18"></span>
                <span className="lamp-19"></span>
                <span className="lamp-20"></span>
                <span className="lamp-21"></span>
                <span className="lamp-22"></span>
                <span className="lamp-23"></span>
                <span className="lamp-24"></span>
                <span className="lamp-25"></span>
                <span className="lamp-26"></span>
                <span className="lamp-27"></span>
                <span className="lamp-28"></span>
              </div>
            </div>
            <div className="helper-2">
              <div className="effect-brush">
                <span className="fur-31"></span>
                <span className="fur-30"></span>
                <span className="fur-29"></span>
                <span className="fur-28"></span>
                <span className="fur-27"></span>
                <span className="fur-26"></span>
                <span className="fur-25"></span>
                <span className="fur-24"></span>
                <span className="fur-23"></span>
                <span className="fur-22"></span>
                <span className="fur-21"></span>
                <span className="fur-20"></span>
                <span className="fur-19"></span>
                <span className="fur-18"></span>
                <span className="fur-17"></span>
                <span className="fur-16"></span>
                <span className="fur-15"></span>
                <span className="fur-14"></span>
                <span className="fur-13"></span>
                <span className="fur-12"></span>
                <span className="fur-11"></span>
                <span className="fur-10"></span>
                <span className="fur-9"></span>
                <span className="fur-8"></span>
                <span className="fur-7"></span>
                <span className="fur-6"></span>
                <span className="fur-5"></span>
                <span className="fur-4"></span>
                <span className="fur-3"></span>
                <span className="fur-2"></span>
                <span className="fur-1"></span>
              </div>
            </div>
            <div className="helper-3">
              <div className="effect-brush">
                <span className="fur-31"></span>
                <span className="fur-30"></span>
                <span className="fur-29"></span>
                <span className="fur-28"></span>
                <span className="fur-27"></span>
                <span className="fur-26"></span>
                <span className="fur-25"></span>
                <span className="fur-24"></span>
                <span className="fur-23"></span>
                <span className="fur-22"></span>
                <span className="fur-21"></span>
                <span className="fur-20"></span>
                <span className="fur-19"></span>
                <span className="fur-18"></span>
                <span className="fur-17"></span>
                <span className="fur-16"></span>
                <span className="fur-15"></span>
                <span className="fur-14"></span>
                <span className="fur-13"></span>
                <span className="fur-12"></span>
                <span className="fur-11"></span>
                <span className="fur-10"></span>
                <span className="fur-9"></span>
                <span className="fur-8"></span>
                <span className="fur-7"></span>
                <span className="fur-6"></span>
                <span className="fur-5"></span>
                <span className="fur-4"></span>
                <span className="fur-3"></span>
                <span className="fur-2"></span>
                <span className="fur-1"></span>
              </div>
            </div>
            <div className="helper-4">
              <div className="effect-brush">
                <span className="fur-31"></span>
                <span className="fur-30"></span>
                <span className="fur-29"></span>
                <span className="fur-28"></span>
                <span className="fur-27"></span>
                <span className="fur-26"></span>
                <span className="fur-25"></span>
                <span className="fur-24"></span>
                <span className="fur-23"></span>
                <span className="fur-22"></span>
                <span className="fur-21"></span>
                <span className="fur-20"></span>
                <span className="fur-19"></span>
                <span className="fur-18"></span>
                <span className="fur-17"></span>
                <span className="fur-16"></span>
                <span className="fur-15"></span>
                <span className="fur-14"></span>
                <span className="fur-13"></span>
                <span className="fur-12"></span>
                <span className="fur-11"></span>
                <span className="fur-10"></span>
                <span className="fur-9"></span>
                <span className="fur-8"></span>
                <span className="fur-7"></span>
                <span className="fur-6"></span>
                <span className="fur-5"></span>
                <span className="fur-4"></span>
                <span className="fur-3"></span>
                <span className="fur-2"></span>
                <span className="fur-1"></span>
              </div>
            </div>
          </netflixintro>
        </div>
      </div>
    </>
  );
};

export default Splash;
