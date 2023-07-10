function Paginate() {
  return (
    <div className="flex justify-between items-center py-3">
      <label className="font-bold md:text-xl ld:text-2xl">
        Recommended
      </label>
      <select className="w-4/12 focus:ring-yellow-100 text-xs focus:ring-1 rounded-sm outline-none py-1 px-1 md:w-40">
        <option disabled>Sort by</option>
        <option value="latest">lastest</option>
        <option value="oldest">oldest</option>
      </select>
    </div>
  );
}

export default Paginate;
