import React from "react";

const AboutUs = () => {
  const Card = ({ img, title, text }) => {
    return (
      <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full h-72 rounded-[20px] shadow-zinc-400 px-10 py-16 shadow-lg hover:shadow-zinc-400 transform hover:scale-105 transition-transform duration-300 border-2 border-slate-100">
        <div className="w-11 h-11 flex justify-center items-center bg-[#ff6452] rounded-full">
          <img src={img} alt="card" width="30" height="30" />
        </div>
        <h1 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
          {title}
        </h1>
        <p className="mt-3 break-words text-lg leading-normal text-[slate-gray]">
          {text}
        </p>
      </div>
    );
  };
  return (
    <>
      <div id="about-us" className="lg:px-[124px] px-4 md:px-8">
        <main className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 w-full">
          <div className="flex flex-1 flex-col">
            <h1 className="font-palanquin text-3xl sm:text-4xl md:text-5xl leading-[38px] sm:leading-[48px] md:leading-[58px] capitalize font-bold lg:max-w-lg">
              We Provide You
              <span className="text-[#FF6452]"> Super</span>
              <span className="text-[#FF6452]"> Quality</span> Shoes
            </h1>
            <p className="mt-4 w-full sm:w-[530px] text-base sm:text-lg text-[#6D6D6D] leading-6 sm:leading-7">
              Ensuring premium comfort and style, our meticulously crafted
              footwear is designed to elevate your experience, providing you
              with unmatched quality, innovation, and a touch of elegance.
            </p>
            <p className="mt-6 w-full sm:w-[430px] text-base sm:text-lg text-[#6D6D6D] leading-6 sm:leading-7">
              Our dedication to detail and excellence ensures your satisfaction
            </p>
            <div className="mt-8 md:mt-11">
              <button className="flex justify-center items-center gap-2 px-5 py-3 md:px-7 md:py-4 border-none text-base md:text-lg leading-none rounded-full bg-[#FF6452] text-white hoverBtn">
                View details
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
            <img
              src="/shoes2.png"
              alt="Shoes"
              width={570}
              height={522}
              className="object-contain max-w-full h-auto"
            />
          </div>
        </main>
      </div>
      <div className="lg:px-16 px-4 md:px-8 py-10">
        <div className="flex justify-center flex-wrap gap-4 md:gap-6 lg:gap-9">
          <Card
            img="/truck-fast.png"
            text="Enjoy seamless shopping with our complimentary shipping service."
            title="Free Shipping"
          />
          <Card
            img="/shield-tick.png"
            text="Experience worry-free transactions with our secure payment options."
            title="Secure Payment"
          />
          <Card
            img="/support.png"
            text="Our dedicated team is here to assist you every step of the way."
            title="Love to help you"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
