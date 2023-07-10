/* eslint-disable react/prop-types */

function Slider({ slider, onSliderIn }) {
  return (
    <div
      className={`md:hidden absolute h-screen w-full top-0 left-0 z-50 right-0 bottom-0 backdrop-blur-xl bg-black/1 transition-all duration-500 ${
        !slider ? '-translate-x-[2000px]' : 'translate-x-0'
      }`}
    >
      <div className="absolute h-screen w-2/3 bg-gray-500 left-0 top-0 md:hidden">
        <div
          className="text-4xl text-right mr-4 cursor-pointer text-gray-50"
          onClick={onSliderIn}
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
  );
}

export default Slider;
