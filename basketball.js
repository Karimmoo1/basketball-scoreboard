let scoreHome = 0
let scoreGuest = 0
let addPointHome = document.getElementById("add-point-home")
let addPointGuest = document.getElementById("add-point-guest")

function add1Point() {
    scoreHome += 1
    addPointHome.textContent = scoreHome
}

function add2Point() {
    scoreHome += 2
    addPointHome.textContent =scoreHome
}

function add3Point() {
    scoreHome += 3
    addPointHome.textContent = scoreHome
}

function add1Pointh() {
    scoreGuest  += 1
    addPointGuest.textContent = scoreGuest 
}

function add2Pointh() {
    scoreGuest += 2
    addPointGuest.textContent = scoreGuest 
}

function add3Pointh() {
    scoreGuest  += 3
    addPointGuest.textContent = scoreGuest 
}