import React, { useState } from 'react';
import './App.css';
import MessageBox from './components/messageBox/messageBox';
import InputBox from './components/inputBox/inputBox';

let messageList = [
  {
    id: 0,
    user: "user",
    text: "first message"
  },
  {
    id: 1,
    user: "user",
    text: "second message"
  },
  {
    id: 2,
    user: "user",
    text: "la-la-la"
  }
]

function App() {
  const [message, messageUpdate] = useState(messageList);

  return (
    <div className="App">
      <MessageBox 
        message = {message}
      />
      <InputBox 
        message = {message}
        messageUpdate = {messageUpdate}
      />
    </div>
  );
}

export default App;
