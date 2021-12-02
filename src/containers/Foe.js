import React, { Component } from 'react'
import Parameters from '../components/Parameters'
import Result from '../components/Result'



class Foe extends Component {
    
    state = {
        res: ''
    }
    
    processChar = n => {
        const num = this.checkNumber(n)
        console.log(num)
        // this.generateCharacter(n)
        // this.setState({
        //     res: n
        // })
    }

    checkNumber = n => {
        let res

        function getRandomNumber() {
            
            let randNum = []

            for (let i = 0; i < 10; i++) {
                switch(i) {
                    case 0:
                        randNum.push(Math.round(Math.random()))
                    case 1:
                        randNum.push(Math.floor(Math.random() * 4))
                    case 2:
                        randNum.push(Math.floor(Math.random() * 4))
                    case 3:
                        randNum.push(Math.floor(Math.random() * 3))
                    case 4:
                        randNum.push(Math.floor(Math.random() * 3))
                    default:
                        randNum.push(Math.floor(Math.random() * 10))
                }
            }
            console.log(randNum)
        }


        if (n.toString().length === 10) {
            res = n
        } else {
            res = getRandomNumber()
        }
        // console.log(res)
        return res

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
