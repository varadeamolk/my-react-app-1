import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import Home from "./components/Home";
import Explore from "./components/Explore";
import PageNotFound from "./components/PageNotFound";
import DemoError from "./components/DemoError";
import Notifications from "./components/Notifications";

let router = createBrowserRouter([
  {
    path: "/",
    element: <AppPageLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
    ],
  },

  {
    path: "/contactus",
    element: <ContactUs />,
  },

  {
    path: "/demoerr",
    element: <DemoError />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function AppPageLayout() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/notifications">Notification</Link>

      <div>
        <Outlet />
      </div>
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

function ContactUs() {
  return <h1>Contact US</h1>;
}

function ErrorBoundary() {
  let error = useRouteError();
  console.log(error.message);
  return (
    <div>
      <h1>Error!</h1>
      <p>An Error occured!</p>
      <p>{error.message}</p>
    </div>
  );
}

export default App;
