function computerPlay() { //Scelta randomica della mossa del computer
    let random = Math.floor(Math.random()*10)
    return random > 0 && random < 3 ? "Sasso" :
                   random > 3 && random < 7 ? "Carta" :
                   "Forbice" 
}

function incrementPoints (h,c) { //Conteggio Punti
    points[0] += h;
    points[1] += c;

    console.log("Punteggio Umano : ", points[0],
    "Punteggio Computer: ", points[1])
}


function play (humanMove, computerMove) { //Singola Manche della partita
    
    console.log(`Mossa selezionata : ${humanMove}`)
    console.log(`Mossa del computer : ${computerMove}`)

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

let points = [0,0]

const buttons = document.querySelectorAll("button")

buttons.forEach( button => button.addEventListener("click", () => {
    let humanMove = button.textContent.toLowerCase()
    play(humanMove, computerPlay().toLowerCase())

    if (points[0] === 5 || points[1] === 5 ) {
        console.log("FINISH")
    }
}))

