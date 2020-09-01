import React from 'react';
const enterKey = 13;

/**
 * This component renders an input field where the user can enter message. 
 * Component contain inputHandler function that alow to push new message into firebase and update state of component.  
 * @property {array}  props.message - The user messages
 * @property {function}  props.messageUpdate - A function that updates the state
 * @property {object}  props.db - Ref to firebase db
 */
function InputBox(props) {

    const inputHandler = (e) => {
        if (e.keyCode === enterKey) {
            const newMessage = {        
                id: props.message.length,
                user: 'anonymous user',
                text: e.target.value,
                timestamp: new Date().toLocaleString()
            };
            props.db.ref().push(newMessage);
            props.messageUpdate(props.message.concat(newMessage));
            e.target.value = '';
        }
    }

    return(
        <input 
            type="text"
            className="inputBox"
            onKeyDown={ inputHandler } 
            placeholder="Type the message here and hit Enter"
        />
    )
}

export default InputBox;