import React, {Component} from 'react';

class Message extends Component {
    render() {
        console.log("Here");
        const {message} = this.props;
        console.log(message);
        return (
            <li>
                <strong>{message.user}</strong> {message.time}
                <br/>
                {message.text}
            </li>
        )
    }
}

Message.propTypes = {
    message: React.PropTypes.object.isRequired
}

export default Message
