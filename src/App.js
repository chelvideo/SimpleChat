import React, { useState, useEffect } from 'react';
import MessageBox from './components/messageBox/messageBox';
import InputBox from './components/inputBox/inputBox';
import { db } from './services/firebase';

/**
 *This is a main function component. It renders a title, MessageBox component and InputBox component.
 *Component has useState hook that added state of user messages, useEffect hook to allow update the state when another users send messages.
 */
function App() {
  const [message, messageUpdate] = useState([]);
  useEffect(() => {
    const listener = db.ref().on("value", snapshot => {
      let msg = [];
      snapshot.forEach(item => { msg.push(item.val()) });
      messageUpdate(msg);
    });
    return () => db.ref.off('value', listener);
  }, []);

  return (
    <div className="app">
      <h1 className="title">Simple Chat</h1> 
      <MessageBox message = {message} />
      <InputBox 
        message = {message}
        messageUpdate = {messageUpdate}
        db = {db}
      />
    </div>
  );
}

export default App;
