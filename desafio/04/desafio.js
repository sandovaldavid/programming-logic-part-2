// # 01
let listaGenerica = [];

// # 02
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// # 03
lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');

// # 04
function printArray(array) {
	array.forEach((element) => {
		console.log(element);
	});
}

printArray(lenguajesDeProgramacion);

//  # 05
function printArrayReverse(array) {
	for (let i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);
	}
}

// # 06
function promedioArray(array) {
	let sum = 0;
	array.forEach((element) => {
		sum += element;
	});
	return sum / array.length;
}

let listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
promedioArray(listaDeNumeros);

// # 07

function mayorNumYMenorNum(array) {
	let mayor = array[0];
	let menor = array[0];
	array.forEach((element) => {
		if (element > mayor) {
			mayor = element;
		}
		if (element < menor) {
			menor = element;
		}
	});
	return [mayor, menor];
}

mayorNumYMenorNum(listaDeNumeros);

// # 08
function sumArray(array) {
	let sum = 0;
	array.forEach((element) => {
		sum += element;
	});
	return sum;
}

// # 09
function searchElement(array, element) {
	let position = -1;
	array.forEach((el, index) => {
		if (el === element) {
			position = index;
		}
	});
}

searchElement(listaDeNumeros, 5);

// # 10
function sumArrays(array1, array2) {
	if (array1.length !== array2.length) {
		return 'Error: los arrays no tienen la misma longitud';
	}

	let resultArray = [];
	for (let i = 0; i < array1.length; i++) {
		resultArray.push(array1[i] + array2[i]);
	}
	return resultArray;
}

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
console.log(sumArrays(array1, array2));

// # 11
function squareArray(array) {
	return array.map((number) => number * number);
}

// Ejemplo de uso:
let numbers = [1, 2, 3, 4, 5];
console.log(squareArray(numbers)); // Output: [1, 4, 9, 16, 25]
