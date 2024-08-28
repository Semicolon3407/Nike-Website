import React from "react";

const Testimonial = () => {
  return (
    <div className="lg:py-20 py-12 lg:px-16 px-8 bg-[#f5f6ff]">
      <div className="container mx-auto">
        <h1 className="font-palanquin text-center text-5xl font-bold">
          What Our
          <span className="text-[#FF6452]"> Customers</span> Says?
        </h1>
        <p className="text-lg text-[#6D6D6D] leading-7 m-auto mt-4 max-w-lg text-center">
          Hear genuine stories from our satisfied customers about their
          exceptional experience with us.
        </p>
        <div className="flex">
          <div className="mt-24 flex flex-1  flex-col items-center text-center max-lg:flex-col">
            <div className="flex justify-center items-center flex-col">
              <img
                src="/tenzing.jpg"
                alt="customer1"
                className="rounded-full object-cover w-[120px] h-[120px]"
              />
            </div>
            <p className="mt-6 max-w-sm  text-lg text-[#6D6D6D] leading-7">
              The attention to detail and the quality of the product exceeded my
              expectations. Highly recommended!
            </p>
            <div className="mt-3 flex justify-center text-center items-center gap-2.5">
              <img
                src="/star.png"
                alt="star icon"
                width="24"
                height="24"
                className="object-contain m-0"
              />
              <p className="text-xl text-[#6D6D6D]">4.5</p>
            </div>
            <h1 className="mt-1 font-palanquin text-3xl font-bold">
              Tenzing Chebbe Sherpa
            </h1>
          </div>

          <div className="mt-24 flex flex-1  flex-col items-center text-center max-lg:flex-col">
            <div className="flex justify-center items-center flex-col">
              <img
                src="/hanni.jpg"
                alt="customer1"
                className="rounded-full object-cover w-[120px] h-[120px]"
              />
            </div>
            <p className="mt-6 max-w-sm  text-lg text-[#6D6D6D] leading-7">
              The attention to detail and the quality of the product exceeded my
              expectations. Highly recommended!
            </p>
            <div className="mt-3 flex justify-center text-center items-center gap-2.5">
              <img
                src="/star.png"
                alt="star icon"
                width="24"
                height="24"
                className="object-contain m-0"
              />
              <p className="text-xl text-[#6D6D6D]">4.5</p>
            </div>
            <h1 className="mt-1 font-palanquin text-3xl font-bold">
              Hanni Pham
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
