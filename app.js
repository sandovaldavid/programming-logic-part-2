let endNumber = 10;
let startNumber = 1;
let intentNumber = 5;
let count = intentNumber;
let secretNumber = generateRandomNumber();

function assignTextElement(title, label) {
    let elementHTML = document.querySelector(label);
    elementHTML.innerHTML = title;
}

function initialMessages(){
    assignTextElement("Juego del Número Secreto !", "h1");
    assignTextElement("Adivina el número secreto entre 1 y 10", "P");
}

initialMessages();

function userIntent() {
    const userNumber = parseInt(document.getElementById("userNumber").value);
    const MIN_NUMBER = startNumber;
    const MAX_NUMBER = endNumber;

    if (!isValidNumber(userNumber, MIN_NUMBER, MAX_NUMBER)) {
        alert(
            `Por favor, ingrese un número entre ${MIN_NUMBER} y ${MAX_NUMBER}`
        );
        return;
    }

    if (userNumber === secretNumber) {
        winGame(count);
        enableNewGameButton();
        return;
    }

    count--;
    updateGameStatus(userNumber);
    clearInput();

    if (count === 0) {
        loseGame();
        enableNewGameButton();
    }
}

function clearInput() {
    document.getElementById("userNumber").value = "";
}

function isValidNumber(number, min, max) {
    return !isNaN(number) && number >= min && number <= max;
}

function updateGameStatus(userNumber) {
    const hint = userNumber < secretNumber ? "mayor" : "menor";
    assignTextElement(`El número secreto es ${hint}`, "p");
    assignTextElement(`Te quedan ${count} intentos`, "span");
}

function enableNewGameButton() {
    const newGameButton = document.getElementById("reiniciar");
    newGameButton.disabled = false;
}

function disableAttempt() {
    const attemptButton = document.getElementById("intentar");
    attemptButton.disabled = true;
}

function loseGame() {
    assignTextElement(
        "¡Perdiste! El número secreto era: " + secretNumber,
        "h1"
    );
    assignTextElement("¡Superaste el número maximo de intentos!", "p");
    disableAttempt();
}

function winGame(count) {
    assignTextElement("¡Ganaste! El número secreto era: " + secretNumber, "h1");
    assignTextElement("¡Felicidades!", "p");
    assignTextElement(
        "¡Adivinaste	el número en " + (intentNumber - count) + " intentos!",
        "span"
    );
}

function generateRandomNumber() {
    return Math.floor(Math.random() * endNumber) + 1;
}
