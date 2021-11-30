import React, { Component } from 'react'
import Parameters from '../components/Parameters'
import Result from '../components/Result'



class Foe extends Component {
    
    state = {
        res: ''
    }
    
    processChar = val => {
        this.setState({
            res: val
        })
        console.log(val)
    }

    
    
    render() {
        return (
            <>
                <Parameters charValues={this.processChar}/>
                <Result hello={this.state.res}/>
            </>
        )
    }
}

export default Foe
