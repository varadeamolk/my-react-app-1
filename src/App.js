import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import Home from "./components/Home";
import Explore from "./components/Explore";
import PageNotFound from "./components/PageNotFound";
import DemoError from "./components/DemoError";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/explore",
    element: <Explore />,
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

function App() {
  return <RouterProvider router={router} />;
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
