import { useState } from "react";

function DemoError() {
  let [user] = useState({});

  return <div>{user}</div>;
}

export default DemoError;
