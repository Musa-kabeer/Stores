/* eslint-disable react/prop-types */

function Item({ item }) {
  // console.log(item);
  return (
    <div className="h-full bg-gray-50 rounded-md">
      <div className="relative h-3/4 w-full">
        <div className="absolute right-2 rounded-full cursor-pointer flex items-center justify-center mt-2">
          <i className="fa-regular fa-heart text-xl border-1 text-red-400"></i>
        </div>
        <img
          src={item.images[0]}
          alt={item.title}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="ml-2">
        <p className="text-[11px] font-light text-gray-900 md:text-[14px]">
          {item.title}
        </p>
        <span className="font-medium text-[10px]  mt-[2px] md:text-[14px]">
          ${item.price}
        </span>
      </div>
    </div>
  );
}

export default Item;
