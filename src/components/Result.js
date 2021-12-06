import '../styles/result.css'
import React, { Component } from 'react'

class Result extends Component {
    
    renderResult = () => {
        if (this.props.doneChar) {
            // return <h3>{this.props.doneChar.name}</h3>
            return <div>
                <h1>NAME: <em>{this.props.doneChar.name}</em></h1>
                <h3>SEX: <em>{this.props.doneChar.sex}</em></h3>
                <h3>AGE: <em>{this.props.doneChar.age}</em></h3>
                <h3>SPECIES: <em>{this.props.doneChar.species}</em></h3>
                <h3>FRIENDLY: <em>{this.props.doneChar.friendly}</em></h3>
                <h3>ITEMS IN POSESSION: <em>{this.props.doneChar.items}</em></h3>
                <h3>STRENGTH: <em>{this.props.doneChar.strength}</em></h3>
                <h3>INTELLIGENCE: <em>{this.props.doneChar.intelligence}</em></h3>
                <h3>CHARISMA: <em>{this.props.doneChar.charisma}</em></h3>
                <h3>ENDURANCE: <em>{this.props.doneChar.endurance}</em></h3>
            </div>
        } else {
            return <h3>Nothing here, yet</h3>
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


// return {
//     name: name,
//     sex: sex,
//     age: age,
//     species: species,
//     friendly: friendly,
//     items: items,
//     strength: strength,
//     intelligence: intelligence,
//     charisma: charisma,
//     endurance: endurance,
// }