import React, {Component} from 'react';

class UserForm extends Component {
    render() {
        return (
            <form>
                <div className='formGroup'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Set your name'
                        ref='user'
                    />
                </div>
            </form>
        )
    }
}

export default UserForm
