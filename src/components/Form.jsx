import React from "react";
import Message from './Message';

class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            message: "",
            sentMessage: "",
        };
    }
    handleSubmit(event){
        
        event.preventDefault();
        this.setState({sentMessage: this.state.message, message:''});
    }

    onChangeHandler(event){
        
        this.setState({message: event.target.value});

    }

    render(){
        return(
            <div className='message-container'>
                <form onSubmit={(event)=>this.handleSubmit(event)} >
                    <fieldset>
                        <label>A Message You Would Like To Pass </label>
                        <br></br>
                        <input type="text"
                        value={this.state.message}
                        onChange={(event)=> this.onChangeHandler(event)}
                        name="message"
                        placeholder="write your message here"
                        autoFocus
                        />
                        <br></br>
                        <button type="submit" className="btn">
                        {''}
                        Submit
                        </button>
                        <div>
                        <Message text={this.state.sentMessage}/>
                        </div>


                    </fieldset>
                    
                </form>
               
            </div>
        )
    }

}

export default Form;