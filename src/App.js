import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './screens/Home';
import { Stadistics } from './screens/Stadistics';
import { Comparison } from './screens/Comparison';
import { Score } from './screens/Score';
import { History } from './screens/History';
import { Timer } from './screens/Timer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/comparison",
    element: <Comparison/>,
  },
  {
    path: "/score",
    element: <Score/>,
  },
  {
    path: "/history",
    element: <History/>,
  },
  {
    path: "/stadistics",
    element: <Stadistics/>,
  },
  {
    path: "/timer",
    element: <Timer/>,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
