const gamefield = document.getElementById("gamefield")

const buttons = {
    "roll" : document.getElementById("rollBtn"),
    "pick" : document.getElementById("pickBtn"),
    "pass" : document.getElementById("passBtn")
}

let redDice = {
    "color": "red",
    "sides": ["shot","shot","shot","brain","foot","foot"]
}

let greenDice = {
    "color": "green",
    "sides": ["shot","brain","brain","brain","foot","foot"]
}

let yellowDice = {
    "color": "yellow",
    "sides": ["shot","shot","brain","brain","foot","foot"]
}

let diceCup = [
    redDice, redDice, redDice,
    yellowDice, yellowDice, yellowDice, yellowDice,
    greenDice, greenDice, greenDice, greenDice, greenDice, greenDice,
]

let dicesInHand = []

function pickADice(){
    let rnd = Math.floor(Math.random() * diceCup.length)
    let dice = diceCup[rnd]
    //TODO Remove the dice from the cup
    let newCup = []
    for(let i = 0; i < diceCup.length; i++){
        if(i != rnd)
            newCup.push(diceCup[i])
    }
    diceCup = newCup

    console.log(diceCup)
    return dice;
}

function rollADice(dice, diceDOM){
    let rnd = Math.floor(Math.random() * dice.sides.length)

    diceDOM.style.backgroundColor = dice.color
    diceDOM.innerText = dice.sides[rnd]

    console.log(`${dice.color} ${dice.sides[rnd]}`)
}

function startRound(){
    let dice1 = document.createElement('div')
    let dice2 = document.createElement('div')
    let dice3 = document.createElement('div')

    dice1.classList.add("dice")
    dice2.classList.add("dice")
    dice3.classList.add("dice")

    gamefield.appendChild(dice1)
    gamefield.appendChild(dice2)
    gamefield.appendChild(dice3)

    buttons.pick.disabled = true

    dicesInHand = []
    dicesInHand.push(pickADice())
    dicesInHand.push(pickADice())
    dicesInHand.push(pickADice())

    rollADice(dicesInHand[0], dice1)
    rollADice(dicesInHand[1], dice2)
    rollADice(dicesInHand[2], dice3)
}