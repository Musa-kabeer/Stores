import Logo from '../ui/Logo';

function Header() {
  return (
    <header className="flex justify-between items-center h-[70px] px-3 bg-gray-300">
      <Logo />

      <nav className="hidden md:flex">
        <ul className="flex gap-5 font-medium lg:gap-7">
          <li className="font-medium uppercase text-xs md:font-semibold md:text-sm lg:font-bold lg:text-base">
            smartphones
          </li>
          <li className="font-medium uppercase text-xs md:font-semibold md:text-sm lg:font-bold lg:text-base">
            laptops
          </li>
          <li className="font-medium uppercase text-xs md:font-semibold md:text-sm lg:font-bold lg:text-base">
            Dresses
          </li>
          <li className="font-medium uppercase text-xs md:font-semibold md:text-sm lg:font-bold lg:text-base">
            Shoes
          </li>
          <li className="font-medium uppercase text-xs md:font-semibold md:text-sm lg:font-bold lg:text-base">
            Watches
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-6 text-gray-700 text-xl cursor-pointer">
        <div className="cursor-pointer">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className="relative cursor-pointer">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="absolute -top-2 -right-[5px] text-xs flex justify-center items-center bg-red-400 w-[20px] h-[20px] rounded-full">
            1
          </span>
        </div>

        <div className="cursor-pointer">
          <i className="fa-solid fa-user"></i>
        </div>

        <div className="bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center md:hidden">
          <i className="fa-solid fa-grip-lines"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
