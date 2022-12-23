import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Link,
} from "react-router-dom";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Page1 /> },
        { path: "page2", element: <Page2 /> },
        { path: "page3", element: <Page3 /> },
        { path: "login", element: <Login /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

function RootLayout() {
  return (
    <div>
      <Link to="/login" className="fs-3">
        Login |
      </Link>
      <Link to="/" className="fs-3">
        Page1 |
      </Link>
      <Link to="/page2" className="fs-3">
        Page2 |
      </Link>
      <Link to="/page3" className="fs-3">
        Page3
      </Link>
      <Outlet />
    </div>
  );
}

function Login() {
  return (
    <div>
      <h1>Login</h1>
    </div>
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
  return (
    <div>
      <h1>Page3</h1>
    </div>
  );
}

export default App;
