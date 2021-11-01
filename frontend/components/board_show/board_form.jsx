import React from 'react';

class BoardForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            display: false
        }
        
    }

    toggleForm() {
        this.setState({display: true})
    }

    handleInput() {

    }

    showForm() {
        if (this.state.display) 
        return (
        <form>
            <label>Title:</label>
            <input type="text" onChange={this.handleInput} value={this.state.title}/>
            <label>Choose Board Color:</label>
            <option value=""></option>
        </form>
        ) 
              
    }

    render() {
        return(
            <div>
                <button onClick={this.toggleForm}>Create a New Board</button>
                {this.showForm()}
            </div>
            
        )
    }
}

export default BoardForm;