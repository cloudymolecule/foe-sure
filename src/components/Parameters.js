import React, { Component } from 'react'

class parameters extends Component {

    state = {
        seed: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div>
                <label>Seed:</label>
                <input/>
                <button>Accept</button>
            </div>
        )
    }
}

export default parameters
