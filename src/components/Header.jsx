import Logo from '../ui/Logo';

function Header() {
  return (
    <header className="flex justify-between items-center h-[70px] px-3 bg-gray-300 md:flex-col">
      <Logo />

      <nav className="hidden">
        <ul className="flex gap-2">
          <li className="text-xl font-medium uppercase">
            smartphones
          </li>
          <li className="text-xl font-medium uppercase">laptops</li>
          <li className="text-xl font-medium uppercase">Dresses</li>
          <li className="text-xl font-medium uppercase">Shoes</li>
          <li className="text-xl font-medium uppercase">Watches</li>
        </ul>
      </nav>

      <div className="flex items-center gap-6 text-gray-700 text-xl">
        <div>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className="relative">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="absolute -top-2 -right-[5px] text-xs flex justify-center items-center bg-red-400 w-[20px] h-[20px] rounded-full">
            1
          </span>
        </div>

        <div>
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
