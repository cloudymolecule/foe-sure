import React, { Component } from 'react'
import Parameters from '../components/Parameters'
import Result from '../components/Result'



class Foe extends Component {
    
    processChar = val => {
        console.log(val)
    }
    
    render() {
        return (
            <>
                <Parameters charValues={this.processChar}/>
                <Result />
            </>
        )
    }
}

export default Foe
