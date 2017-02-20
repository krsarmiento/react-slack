import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
    render() {
        const {messages} = this.props;
        return (
            <ul>
                {messages.map(msg => {
                    return <Message message={msg} />
                })}
            </ul>
        )
    }
}

MessageList.propTypes = {
    messages: React.PropTypes.array.isRequired
}

export default MessageList
