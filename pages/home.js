import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Banner from "../components/Banner";
import Discover from "../components/Discover";
import DusraFooter from "../components/DusraFooter";
import Header from "../components/Header";
import Welcome from "../components/home/Welcome";
import { useUserContext } from "../context/userContext";
import { fetchAsyncTrendingMovies } from "../features/movieSlice";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
function HomePage() {
  const { logOutUser, user } = useUserContext();
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init();

    dispatch(fetchAsyncTrendingMovies());
  }, [dispatch]);

  if (user == null) {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }

  return (
    <>
      <Head>
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
        <Discover />
        <DusraFooter />
      </div>
    </>
  );
}

export default HomePage;
