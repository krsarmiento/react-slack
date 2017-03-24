import React, {Component} from 'react';
import User from './User.jsx';

class UserList extends Component {
    render() {
        const {users} = this.props;
        return (
            <ul>
                {users.map(user => {
                    return <User
                        user={user}
                        key={user.id}
                    />
                })}
            </ul>
        )
    }
}

UserList.propTypes = {
    users: React.PropTypes.array.isRequired
}

export default UserList
