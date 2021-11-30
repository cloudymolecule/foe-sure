import React, { Component } from 'react'
import Parameters from '../components/Parameters'
import Result from '../components/Result'



class Foe extends Component {
    
    state = {
        res: ''
    }
    
    processChar = n => {
        this.generateCharacter(n)
        // this.setState({
        //     res: n
        // })
    }

    generateCharacter = n => {
        let [sex, age, species, friendly, items, strength, intelligence, charisma, endurance, name] = n.split('')
        
    }
    
    render() {
        return (
            <>
                <Parameters charValues={this.processChar}/>
                <Result doneChar={this.state.res}/>
            </>
        )
    }
}

export default Foe
