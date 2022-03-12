import React from "react";

class Message extends React.Component {
    render(){
        return(
            <>
                <h2>
                    Last Message Delivered  
                </h2>
                <h1>
                    {this.props.text.toUpperCase()}
                </h1>
            
            </>

        );
    }
}

export default Message;