import '../styles/result.css'
import React, { Component } from 'react'

class Result extends Component {
    
    renderResult = () => {
        if (this.props.doneChar) {
            return <h3>{this.props.doneChar}</h3>
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
