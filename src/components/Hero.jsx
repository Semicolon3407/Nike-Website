import React, { useEffect, useState } from "react";
import { HiArrowCircleRight } from "react-icons/hi";

const Hero = () => {
  const [imageUrl, setImageUrl] = useState("/seven.png");

  useEffect(() => {
    setImageUrl(imageUrl);
  }, [imageUrl]);

  return (
    <div
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center items-center min-h-screen gap-y-10 container mx-auto px-4"
    >
      <section className="relative z-10 xl:w-2/5 flex flex-col justify-center items-start px-8 pt-28">
        <h1 className="mt-10 font-palanquin text-7xl max-sm:text-[72px] leading-[106px] max-sm:leading-[82px] font-bold">
          <span className="bg-white relative z-10 pr-10 lg-text-7xl font-palanquin xl:whitespace-nowrap">
            The New Arrivals
          </span>{" "}
          <br />
          <span className="text-[#ff6452] inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="text-[#6D6D6d] text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <button className="flex justify-center items-center gap-2 px-7 py-4 border-none text-lg leading-none rounded-full bg-[#FF6452] text-white hoverBtn">
          Shop now
          <HiArrowCircleRight className="ml-2 rounded-full text-2xl" />
        </button>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          <div>
            <p className="text-4xl font-palanquin font-bold text-black">1k+</p>
            <p className="leading-7 font-montserrat text-[6D6D6D]">Brands</p>
          </div>
          <div>
            <p className="text-4xl font-palanquin font-bold text-black">904</p>
            <p className="leading-7 font-montserrat text-[6D6D6D]">Shops</p>
          </div>
          <div>
            <p className="text-4xl font-palanquin font-bold text-black">25k+</p>
            <p className="leading-7 font-montserrat text-[6D6D6D]">Customers</p>
          </div>
        </div>
      </section>

      <section className="relative flex-1 flex justify-center items-center xl:min-h-screen mx-xl:py-40 bg-[#2f3233] bg-[url('/bgFirst.jpg')] bg-cover bg-center">
        <img
          src={imageUrl}
          alt=""
          width="610"
          height="500"
          className="object-contain relative z-10 max-w-full h-auto"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          <div>
            <div
              style={{
                borderColor: imageUrl === "/seven.png" ? "#ff6452" : "",
              }}
              className="border-2 border-solid rounded-xl border-transparent cursor-pointer mx-sm:flex-1"
            >
              <div className="flex justify-center items-center bg-[url('/bgFirst.jpg')] bg-center bg-cover sm:w-40 sm:h-40 rounded-xl maz-sm:p-4">
                <img
                  src="/seven.png"
                  alt="Shoes"
                  width="127"
                  height="103"
                  className="object-contain max-w-full h-auto"
                  onClick={() => setImageUrl("/seven.png")}
                />
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                borderColor: imageUrl === "/two.png" ? "#ff6452" : "",
              }}
              className="border-2 border-solid rounded-xl border-transparent cursor-pointer mx-sm:flex-1"
            >
              <div className="flex justify-center items-center bg-[url('/bgFirst.jpg')] bg-center bg-cover sm:w-40 sm:h-40 rounded-xl maz-sm:p-4">
                <img
                  src="/two.png"
                  alt=""
                  width="127"
                  height="103"
                  className="object-contain max-w-full h-auto"
                  onClick={() => setImageUrl("/two.png")}
                />
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                borderColor: imageUrl === "/eight.png" ? "#ff6452" : "",
              }}
              className="border-2 border-solid rounded-xl border-transparent cursor-pointer mx-sm:flex-1"
            >
              <div className="flex justify-center items-center bg-[url('/bgFirst.jpg')] bg-center bg-cover sm:w-40 sm:h-40 rounded-xl maz-sm:p-4">
                <img
                  src="/eight.png"
                  alt=""
                  width="127"
                  height="103"
                  className="object-contain max-w-full h-auto"
                  onClick={() => setImageUrl("/eight.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
