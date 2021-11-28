import React, { Component } from 'react'

class parameters extends Component {

    state = {
        seed: ''
    }

    handleChange = (e) => {
        if(e.target.value <= 9999999999){ //10 is basically maxLenght, I did it this way because it wasn't working on the html tag :p
            this.setState({
              [e.target.name]: e.target.value
            })
        }
    }

    handleReset = () => {
        this.setState({
           seed: ''
        })
    }

    render() {
        return (
            <div>
                <p>The <i>seed</i> consists of a <b>10</b> numbers, and each number represents an attribute as follows:</p>
                <ol>
                    <li>Sex <small>(0: Female, 1: Male)</small></li>
                    <li>Age <small>(0: Unknown, 1: Young, 2: Middle-aged, 3: Senior)</small></li>
                    <li>Species <small>(0: Unknown, 1: Human, 2: Undead, 3: Mutant)</small></li>
                    <li>Friendly <small>(0: Friendly, 1: Foe, 2: Neutral)</small></li>
                    <li>Items <small>(0: None, 1: Some, 2: A lot)</small></li>
                    <li>Strength <small>(0 - 9)</small></li>
                    <li>Intelligence <small>(0 - 9)</small></li>
                    <li>Charisma <small>(0 - 9)</small></li>
                    <li>Endurance <small>(0 - 9)</small></li>
                    <li>Name <small>(0 - 9)</small></li>
                </ol>
                <label>Seed:</label>
                <input type='number' name='seed' onChange={this.handleChange} value={this.state.seed} placeholder='numbers only'/>
                <button onClick={this.handleReset}>Accept</button>
                <br/>
                <br />
                <button>Random Character</button>
            </div>
        )
    }
}

export default parameters
