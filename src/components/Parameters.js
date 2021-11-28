import React, { Component } from 'react'

class parameters extends Component {

    state = {
        seed: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state)
    }

    handleReset = () => {
        this.setState({
           seed: ''
        })
    }

    render() {
        return (
            <div>
                <label>Seed:</label>
                <input type='number' name='seed' onChange={this.handleChange} value={this.state.seed} placeholder='numbers only'/>
                <button onClick={this.handleReset}>Accept</button>
                <br/>
                <button>Random Character</button>
            </div>
        )
    }
}

export default parameters
