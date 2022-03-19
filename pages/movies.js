import React, { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import Banner from "../components/Banner";
import Discover from "../components/Discover";
import DusraFooter from "../components/DusraFooter";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Head from "next/dist/shared/lib/head";
import DiscoverMovies from "../components/DiscoverMovies";
import { useUserContext } from "../context/userContext";
import AOS from "aos";
import "aos/dist/aos.css";
const movies = () => {
  const { logOutUser, user } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    if (user === null) {
      router.push("/");
    } else {
      router.push("/movies");
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>Netflix - Watch TV shows Online, Watch Movies Online</title>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <div className=" bg-black overflow-x-hidden">
        <Header />
        <Banner />
        <DiscoverMovies />
        <DusraFooter />
        <Modal />
      </div>
    </>
  );
};

export default movies;
