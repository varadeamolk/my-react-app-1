import axios from "axios";
import { useState } from "react";

function App() {
  let [title] = useState("API DEMO");
  let [messageList, setMessageList] = useState([]);

  // Funcns
  let getAllMessages = async () => {
    let url = `http://localhost:3001/messages`;
    let response = await axios.get(url);
    // console.log(response);

    // Getting the Message From Server :: And re-rendering
    messageList = [...response.data];
    setMessageList(messageList);
  };

  let createNewMessage = async () => {
    let url = `http://localhost:3001/message`;

    let data = {
      message: "Test Message",
      messageTime: new Date(),
      reply: true,
    };

    await axios.post(url, data);
  };

  return (
    <div>
      <h1>{title}</h1>

      <input
        type="button"
        value="Make Ajax/API GET Call"
        onClick={getAllMessages}
      />

      <input
        type="button"
        value="Make Ajax/API POST Call"
        onClick={createNewMessage}
      />

      {messageList.map((item) => (
        <div>{item.message}</div>
      ))}
    </div>
  );
}

export default App;
