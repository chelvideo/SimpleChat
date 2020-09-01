import React, { useRef, useEffect } from 'react';

/**
 * This component renders the message list. 
 * Component contain useEffect hook that scrolls the list to last message.  
 * @property {array}  props.message - The user messages
 */
function MessageBox(props) {
    const messageListRef = useRef(null);

    useEffect(() => {
        messageListRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
    });

    const messageList = props.message.map(message =>
        <li key={message.id}>
            <div className="messageUser">
                {message.user} at {message.timestamp}:
            </div>
            <div className="messageText">
                {message.text}
            </div>
        </li>
    );

    return(
        <div className="messageBox" >
            <ul ref={messageListRef} className="messageList">
                {messageList}
            </ul>
        </div>
    )
}

export default MessageBox;