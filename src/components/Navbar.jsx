import React, { useState } from "react";
import logo from "../../public/logo.png";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="w-full h-20 flex flex-col justify-center items-center lg:bg-transparent bg-white lg:absolute fixed z-20">
      <div className="container mx-auto lg:px-6">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between xl:items-baseline items-center text-[#1222E]">
          <div className="flex flex-col gap-y-4">
            <span
              onClick={() => (window.location.href = "/")}
              className="flex items-center gap-x-2 font-bold text-2xl cursor-pointer"
            >
              <img src={logo} alt="Nike Logo" width={50} />
            </span>
          </div>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            <li>
              <a
                href="#home"
                className="font-montserrat leading-normal text-lg text-[#837c7c] no-underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                className="font-montserrat leading-normal text-lg text-[#837c7c] no-underline"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="font-montserrat leading-normal text-lg text-[#837c7c] no-underline"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#contact-us"
                className="font-montserrat leading-normal text-lg text-[#837c7c] no-underline"
              >
                Contact Us
              </a>
            </li>
          </ul>

          {dropdown ? (
            <div
              onClick={showDropdown}
              className="lg:hidden text-[22px] cursor-pointer text-black"
            >
              <MdClose />
            </div>
          ) : (
            <div
              onClick={showDropdown}
              className="lg:hidden text-[22px] cursor-pointer text-black"
            >
              <HiMenuAlt3 />
            </div>
          )}
        </div>

        {dropdown && (
          <div className="lg:hidden w-full h-[100vh] fixed top-20 bg-white transition ease-in-out duration-100 z-10">
            <div className="w-full h-[320px] flex flex-col items-baseline pt-8 gap-4 text-[#1222E]">
              <ul className="text-center p-0 flex flex-col justify-center w-full gap-y-8">
                <li>
                  <a
                    href="#home"
                    className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about_us"
                    className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#contact_us"
                    className="font-montserrat leading-normal text-lg text-[#b2ab9f] no-underline"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
