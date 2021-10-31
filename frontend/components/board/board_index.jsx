import React from 'react';
import { NavLink } from 'react-router-dom'
import BoardIndexItems from './board_index_items';

class BoardIndex extends React.Component{
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
        // if no this, will only have id in the user state as that's what I bootstraped
    }

    render() {
        const { user, logout } = this.props
        return(
            <div className="board">
                <nav className="board-nav">
                    <img src={window.images.logo} alt="trollo-logo" />
                    <div className="links">
                        <p>Notifications</p>
                        <p>User Settings</p>
                        <button onClick={logout}>Log Out</button>
                    </div>
                </nav>
                <h3>Hi, {user.name}</h3>
                
                <BoardIndexItems />
            </div>
        )
    }
}

export default BoardIndex;