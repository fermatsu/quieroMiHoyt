import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './screens/Home';
import { Animes } from './screens/Animes';

const router = createBrowserRouter([
  {
    path: "/",
    element: Home,
  },
  {
    path: "/list",
    element: Animes,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
