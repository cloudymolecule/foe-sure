import React, { Component } from 'react'
import Parameters from '../components/Parameters'
import Result from '../components/Result'
import { names } from '../constants/names'
 
class Foe extends Component {
    
    state = {
        char: ''
    }
    
    processChar = n => {
        const num = this.checkNumber(n)
        const char = this.generateCharacter(num)
        this.setState({
            char
        })
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
            for (let i = 0; i < num.length; i++) {
                num[i] = parseInt(num[i])
            }

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
        if (parseInt(sex) === 0) { sex = 'Female'} else { sex = 'Male'}

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
            default:
                break
        }

        // species
        if (parseInt(species) === 0) { species = 'Unknown'} else if (parseInt(species) === 1) { species = 'Human'} else if (parseInt(species) === 2) { species = 'Undead'} else { species = 'Mutant'}


        // friendly
        if (parseInt(friendly) === 0) { friendly = 'Friendly'} else if (parseInt(friendly) === 1) { friendly = 'Foe'} else { friendly = 'Neutral'}

        
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
            default:
                break
        }

        // strength, intelligence, charisma, and endurance stay the same, just parsed to int
        strength = parseInt(strength)
        intelligence = parseInt(intelligence)
        charisma = parseInt(charisma)
        endurance = parseInt(endurance)
        

        
        // name
        Array.prototype.random = function () { // Randomize array of names defined in names constant
            return this[Math.floor((Math.random() * this.length))]
        }

        if (sex === 'Female') {
            switch(parseInt(name)) {
                case 0:
                    name = 'Unknown'
                    break
                case 1:
                    name = names[0][0].random()
                    break
                case 2:
                    name = names[0][1].random()
                    break
                case 3:
                    name = names[0][2].random()
                    break
                case 4:
                    name = names[0][3].random()
                    break
                case 5:
                    name = names[0][4].random()
                    break
                case 6:
                    name = names[0][5].random()
                    break
                case 7:
                    name = names[0][6].random()
                    break
                case 8:
                    name = names[0][7].random()
                    break
                case 9:
                    name = names[0][8].random()
                    break
                default:
                    break
            }
        } else {
            switch(parseInt(name)) {
                case 0:
                    name = 'Unknown'
                    break
                case 1:
                    name = names[1][0].random()
                    break
                case 2:
                    name = names[1][1].random()
                    break
                case 3:
                    name = names[1][2].random()
                    break
                case 4:
                    name = names[1][3].random()
                    break
                case 5:
                    name = names[1][4].random()
                    break
                case 6:
                    name = names[1][5].random()
                    break
                case 7:
                    name = names[1][6].random()
                    break
                case 8:
                    name = names[1][7].random()
                    break
                case 9:
                    name = names[1][8].random()
                    break
                default:
                    break
            }
        }

        return {
            name: name,
            sex: sex,
            age: age,
            species: species,
            friendly: friendly,
            items: items,
            strength: strength,
            intelligence: intelligence,
            charisma: charisma,
            endurance: endurance,
        }
    }
    
    render() {
        return (
            <>
                <Parameters charValues={this.processChar}/>
                <Result doneChar={this.state.char}/>
            </>
        )
    }
}

export default Foe
