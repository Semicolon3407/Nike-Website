import React from "react";

const Card = ({ img, rating, title, price }) => {
  return (
    <div className="relative overflow-hidden w-60 rounded-lg hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
      <img
        src={img}
        alt={title}
        className="w-60 h-auto rounded-t-lg bg-[url('/bgFirst.jpg')]"
      />
      <div className="p-4 bg-white">
        <div className="flex justify-start items-center mb-2">
          <img src="star.png" alt="rating" className="w-10 h-auto" />
          <p className="ml-2 text-lg text-[#6D6D6D]">({rating})</p>
        </div>
        <h1 className="text-xl font-semibold font-palanquin">{title}</h1>
        <p className="mt-1 text-[#FF6452] text-xl font-semibold">${price}</p>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div id="products" className="lg:py-24 py-12 lg:px-16 px-8">
      <div className="container min-h gap-y-10 mx-10 px-4">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-5xl font-palanquin font-bold">
            <span className="text-[#FF6452]">Popular</span> Products
          </h2>
          <p className="lg:max-w-lg text-[#6D6D6D] leading-7">
            Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design, and value.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6 mt-12">
          <Card
            img="/one.png"
            price="200.20"
            rating="4.5"
            title="Nike Air Jordan-01"
          />
          <Card
            img="/five.png"
            price="210.20"
            rating="4.2"
            title="Nike Air Jordan-10"
          />
          <Card
            img="/shoes1.png"
            price="220.20"
            rating="4.6"
            title="Nike Air Jordan-100"
          />
          <Card
            img="/four.png"
            price="230.20"
            rating="4.7"
            title="Nike Air Jordan-001"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
