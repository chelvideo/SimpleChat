import React, { useState, useEffect } from 'react';
import './App.css';
import MessageBox from './components/messageBox/messageBox';
import InputBox from './components/inputBox/inputBox';
import { db } from './services/firebase';


/*
db.ref("simplechat").set(
  {
    message: 
      {
        id: 0,
        user: "user",
        text: "first message"
      },
    message1: 
      {
        id: 1,
        user: "user",
        text: "second message"
      }
  }
);
*/
 
function App() {
  const [message, messageUpdate] = useState([]);
  useEffect(()=>{
    const listener = db.ref().on("value", snapshot => {
      let chats = [];
      snapshot.forEach((snap) => {
        chats.push(snap.val());
      });
      messageUpdate(chats);
    });
    return () => db.ref.off('value', listener);
  },[]);

  return (
    <div className="app">
      <h1 className="title">Simple Chat</h1> 
      <MessageBox 
        message = {message}
      />
      <InputBox 
        message = {message}
        messageUpdate = {messageUpdate}
        db = {db}
      />

    </div>
  );
}

export default App;
