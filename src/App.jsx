import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import AppLayout from './features/AppLayout';
import Error from './features/Error';
import Home from './pages/Home';

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
