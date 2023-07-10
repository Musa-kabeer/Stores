import { useRouteError } from 'react-router';

function Error() {
  const error = useRouteError();

  console.log(error);
  return (
    <div>
      <h1>Something went wrong! </h1>

      <p>{error}</p>
    </div>
  );
}

export default Error;
