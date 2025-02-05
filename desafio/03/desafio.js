// # 01
function IMC(height, weight) {
    return weight / (height * height);
}

console.log("IMC: ", IMC(1.75, 70)); // 22.86

// # 02
function factorial(number) {
    if (number === 0) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

console.log("Factorial:",factorial(5)); // 120

// # 03
function changeCurrency(dollar) {
    return dollar * 4.8;
}

console.log("Dollar: ", changeCurrency(100)); // 480

// # 04
function Rectangle(base, height) {
    area = base * height;
    perimeter = base * 2 + height * 2;
    return `Area: ${area} Perimeter: ${perimeter}`;
}

console.log("Rectangle: ", Rectangle(6, 9)); // Area: 54 Perimeter: 30

// # 05
function Circle(radius) {
    let pi = 3.14;
    area = pi * radius * radius;
    perimeter = 2 * pi * radius;
    return `Area: ${area} Perimeter: ${perimeter}`;
}

console.log("Circle:", Circle(5)); // Area: 78.5 Perimeter: 31.4

function multTable(number) {
    for (let i = 1; i <= 12; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

multTable(5);
