import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Link,
  Navigate,
  useNavigate,
  useLoaderData,
} from "react-router-dom";
import axios from "axios";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      loader: async () => {
        return axios.get("https://jsonplaceholder.typicode.com/posts");
      },
      children: [
        { index: true, element: <h1>Page1</h1> },

        {
          path: "page2",
          element: <Page2 />,
          loader: async () => {
            return axios.get("https://jsonplaceholder.typicode.com/posts");
          },
        },
        {
          path: "page3",
          element: <h1>Page3</h1>,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} fallbackElement={<h1>In Progress</h1>} />
  );
}

function RootLayout() {
  return (
    <>
      <Link to="/" className="fs-3">
        Page1 |
      </Link>
      <Link to="/page2" className="fs-3">
        Page2 |
      </Link>
      <Link to="/page3" className="fs-3">
        Page3 |
      </Link>
      <Outlet />
    </>
  );
}

function Page1() {
  return (
    <div>
      <h1>Page1</h1>
    </div>
  );
}

function Page2() {
  let data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h1>Page2</h1>
    </div>
  );
}

function Page3() {
  let navigate = useNavigate();

  let logoutAction = () => {
    localStorage.clear();
    navigate(0);
  };
  return (
    <div>
      <h1>Logout</h1>
      <input type="button" value="Logout" onClick={logoutAction} />
    </div>
  );
}

export default App;
