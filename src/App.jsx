import {createBrowserRouter, RouterProvider, Link} from "react-router-dom";
import Ohatra from "./Ohatra";

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>

      <li>
        <Link to="/ohatra">ohatra</Link>
      </li>

      <li>
        <Link to="/eto-ambony-eto">eto ambony eto</Link>
      </li>

      <li>
        <Link to="klsdjfklsdjfk">tsy aiko</Link>
      </li>

    </ul>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        Home

        <Menu />
      </div>
    )
  },
  {
    path: "/ohatra",
    element: (
      <div>
        Ohatra
        <Menu />
      </div>
    )
  },
  {
    path: "/eto-ambony-eto",
    element: (
      <div>
        Eto ambony eto
        <Menu />
      </div>

    )
  },
  {
    path: "*",
    element: (
      <div>
        <h1>tsy hita</h1>
        <Link to="/">go back home</Link>
      </div>
    )
  }
])


export default function App() {
  return (
      <RouterProvider router={router} />
  );
}
