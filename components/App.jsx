import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [],
            users: [{id: 0, name: 'Kevin'}, {id: 1, 'name': 'Rafael'}],
            activeChannel: {},
            activeUser: {}
        }
    }
    addChannel(name) {
        let {channels} = this.state;
        channels.push({id: channels.length, name});
        this.setState({channels});
        // TODO: Send to server
    }
    setChannel(activeChannel) {
        this.setState({activeChannel});
        // TODO:  Get Channel Messages
    }
    setUser(activeUser) {
        this.setState({activeUser})
    }
    render() {
        return (
            <div className='app'>
                <div className='nav'>
                    <ChannelSection
                        {...this.state}
                        addChannel={this.addChannel.bind(this)}
                        setChannel={this.setChannel.bind(this)}
                    />
                    <UserSection
                        {...this.state}
                    />
                </div>
            </div>
        )
    }
}

export default App
