let endNumber = 10;
let intentNumber = 5;
let count = intentNumber;
let secretNumber = generateRandomNumber();

function assignTextElement(title, label) {
    let elementHTML = document.querySelector(label);
    elementHTML.innerHTML = title;
}

assignTextElement("Juego del Número Secreto !", "h1");
assignTextElement("Adivina el número secreto entre 1 y 10", "P");

function userIntent() {
    let userNumber = document.getElementById("userNumber").value;

    if (userNumber < 1 || userNumber > 10) {
        alert("Por favor, ingrese un número entre 1 y 10");
    } else {
        if (userNumber == secretNumber) {
            winGame(count);
        } else {
            count--;
            if (count == 0) {
                loseGame();
            }
            if (userNumber < secretNumber) {
                assignTextElement("El número secreto es mayor", "p");
            } else {
                assignTextElement("El número secreto es menor", "p");
            }

            assignTextElement("Te quedan " + count + " intentos", "span");
        }
    }
}

function loseGame() {
    assignTextElement(
        "¡Perdiste! El número secreto era: " + secretNumber,
        "h1"
    );
    assignTextElement("¡Superaste el número maximo de intentos!", "p");
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
