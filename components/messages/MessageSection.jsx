import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import MessageForm from './MessageForm.jsx';

class MessageSection extends Component {
    render() {
        return (
            <div className='support panel panel-primary'>
                <div className='panel-heading'>
                    <strong>Channel Name</strong>
                </div>
                <div className='panel-body channels'>
                    <MessageList {...this.props} />
                    <MessageForm {...this.props} />
                </div>
            </div>
        )
    }
}

MessageSection.propTypes = {
    messages: React.PropTypes.array.isRequired
}

export default MessageSection
