import React from 'react';


class BoardIndex extends React.Component{
    componentDidMount() {
        // this.props.fetchUser(this.props.match.params.userId)
    }

    render() {
        if (!this.props.user) return null
        return(

            <div>
                {console.log('in boardindex')}
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        )
    }
}

export default BoardIndex