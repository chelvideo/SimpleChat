import React from 'react';
const enterKey = 13;

function InputBox(props) {
    

    const inputHandler = (e) => {
        if (e.keyCode === enterKey) {
            const newMessage = props.message.concat({
                id: props.message.length,
                user: 'user',
                text: e.target.value
            });
            //debugger;
            props.messageUpdate(newMessage);
            e.target.value = '';
        }
    }

    return(
        <input 
            className="inputBox"
            onKeyDown={ inputHandler } 
        />
    )
}

export default InputBox;