function assignTextElement(title, label) {
    let elementHTML = document.querySelector(label);
    elementHTML.innerHTML = title;
}

assignTextElement("Juego del Número Secreto !", "h1");
assignTextElement("Adivina el número secreto entre 1 y 10", "P");

function userIntent() {
    alert("Has hecho click en el botón");
}