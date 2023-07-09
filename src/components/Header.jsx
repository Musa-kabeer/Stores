import { useState } from 'react';
import Logo from '../ui/Logo';

function Header() {
  const [slider, setSlider] = useState(false);

  function handleSliderOut() {
    setSlider(true);
  }

  function handleSlideIn() {
    setSlider(false);
  }

  return (
    <header className="relative flex justify-between items-center h-[70px] px-3 bg-gray-300">
      <Logo />

      {/* NAVBAR */}
      <nav className="hidden md:flex">
        <ul className="flex gap-5 font-medium lg:gap-7 uppercase">
          <li className="font-medium text-xs md:font-semibold md:text-sm lg:font-bold lg:text-base">
            smartphones
          </li>
          <li className="font-medium text-xs md:font-semibold md:text-sm lg:font-bold lg:text-base">
            laptops
          </li>
          <li className="font-medium text-xs md:font-semibold md:text-sm lg:font-bold lg:text-base">
            Dresses
          </li>
          <li className="font-medium text-xs md:font-semibold md:text-sm lg:font-bold lg:text-base">
            Shoes
          </li>
          <li className="font-medium text-xs md:font-semibold md:text-sm lg:font-bold lg:text-base">
            Watches
          </li>
        </ul>
      </nav>

      {/* ICONS */}
      <div className="flex items-center gap-6 text-gray-700 text-xl cursor-pointer">
        <div className="cursor-pointer">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className="relative cursor-pointer">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="absolute -top-2 -right-[5px] text-xs flex justify-center items-center bg-red-400 w-[20px] h-[20px] rounded-full md:w-[15px] md:h-[15px] md:-top-1">
            1
          </span>
        </div>

        <div className="cursor-pointer">
          <i className="fa-solid fa-user"></i>
        </div>

        <div className="bg-gray-100 w-8 h-8 md:w-6 rounded-full flex items-center justify-center md:hidden">
          <i
            className="fa-solid fa-grip-lines"
            onClick={handleSliderOut}
          ></i>
        </div>
      </div>

      {/* SLIDER */}
      <div
        className={`absolute h-screen w-full top-0 left-0 right-0 bottom-0 backdrop-blur-xl bg-black/1 transition-all duration-500 ${
          !slider ? '-translate-x-[2000px]' : 'translate-x-0'
        }`}
      >
        <div className="absolute h-screen w-2/3 bg-gray-500 left-0 top-0 md:hidden">
          <div
            className="text-4xl text-right mr-4 cursor-pointer text-gray-50"
            onClick={handleSlideIn}
          >
            &times;
          </div>
          <ul className="py-12 flex flex-col gap-1 uppercase transition-all duration-300">
            <li className="text-gray-800 text-sm font-bold cursor-pointer hover:bg-gray-200 w-full py-3 px-2 rounded-r-full">
              smartphones
            </li>
            <li className="text-gray-800 text-sm font-bold cursor-pointer hover:bg-gray-200 w-full py-3 px-2 rounded-r-full">
              laptops
            </li>
            <li className="text-gray-800 text-sm font-bold cursor-pointer hover:bg-gray-200 w-full py-3 px-2 rounded-r-full">
              Dresses
            </li>
            <li className="text-gray-800 text-sm font-bold cursor-pointer hover:bg-gray-200 w-full py-3 px-2 rounded-r-full">
              Shoes
            </li>
            <li className="text-gray-800 text-sm font-bold cursor-pointer hover:bg-gray-200 w-full py-3 px-2 rounded-r-full">
              Watches
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
