import {Navigate, createBrowserRouter, RouterProvider, Link, Outlet} from "react-router-dom";

const NotFound = () => {
  return (
    <h1>very</h1>
  )
}

const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="ohatra">Ohatra</Link>
        </li>
      </ul>

      <div>
        <Outlet />
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

const Ohatra = () => {
  return (
    <div>
      <h1>Ohatra</h1>
      <Link to="/">back home</Link>
    </div>
  )
}

const ROUTER = createBrowserRouter([
  {
    path: "/app",
    element: <Layout />,
    children: [
      {
        // route rehefa "/app" fotsiny
        index: true,
        element: <Navigate to="home" />,
      },
      {
        // "/app/home"
        path: "home",
        element: <Home />
      },
      {
        // "/app/ohatra"
        path: "ohatra",
        element: <Ohatra />
      },
      {
        path: "*",
        element: <h1>tsy misy</h1>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);


export default function App() {
  return (
    <RouterProvider router={ROUTER} />
  )
}
