function computerPlay() { 
    let random = Math.floor(Math.random()*10)
    return random > 0 && random < 3 ? "Sasso" :
                   random > 3 && random < 7 ? "Carta" :
                   "Forbice" 
}

function getHumanMove () {
    let humanMove = prompt("Inserisci la tua mossa (Carta/Sasso/Forbice").toLowerCase();
    console.log("Mossa scelta : ", humanMove)
    humanMove === "carta" || humanMove === "sasso" || humanMove === "forbice" ? console.log("Giochiamo") : getHumanMove();
    return humanMove
}

function game () {
let numberGame = 0;
do {
numberGame = prompt ("Quante partite vuoi giorcare?")
} while (isNaN(numberGame))
for (let i=0 ; i < numberGame; i++){
    let humanMove = getHumanMove()
    let computerMove = computerPlay().toLowerCase()
    play(humanMove, computerMove)
}
}

function play (humanMove, computerMove) {
    switch (computerMove) {
        case "sasso" :
            humanMove === "sasso" ? (console.log("Parità"), incrementPoints(0,0)) :
            humanMove === "carta" ? (console.log("Hai vinto"), incrementPoints(1,0))
            : (console.log("Hai perso"), incrementPoints(0,1))
            break

        case "carta" : 
            humanMove === "carta" ? (console.log("Parità"), incrementPoints(0,0)) :
            humanMove === "forbice" ? (console.log("Hai vinto"), incrementPoints(1,0)) 
            : (console.log("Hai perso"), incrementPoints(0,1))
            break;
        
         case "forbice" : 
            humanMove === "forbice" ? (console.log("Parità"), incrementPoints(0,0)) :
            humanMove === "sasso" ? (console.log("Hai vinto"), incrementPoints(1,0))
            : (console.log("Hai perso"), incrementPoints(0,1))
            break;  
    }
}

function incrementPoints (h,c) {
    points[0] += h;
    points[1] += c;

    console.log("Punteggio Umano : ", points[0],
    "Punteggio Computer: ", points[1])
}

let points = [0,0]

game();