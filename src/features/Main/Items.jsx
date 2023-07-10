/* eslint-disable react/prop-types */
import Item from './Item';

function Items({ items }) {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-3 md:grid-cols-4 lg:grid-cols-5">
        {items?.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default Items;
