function Navbar() {
  return (
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
  );
}

export default Navbar;
