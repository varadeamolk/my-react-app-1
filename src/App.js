import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  // Data Member
  let [title] = useState("API DEMO");
  let [messageList, setMessageList] = useState([]);

  // Spl Funcn :: Hook :: Like Constructor ::  Called while the Compoent is Initialized.
  useEffect(() => {
    // console.log("I AM GETTING CALLED");
    getAllMessages();
  }, []);

  // Member Funcns
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
      message: "CDAC Message",
      messageTime: new Date(),
      reply: true,
    };

    await axios.post(url, data);

    // To Refresh the content
    getAllMessages();
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

      {messageList.map((item, index) => (
        <div key={index}>{item.message}</div>
      ))}
    </div>
  );
}

export default App;
