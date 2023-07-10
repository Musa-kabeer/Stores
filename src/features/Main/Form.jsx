/* eslint-disable react/prop-types */
function Form({ query, setQuery }) {
  return (
    <div className="relative w-full flex items-center px-1 sm:w-7/12 sm:m-auto py-4 md:w-80">
      <button className="absolute z-10">
        <i className="fa-solid fa-magnifying-glass  ml-0.5 text-sm w-7 h-7 flex justify-center text-gray-500 items-center bg-gray-100 rounded-full"></i>
      </button>
      <input
        type="text"
        className="w-full h-5 rounded-full py-4 outline-none text-center text-xs focus:ring-1 focus:ring-gray-200 transition-all duration-500"
        placeholder="Find the product you really wanted..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default Form;
