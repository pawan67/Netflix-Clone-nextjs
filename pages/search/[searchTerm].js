import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useRouter } from "next/dist/client/router";
import { APIkey } from "../../common/apis/tmdbApiKey";
import SearchCard from "../../components/SearchCard";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import DusraFooter from "../../components/DusraFooter";
import Card from "../../components/Card";
import Head from "next/head";
import Modal from "../../components/Modal";
const SearchPage = () => {
  const router = useRouter();
  const SearchTerm = router.query.searchTerm;
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&language=en-US&query=${SearchTerm}&page=1&include_adult=false`
      )
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, [SearchTerm]);
  if (data.status !== 200) {
    return (
      <>
        <Header />
        <div className=" bg-black flex justify-center items-center h-screen w-screen">
          <div className=" text-xl flex space-x-2 items-center text-white">
            <AiOutlineLoading3Quarters className=" animate-spin" />
            <p>Loading</p>
          </div>
        </div>
      </>
    );
  }
  if (data.data.total_results === 0) {
    return (
      <div className=" bg-black">
        <Header />
        <div className=" h-screen w-screen text-white  flex justify-center items-center">
          <div className=" px-10 text-xl font-medium">
            No results found for{" "}
            <span className=" underline">{SearchTerm}</span> are you sure you
            typed it correctly?
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>Showing Results for - {SearchTerm}</title>
      </Head>
      <div className=" bg-black">
        <div className=" overflow-x-hidden bg-black min-h-screen">
          <Header />
          <div className=" text-white text-2xl pt-32 pb-5 sm:pt-20 pl-8 sm:pl-10 sm:py-10">
            Search results for {SearchTerm}
          </div>
          <div className=" justify-center gap-5 flex flex-wrap ">
            {data &&
              data.data.results.map((item) => (
                <Card data={item} key={item.id} />
              ))}
          </div>
        </div>
        <DusraFooter />
        <Modal />
      </div>
    </>
  );
};

export default SearchPage;
