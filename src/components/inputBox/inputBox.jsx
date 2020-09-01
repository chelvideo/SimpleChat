import React from 'react';
const enterKey = 13;

function InputBox(props) {
    

    const inputHandler = (e) => {
        debugger;
        if (e.keyCode === enterKey) {
            const newMessage = 
                 
                    {
                    id: props.message.length,
                    user: 'anonymous user',
                    text: e.target.value,
                    timestamp: new Date().toLocaleString()
                    };
            props.db.ref().push(newMessage);
            console.log(newMessage);
            //console.log(props.message);
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