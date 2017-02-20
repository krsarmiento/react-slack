import React, {Component} from 'react';

class MessageForm extends Component {
    render() {
        return (
            <form>
                <div className='formGroup'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Type a message...'
                        ref='message'
                    />
                </div>
            </form>
        )
    }
}

MessageForm.propTypes = {}

export default MessageForm
