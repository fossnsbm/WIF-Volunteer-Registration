import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <seciton>
        <NavBar />
        <div className="pl-10 lg:flex lg:flex:row">
          <div className="flex  md:min-h-[60rem] flex-col mt-5 md:mt-0 md:justify-center gap-20 md:gap-11 pr-10 md:pl-[10rem] lg:w-[95%] lg:gap-[5rem] lg:pr-0 lg:mr-0 ">
            <div className="flex flex-col items-center md:items-start gap-7 md:gap-10 lg:items-start lg:w-[100%]">
              <h1 className="font-bold text-7xl md:text-8xl md:text-left text-center lg:text-left lg:text-[7rem]">
                {" "}
                <span className="text-[#26B2B7]">Girls,</span> It&apos;s <br />{" "}
                your chance.
              </h1>
              <div className="md:w-[75%]">
                <p className="text-center md:text-xl md:text-left lg:text-left">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien.Lorem ipsum dolor sit amet consectetur adipiscing elit
                  Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                  amet sapien.Lorem ipsum dolor sit amet consectetur adipiscing
                  elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
                  sit amet sapien.
                </p>
              </div>
              <div>
                <Link to={"/register"}>
                  <button
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    className="btn-primary mt-5"
                  >
                    Become a Volunteer
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start lg:items-start">
              <div className="flex gap-4">
                <img src="/FOSSlogo.png" alt="FOSS logo" />
                <img
                  className="h-[2.3rem] my-auto"
                  src="/WIFlogo.png"
                  alt="Women In FOSS logo"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end items-end lg:w-[100%]">
            <img
              src="/heroImg.png"
              alt="WIF Hero"
              className="right-0 w-[80%] md:w-[65%] lg:w-[100%]"
            />
          </div>
        </div>
      </seciton>
      <div className="mt-auto">
      <Footer />

      </div>
    </div>
  );
}

export default Home;
