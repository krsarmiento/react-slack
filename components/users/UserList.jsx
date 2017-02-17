import React, {Component} from 'react';
import User from './User.jsx';

class UserList extends Component {
    render() {
        const {users, activeUser} = this.props;
        return (
            <ul>
                {users.map(user => {
                    return <User
                        user={user}
                        activeUser={activeUser}
                        key={user.id}
                    />
                })}
            </ul>
        )
    }
}

UserList.propTypes = {
    users: React.PropTypes.array.isRequired,
    activeUser: React.PropTypes.object.isRequired
}

export default UserList
