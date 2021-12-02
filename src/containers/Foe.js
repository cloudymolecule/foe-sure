import React, { Component } from 'react'
import Parameters from '../components/Parameters'
import Result from '../components/Result'

class Foe extends Component {
    
    state = {
        res: ''
    }
    
    processChar = n => {
        const num = this.checkNumber(n)
        const char = this.generateCharacter(num)
        
        
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
                    case 0: // => sex
                        randNum.push(Math.round(Math.random()))
                        break
                    case 1: // => age
                        randNum.push(Math.floor(Math.random() * 4))
                        break
                    case 2: // => species
                        randNum.push(Math.floor(Math.random() * 4))
                        break
                    case 3: // => friendly
                        randNum.push(Math.floor(Math.random() * 3))
                        break
                    case 4: // => items
                        randNum.push(Math.floor(Math.random() * 3))
                        break
                    default: // => strength, intelligence, charisma, endurance, name
                        randNum.push(Math.floor(Math.random() * 10))
                        break
                }
            }

            return randNum.join('')

        }

        function checkIntegrity(n) {
            let num = n.split('')

            if (num[0] !== 0 || num[0] !== 1) { // => sex
                num[0] = Math.round(Math.random())
            }
            if (num[1] >= 4) { // => age
                num[1] = Math.floor(Math.random() * 4)
            }
            if (num[2] >= 4) { // => species
                num[2] = Math.floor(Math.random() * 4)
            }
            if (num[3] >= 4) { // => friendly
                num[3] = Math.floor(Math.random() * 3)
            }
            if (num[4] >= 4) { // => items
                num[4] = Math.floor(Math.random() * 3)
            }
            // => the rest of the attributes are between 0-9 so there's no way to get them wrong.
            // => and I'm not a fan of if if if if but for now I want to get it working.

            return num.join('')
        }

        if (n.toString().length === 10) {
            res = checkIntegrity(n)
        } else {
            res = getRandomNumber()
        }
        return res

    }

    generateCharacter = n => {
        let [sex, age, species, friendly, items, strength, intelligence, charisma, endurance, name] = n.split('')
    
        function randomInteger(min, max) { // => calculte random values for attributes
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // sex
        if (sex == 0) { sex = 'Female'} else { sex = 'Male'}

        // age
        switch(parseInt(age)) {
            case 0:
                age = 'Unknown'
                break
            case 1:
                age = randomInteger(1, 29)
                break
            case 2:
                age = randomInteger(30, 50)
                break
            case 3:
                age = randomInteger(50, 90)
                break
        }

        // species
        if (species == 0) { species = 'Unknown'} else if (species == 1) { species = 'Human'} else if (species == 2) { species = 'Undead'} else { species = 'Mutant'}


        // friendly
        if (friendly == 0) { friendly = 'Friendly'} else if (friendly == 1) { friendly = 'Foe'} else { friendly = 'Neutral'}

        
        // items
        switch(parseInt(items)) {
            case 0:
                items = 0
                break
            case 1:
                items = randomInteger(1, 5)
                break
            case 2:
                items = randomInteger(6, 12)
                break
        }

        // strength, intelligence, charisma, and endurance stay the same
        
        // console.log(items)
        

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


// Sex (0: Female, 1: Male)
// Age (0: Unknown, 1: Young, 2: Middle-aged, 3: Senior)
// Species (0: Unknown, 1: Human, 2: Undead, 3: Mutant)
// Friendly (0: Friendly, 1: Foe, 2: Neutral)
// Items (0: None, 1: Some, 2: A lot)
// Strength (0 - 9)
// Intelligence (0 - 9)
// Charisma (0 - 9)
// Endurance (0 - 9)
// Name (0 - 9)
