// Scope Global - Todo aquello que está fuera de un bloque. 
var nombre = 'Luis';

{
  var nombre4 = 'Luis4';
  let nombre2 = 'Luis2';
  console.log('Scope de bloque ===>', nombre2);
}

console.log(nombre4);

function holaMundo() {
  // Var tiene comportamiento de hoisting pero dentro de los límites de su scope;
  var nombre3 = 'Luis3';
  console.log('Scope de function ===>', nombre3);
}

holaMundo();

function comer() {
  var fruta = 'manzana';
  console.log(`Comiendo ${fruta}`)
}

var otraFruta = 'manzana';

function comer(fruta) {
  function lavar() {
    console.log(`Lavando ${fruta}`);
  }
  lavar();
  console.log(`Comiendo ${fruta}`);
}


comer();

//Ejemplo
var nombre = 'Diego';
function fun() {
  //Las variables dentro de una función sólo son accesibles dentro de esta función.
  var apellido = 'Maradona';
  return `${nombre} ${apellido}`;
}

//console.log(apellido); //Undefined;
console.log(nombre); // Diego

console.log(fun());


//LOOPS

for(let i = 0; i < 10; i++) {
  console.log(i);
}

var condicion = Number(prompt('Ingrese un número'));

while(condicion % 2 === 1) {
  console.log(`${condicion} botellas de cerveza en la pared`);
  condicion = Number(prompt('Ingrese un número'));
}

//Division
console.log(10 / 2);
console.log('Hola mundo');

function saludo(pepito) {
  return `Hola ${pepito}`;
}

const students = ['Luis', 'Flor', 'Gimena', 'Gastón'];


for(let i = 0; i < students.length; i++) {
  console.log(saludo(students[i]));
}

var numberUser = Number(prompt('Ingrese un número'));
while(true) {
  if (numberUser === 5) {
    break;
  }
  numberUser = Number(prompt('Ingrese un número'));
}

for(let i = 0; i < 100; i++) {
  if(i % 2 === 0) {
    continue;
  }
  console.log(`Mostrando sólo números impares ${i}`)
}

//La diferencia entre break y continue radica en que break automáticamente sale del loop. El continue simplemente se salta ese paso o iteración en el loop.

console.log('Después del bucle');

var inicializadora3 = 1;

do {
  console.log(`La variable ${inicializadora3}`)
  inicializadora3++;
} while(inicializadora3 < 5)

const teams = ['Boca', 'River', 'Lanus']; 

for(let team of teams) {
  console.log(team);
}

// Array methods
const fruits = ['Banana', 'Naranja', 'Pera', 'Ciruela'];
console.log('El original', fruits);
//Convertir array a string, separado por comas
const fruitsToStringWithComma = fruits.toString();
console.log('Frutas con coma', fruitsToStringWithComma);

//Convertir un array a texto

const fruitsText = fruits.join(' ');
console.log(fruitsText);

// Añadir un elemento al final de mi array
fruits.push('Pomelo');
console.log('Fruits modificado', fruits);


/* const numbers = [];
for(let i = 0; i < 5; i++) {
  const number = prompt('Ingrese un número');
  numbers.push(number);
}

console.log('Al finalizar el bucle', numbers);
 */

// Añadir un elemento al comienzo del array
fruits.unshift('Limon');
console.log('Después del unshift', fruits);

//Quitar el último elemento
const lastFruit = fruits.pop();
console.log('Ultimo elemento', lastFruit);
console.log('Fruits después del pop', fruits);

//Quitar el primer elemento
const firstElement = fruits.shift();
console.log('Primer elemento quitado', firstElement);
console.log('Modifica de nuevo', fruits);

//Modificar elementos de acuerdo a su posición
fruits[0] = 'Kiwi';
console.log('Después de la modificación', fruits);
fruits[fruits.length] = 'Tuna';
console.log('Otra fruta', fruits);

//Insertar elementos en una determinada posición
fruits.splice(2, 1, 'Melon', 'Nispero', 'Sandía');
console.log('Después del splice ===>', fruits);
//Comienza a eliminar desde donde le indicamos en el primer parámetro
fruits.splice(0, 1);
console.log('Después de eliminar con splice', fruits);

//Crear un nuevo array a partir del array original
const fruits2 = fruits.slice(1);
console.log('Las nuevas frutas', fruits2);

const fruits3 = fruits.slice(1, 3);
console.log('La tercera array', fruits3);

//Concatenar array: Unir dos arrays en una sola
const students100 = ['javi', 'francisco', 'pablo'];
const students101 = ['gimena', 'flor', 'gaston'];

const totalStudents = students100.concat(students101);

console.log('Nueva array concatenada', totalStudents);


