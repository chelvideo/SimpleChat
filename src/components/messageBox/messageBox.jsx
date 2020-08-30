import React, { useRef, useEffect } from 'react';

function MessageBox(props) {
    const messageListRef = useRef(null);

    useEffect(() => {
        messageListRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
    });

    const messageList = props.message.map(message =>
        <li key={message.id}>
            <div>
                {message.user}:
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