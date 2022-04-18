const cards = []
const cardsColor = ['green','yellow','red','blue']
const cardsValues = ['0','1','2','3','4','5','6','7','8','9','+2','+4','O','R','B']
let cardsStack = []

function createCards(){
    for(let i = 0; i < cardsColor.length; i++){
        for(let j = 0; j < cardsValues.length; j++){
            cards.push({
                color: cardsColor[i],
                value: cardsValues[j]
            })
        }
    }
    cardsStack = shuffleArray(cards)
}

function shuffleArray(array){
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1))
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

