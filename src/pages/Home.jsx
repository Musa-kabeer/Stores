function Home() {
  return (
    <div className="">
      <div className="w-full">
        {/* FORM */}
        <form className="relative w-full flex items-center py-2 px-1">
          <button className="absolute z-10">
            <i className="fa-solid fa-magnifying-glass  ml-0.5 text-sm w-7 h-7 flex justify-center text-gray-500 items-center bg-gray-100 rounded-full"></i>
          </button>
          <input
            type="text"
            className="w-full h-5 rounded-full py-4 outline-none text-center text-xs focus:ring-1 focus:ring-gray-200 transition-all duration-500"
            placeholder="Find the product you really wanted..."
          />
        </form>

        {/* PRODUCTS */}
        <div className="px-1 sm:px-2 md:px-4">
          <div className="flex justify-between items-center">
            <label className="font-bold text-sm md:text-xl ld:text-2xl">
              Recommended
            </label>
            <select className="w-4/12 focus:ring-yellow-100 text-xs focus:ring-1 rounded-sm outline-none">
              <option disabled>Sort by</option>
              <option value="latest">lastest</option>
              <option value="oldest">oldest</option>
            </select>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-3 md:grid-cols-4 lg:grid-cols-5">
            <div className="h-full bg-red-300">
              <div className="relative">
                <i className="fa-solid fa-heart right-2 absolute z-10 text-xl text-red-300 w-8 h-8 mt-2 rounded-full cursor-pointer bg-gray-400 flex items-center justify-center"></i>
                <img
                  src="jordan-1.jpg"
                  alt="JORDAN"
                  className="object-cover"
                />
              </div>
              <div className="text-xs leading-5">
                <p>Jordan | Retro High Dior</p>
                <span className="font-bold">$9000</span>
              </div>
            </div>

            <div className="h-full bg-red-300">
              <div className="relative">
                <i className="fa-solid fa-heart right-2 absolute z-10 text-xl text-red-300 w-8 h-8 mt-2 rounded-full cursor-pointer bg-gray-400 flex items-center justify-center"></i>
                <img
                  src="jordan-1.jpg"
                  alt="JORDAN"
                  className="object-cover"
                />
              </div>
              <div className="text-xs leading-5">
                <p>Jordan | Retro High Dior</p>
                <span className="font-bold">$9000</span>
              </div>
            </div>

            <div className="h-full bg-red-300">
              <div className="relative">
                <i className="fa-solid fa-heart right-2 absolute z-10 text-xl text-red-300 w-8 h-8 mt-2 rounded-full cursor-pointer bg-gray-400 flex items-center justify-center"></i>
                <img
                  src="jordan-1.jpg"
                  alt="JORDAN"
                  className="object-cover"
                />
              </div>
              <div className="text-xs leading-5">
                <p>Jordan | Retro High Dior</p>
                <span className="font-bold">$9000</span>
              </div>
            </div>

            <div className="h-full bg-red-300">
              <div className="relative">
                <i className="fa-solid fa-heart right-2 absolute z-10 text-xl text-red-300 w-8 h-8 mt-2 rounded-full cursor-pointer bg-gray-400 flex items-center justify-center"></i>
                <img
                  src="jordan-1.jpg"
                  alt="JORDAN"
                  className="object-cover"
                />
              </div>
              <div className="text-xs leading-5">
                <p>Jordan | Retro High Dior</p>
                <span className="font-bold">$9000</span>
              </div>
            </div>

            <div className="h-full bg-red-300">
              <div className="relative">
                <i className="fa-solid fa-heart right-2 absolute z-10 text-xl text-red-300 w-8 h-8 mt-2 rounded-full cursor-pointer bg-gray-400 flex items-center justify-center"></i>
                <img
                  src="jordan-1.jpg"
                  alt="JORDAN"
                  className="object-cover"
                />
              </div>
              <div className="text-xs leading-5">
                <p>Jordan | Retro High Dior</p>
                <span className="font-bold">$9000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
