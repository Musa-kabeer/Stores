/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Form from '../features/Main/Form';
import Items from '../features/Main/Items';
import Paginate from '../features/Main/Paginate';
import Loader from '../ui/Loader';

function Home() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchAllProduct() {
      setIsLoading(true);

      const res = await fetch('https://dummyjson.com/products');

      const data = await res.json();
      setItems(data.products);

      setIsLoading(false);
    }

    fetchAllProduct();
  }, []);

  useEffect(
    function () {
      async function fetchQuery() {
        setIsLoading(true);

        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );

        const data = await res.json();
        setItems(data.products);

        setIsLoading(false);
      }

      fetchQuery();
    },
    [query]
  );

  return (
    <div className="px-3 md:px-5">
      <div className="w-full">
        <Form query={query} setQuery={setQuery} />

        <hr />

        <div>
          <Paginate />
          <hr />
          {isLoading && <Loader />}

          {!items.length && (
            <p className="text-center h-screen pt-5">
              No result for the above query....
            </p>
          )}

          {items && <Items items={items} />}
        </div>
      </div>
    </div>
  );
}

export default Home;
