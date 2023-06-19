var blood = 10;
var bloodPerSecond = 0;
var scorpion = 0;
var scorpionCost = 10;
var subzero = 0;
var subzeroCost = 0;

function buyScorpion() {
    if (blood >= scorpionCost) {
        blood = blood - scorpionCost;
        scorpion = scorpion + 1;
        scorpionCost = Math.round(scorpionCost * 1.15);

        document.getElementById("blood").innerHTML = blood;
        document.getElementById("scorpionCost").innerHTML = scorpionCost;
        document.getElementById("scorpion").innerHTML = scorpionCost;
        updateBoodPerSecond();
    }
}

function buySubzero() {
    if (blood >= subzeroCost) {
        blood = blood - subzeroCost;
        subzero = subzero + 1;
        subzeroCost = Math.round(subzeroCost * 1.15);

        document.getElementById("blood").innerHTML = blood;
        document.getElementById("subzeroCost").innerHTML = subzeroCost;
        document.getElementById("subzero").innerHTML = subzero;
        updateBoodPerSecond();
    }
}

function blood(blood) {
    document.getElementById("blood").innerHTML = blood;
}

function updateBoodPerSecond() {
    bloodPerSecond = scorpion + subzero * 5;
    document.getElementById("bloodPerSecond").innerHTML = bloodPerSecond;

}

setInterval (function() {
    blood = blood + scorpion;
    blood = blood + subzero * 5;
    document.getElementById("blood").innerHTML = blood;

}, 1000); //1000ms = 1 sekunti