import React, {Component} from 'react';

class User extends Component {
    render() {
        const {user, activeUser} = this.props;
        return (
            <li>
                <a>{user.name}</a>
            </li>
        )
    }
}

User.propTypes = {
    user: React.PropTypes.object.isRequired
}

export default User
