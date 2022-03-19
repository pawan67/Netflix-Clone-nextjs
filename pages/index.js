import Head from "next/head";
import Image from "next/image";
import { useUserContext } from "../context/userContext";

import Welcome from "../components/home/Welcome";
import AccordianPage from "../components/home/AccordianPage";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Modal from "../components/Modal";
import DusraFooter from "../components/DusraFooter";
// ..
export default function Home() {
  const { user } = useUserContext();

  const router = useRouter();

  useEffect(() => {
    AOS.init();

    if (user != null) {
      router.push("/splash");
    }
  });
  return (
    <div className=" bg-black">
      <Head>
        <meta name="title" content="Netflix Clone - pawan67" />
        <meta
          name="description"
          content="Netflix clone built with Next.js and TailwindCSS for the frontend and Firebase for the backend using React Hooks."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="nnetflix-clone-p67.vercel.app" />
        <meta property="og:title" content="Netflix Clone - pawan67" />
        <meta
          property="og:description"
          content="Netflix clone built with Next.js and TailwindCSS for the frontend and Firebase for the backend using React Hooks."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dewctbby3/image/upload/v1647663227/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w_dugogx.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="netflix-clone-p67.vercel.app" />
        <meta property="twitter:title" content="Netflix Clone - pawan67" />
        <meta
          property="twitter:description"
          content="Netflix clone built with Next.js and TailwindCSS for the frontend and Firebase for the backend using React Hooks."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dewctbby3/image/upload/v1647663227/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w_dugogx.jpg"
        />
        <title>Netflix - Watch TV shows Online, Watch Movies Online</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Welcome />
      <AccordianPage />
      <DusraFooter />
    </div>
  );
}
