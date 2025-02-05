// # 01
let title = document.querySelector("h1");
title.innerHTML = "Hora del Desafío";

// # 02
function printConsole() {
    console.log("Desafio 01");
}

// # 03
function questionCity() {
    let city = prompt("Escribe el nombre de una ciudad de Brasil");
    alert(`Estuve en ${city} y me acordé de ti`);
}

// # 04
function message() {
    alert("Yo amo JS");
}

function sum() {
    let num1 = prompt("Escribe un número para sumar:");
    let num2 = prompt("Escribe otro número para sumar:");

    return alert(
        `La suma de ${num1} + ${num2} es: ${parseInt(num1) + parseInt(num2)}`
    );
}
