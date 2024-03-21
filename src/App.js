import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import River from './pages/river/River';
import Window from './pages/window/Window';

const router = createBrowserRouter([
  {
    path: '/river',
    element: (
      <River />
    )
  },
  {
    path: '/window',
    element: (
      <Window />
    )
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
