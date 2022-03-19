import React from "react";
import { useUserContext } from "../context/userContext";

const Modal = ({ data }) => {
  const { isModal, setIsModal } = useUserContext();
  const { ModalData, setModalData } = useUserContext();

  return (
    <div>
      {" "}
      <div
        onClick={() => setIsModal(false)}
        className={` ${
          isModal
            ? " transition-all fixed flex justify-center items-center bottom-0 top-0 left-0 backdrop-blur-sm right-0 z-50"
            : "hidden"
        }  `}
      >
        <div className="  ">
          <div
            data-aos="fade-in"
            className=" rounded-xl bg-[#181818] w-[90vw] sm:w-[600px]"
          >
            <img
              className=" rounded-lg rounded-b-none w-full h-full"
              src={`https://image.tmdb.org/t/p/original${ModalData.backdrop_path}`}
              alt=""
            />
            <div className=" p-10">
              <h1 className=" text-white text-2xl font-bold">
                {ModalData.title}
              </h1>
              <h2 className=" text-white mt-5 text-lg font-medium">
                {ModalData.overview}
              </h2>

              <hr className=" my-5" />

              <h1 className=" text-white text-xl font-medium">
                Info on{" "}
                <span className=" font-semibold">{ModalData.title}</span>
              </h1>

              <div className=" font-semibold mt-5 text-[#636363]">
                <div>
                  Release date :{" "}
                  <span className=" text-white">{ModalData.release_date}</span>
                </div>
                <div>
                  Average vote :{" "}
                  <span className=" text-white">{ModalData.vote_average}</span>
                </div>
                <div>
                  Original Language :{" "}
                  <span className=" text-white">
                    {ModalData.original_language}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
