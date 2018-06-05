//JavaScript Document


var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
"T", "U", "V", "W", "X", "Y", "Z"];

var wins = 0;
var losses = 0;
var Guesses = 9;
var userGuessTotal = [];
var computerGuess = "";

function call(){
var stock = letters[Math.floor(Math.random() * letters.length)];
computerGuess = stock;
console.log(computerGuess);
}

call();




document.onkeydown = function (event) {

var userGuess = event.key;

userGuessTotal = userGuess.toUpperCase() + userGuessTotal;

if (Guesses >= 0) {
    if ((userGuess.toUpperCase() === computerGuess)) {
        wins++;
        Guesses = 9;
        userGuessTotal = [];
        call();
        

        var html =
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + Guesses + "</p>" +
            "<p>Your Guesses so far: " + userGuessTotal + "</p>";

        document.querySelector("#game").innerHTML = html;

    } else {
        if(Guesses == 1){
            losses++;
            Guesses = 9;
            userGuessTotal = [];
            call();

            var html =
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: "+ Guesses  + "</p>" +
            "<p>Your Guesses so far: " + userGuessTotal + "</p>";

            document.querySelector("#game").innerHTML = html;

        }else{
        Guesses--;

        var html =
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + Guesses + "</p>" +
            "<p>Your Guesses so far: " + userGuessTotal + "</p>";

        document.querySelector("#game").innerHTML = html;
        }

    }

} else {
    losses++;
    Guesses = 9;
    userGuessTotal = [];

    var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + Guesses + "</p>" +
        "<p>Your Guesses so far: " + userGuessTotal + "</p>";

    document.querySelector("#game").innerHTML = html;


}
};