import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Page1 /> },

        {
          path: "page2",
          element: <Page2 />,
        },
        {
          path: "page3",
          element: <Page3 />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
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
