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
          path: "login",
          element: (
            <UnProtectedRoute>
              <Login />
            </UnProtectedRoute>
          ),
        },
        {
          path: "page2",
          element: (
            <ProtectedRoute>
              <Page2 />
            </ProtectedRoute>
          ),
        },
        {
          path: "page3",
          element: (
            <ProtectedRoute>
              <Page3 />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

function ProtectedRoute({ children }) {
  if (!localStorage.getItem("jwt")) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
}

function UnProtectedRoute({ children }) {
  if (localStorage.getItem("jwt")) {
    return <Navigate to={"/"} replace={true} />;
  }

  return children;
}

function RootLayout() {
  let jwt = localStorage.getItem("jwt");

  if (!jwt) {
    return (
      <>
        <Link to="/login" className="fs-3">
          Login |
        </Link>
        <Link to="/" className="fs-3">
          Page1 |
        </Link>

        <Outlet />
      </>
    );
  } else {
    return (
      <div>
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
      </div>
    );
  }
}

function Login() {
  let navigate = useNavigate();

  let loginAction = () => {
    localStorage.setItem("jwt", "true");
    navigate(0);
  };
  return (
    <div>
      <h1>Login</h1>
      <input type="button" value="Login" onClick={loginAction} />
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
