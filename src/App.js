import { useState } from "react";

function App() {
  let [message, setMessage] = useState("hello");

  let updateMessage = (e) => {
    // e.target == document.querySelector("input")
    setMessage(e.target.value);
  };

  return (
    <div>
      <h1>Working with Input</h1>

      <input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={updateMessage}
      />
      <input type="button" value="Add Message" />

      <h1>{message}</h1>
    </div>
  );
}

export default App;
