var name = window.prompt("Enter your name: ");
let cards = []
let sum = 0
let totalChips = 0
let isAlive = false
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById('message-el')
let cardsEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')
let playerEl = document.getElementById("player-el")
let player = {
    name: nameChecker(),
    chips: totalChips
}


function renderGame() {
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        hasBlackJack = false

    }else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game"
        hasBlackJack = false
        isAlive = false
    }

    if (hasBlackJack) {
        totalChips += 500
    } else if (sum > 21) {
        totalChips -= 200
    } else {
        totalChips += 0
    }
    playerEl.textContent = player.name + ": $" + totalChips

    messageEl.textContent = message
}

function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}


function newCard() {
    if (isAlive && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function nameChecker (name) {
    if (name != null) {
        return name
    } else {
        return "Anonymous"
    }
}
