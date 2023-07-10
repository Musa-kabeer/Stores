/* eslint-disable react/prop-types */

function Icons({ onSliderOut }) {
  return (
    <div className="flex items-center gap-4 text-gray-700 text-base cursor-pointer">
      <div className="cursor-pointer">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="relative cursor-pointer">
        <i className="fa-solid fa-cart-shopping"></i>
        <span className="absolute -top-1 -right-[5px] text-[9px] flex justify-center items-center text-gray-50 bg-stone-400 w-[14px] h-[14px] rounded-full md:w-[15px] md:h-[15px] md:-top-1">
          1
        </span>
      </div>

      <div className="cursor-pointer">
        <i className="fa-solid fa-user"></i>
      </div>

      <div className="bg-gray-100 w-8 h-8 md:w-6 rounded-full flex items-center justify-center md:hidden">
        <i
          className="fa-solid fa-grip-lines"
          onClick={onSliderOut}
        ></i>
      </div>
    </div>
  );
}

export default Icons;
