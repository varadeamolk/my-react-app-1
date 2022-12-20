import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <>
        <Link to={"/"}>Home | </Link>
        <Link to={"/p1"}>P1 | </Link>
        <Link to={"/p2"}>P2 | </Link>
        <Link to={"/p3"}>P3 |</Link>
      </>

      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/p1" element={<h1>P1</h1>} />
        <Route path="/p2" element={<h1>P2</h1>} />
        <Route path="/p3" element={<h1>P3</h1>} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
