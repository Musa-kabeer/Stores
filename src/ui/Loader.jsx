import BarLoader from 'react-spinners/ClipLoader';

function Loader() {
  const color = '#44403c';

  return (
    <div className="h-screen flex justify-center items-center">
      <BarLoader
        color={color}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
