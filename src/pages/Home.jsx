function Home() {
  return (
    <div className="px-2">
      <div className="w-full">
        {/* FORM */}
        <form className="relative w-full flex items-center px-1 sm:w-7/12 sm:m-auto py-4 md:w-80">
          <button className="absolute z-10">
            <i className="fa-solid fa-magnifying-glass  ml-0.5 text-sm w-7 h-7 flex justify-center text-gray-500 items-center bg-gray-100 rounded-full"></i>
          </button>
          <input
            type="text"
            className="w-full h-5 rounded-full py-4 outline-none text-center text-xs focus:ring-1 focus:ring-gray-200 transition-all duration-500"
            placeholder="Find the product you really wanted..."
          />
        </form>
        <hr />

        {/* PRODUCTS */}
        <div className="px-1 py-3 sm:px-2 md:px-4">
          <div className="flex justify-between items-center">
            <label className="font-bold md:text-xl ld:text-2xl">
              Recommended
            </label>
            <select className="w-4/12 focus:ring-yellow-100 text-xs focus:ring-1 rounded-sm outline-none py-1 px-1 md:w-40">
              <option disabled>Sort by</option>
              <option value="latest">lastest</option>
              <option value="oldest">oldest</option>
            </select>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-3 md:grid-cols-4 lg:grid-cols-5">
            <div className="h-full bg-gray-50 rounded-md">
              <div className="relative">
                <div className="absolute right-2 rounded-full cursor-pointer flex items-center justify-center mt-2">
                  <i className="fa-regular fa-heart text-xl border-1 text-white"></i>
                </div>
                <img
                  src="jordan-1.jpg"
                  alt="JORDAN"
                  className="object-cover"
                />
              </div>
              <div className="leading-5 my-2 ml-2">
                <p className="text-sm font-bold">
                  Jordan | Retro High Dior
                </p>
                <span className="font-semibold">$9000</span>
              </div>
            </div>
            <div className="h-full bg-gray-50 rounded-md">
              <div className="relative">
                <div className="absolute right-2 rounded-full cursor-pointer flex items-center justify-center mt-2">
                  <i className="fa-regular fa-heart text-xl border-1 text-white"></i>
                </div>
                <img
                  src="jordan-1.jpg"
                  alt="JORDAN"
                  className="object-cover"
                />
              </div>
              <div className="leading-5 my-2 ml-2">
                <p className="text-sm font-bold">
                  Jordan | Retro High Dior
                </p>
                <span className="font-semibold">$9000</span>
              </div>
            </div>
            <div className="h-full bg-gray-50 rounded-md">
              <div className="relative">
                <div className="absolute right-2 rounded-full cursor-pointer flex items-center justify-center mt-2">
                  <i className="fa-regular fa-heart text-xl border-1 text-white"></i>
                </div>
                <img
                  src="jordan-1.jpg"
                  alt="JORDAN"
                  className="object-cover"
                />
              </div>
              <div className="leading-5 my-2 ml-2">
                <p className="text-sm font-bold">
                  Jordan | Retro High Dior
                </p>
                <span className="font-semibold">$9000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
