import '../styles/result.css'
import React, { Component } from 'react'

class Result extends Component {
    
    renderResult = () => {
        if (this.props.hello) {
            return <h3>{this.props.hello}</h3>
        } else {
            return <h3>Nothing here</h3>
        }
    }

    render() {
        return (
            <div>
                {this.renderResult()}
            </div>
        )
    }
}

export default Result
