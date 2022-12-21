import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <AppNavLinks />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

function AppNavLinks() {
  return (
    <div>
      <Link to="/home" className="fs-4">
        Home |
      </Link>
      <Link to="/explore" className="fs-4">
        Explore |
      </Link>
      <Link to="/notifications" className="fs-4">
        Notifications
      </Link>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>I am Home</h1>
    </div>
  );
}

function Explore() {
  return (
    <div>
      <h1>I am Explore</h1>
    </div>
  );
}

function Notifications() {
  return (
    <div>
      <h1>I am Notifications</h1>
    </div>
  );
}

function PageNotFound() {
  return (
    <div>
      <h1>I am lost. I am not available!</h1>
    </div>
  );
}

export default App;
