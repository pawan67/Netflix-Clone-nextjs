import React from "react";
import Accordian from "./Accordian";
import { MdArrowForwardIos } from "react-icons/md";

function AccordianPage() {
  return (
    <div className=" py-20 text-white bg-black">
      <div className=" mx-auto text-center">
        <h1 className=" text-5xl font-bold">Frequently Asked Questions</h1>

        <div className=" mt-16 space-y-3">
          <Accordian
            answers="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
"
            question="What is Netflix?"
          />
          <Accordian
            question="How much does Netflix cost?"
            answers="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
          />
          <Accordian
            question="Where can I watch?"
            answers="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
          />
          <Accordian
            question="How do I cancel?"
            answers="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
          />
          <Accordian
            question="What can I watch on Netflix?"
            answers="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
          />
          <Accordian
            question="Is Netflix good for kids"
            answers="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
          />
        </div>
        <p className=" text-xl mt-20">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className=" text-center mx-auto mt-16  w-3/4 text-white md:w-[800px]">
        <div className="  pb-20">
            <form className=" w-full flex flex-col sm:flex-row  justify-center mt-5">
              <input
                className=" py-4 rounded-r-sm sm:rounded-r-none sm:py-0 rounded-l-sm px-5 outline-none text-black w-full"
                type="text"
                placeholder="Email address"
              />
              <div className=" cursor-pointer mx-auto sm:mx-auto mt-10 sm:mt-0 rounded-r-sm w-32 text-sm sm:w-64 sm:py-4 sm:text-2xl py-2 justify-center rounded-l-sm sm:rounded-l-none bg-[#f40612] flex items-center">
                Get Started
                <MdArrowForwardIos className=" ml-3" />
              </div>
            </form>
          </div>
          </div>
      </div>
    </div>
  );
}

export default AccordianPage;
