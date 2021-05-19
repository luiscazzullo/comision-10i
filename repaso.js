/* let variableGlobal = 'variable global';

function scopeFunction() {
  let x = 10;
  x = 20;
  return x;
}

console.log(scopeFunction());

//console.log(x); // undefined;


// Block
let variable2;
console.log(variable2);
variable2 = 'variable2';
console.log(variable2);
{
  let variable3 = 'hola mundo';
}

{
  variable2 = 'otra variable';
}

console.log(variable2); */


//
/* let x = 1;

function test() {
  console.log(x);
  let x = 2;
}

test();
 */

/* let name = 'Juan';

function sayHi() {
  console.log(`Hi ${name}`);
}

sayHi();
name = 'Pete';
 */

/* function makeWork() {
  return function() {
    alert(name);
  }
}

let name = 'Juan';

let work = makeWorker();

work(); */

/* let phrase = 'Hello';

if(true) {
  let user = 'Juan';
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}

sayHi();

var name = 'Luis';

helloWorld();

function helloWorld() {
  console.log('Tengo hoisting');
} */

// Funciones

/* function pepito() {
  const message = 'Hola a todos';
  alert(message);
}

pepito();
alert(message); */

/* let userName = 'Juan';

function showMessage() {
  userName = 'Pedro';
  let message = `Hello ${userName}`;
  alert(message);
}

alert(userName);
showMessage();
alert(userName); */

/* function showMessage(from, text) {
  alert(`${from}: ${text}`);
}

showMessage('Luis', 'Hola!');
showMessage('Flor', 'Cómo estás?');
 */

/* let name = 'Luis';

function test(name) {
  console.log(`Hola ${name}`);
}

test('Francisco'); */

/* function suma(a, b) {
  return a + b;
}

const sum1 = suma(20, 20);
const sum2 = suma(5, 7);

console.log(sum1, sum2);

function vote(age, ageByCountry) {
  const country = ageByCountry === 16 ? 'Argentina' : 'USA';
  if(age > ageByCountry) {
    return `En ${country} puede votar`
  } else {
    return `No puede votar en ${country}`;
  }
}

const argentinianVote = vote(17, 16);
const usaVote = vote(17, 18);
alert(argentinianVote);
alert(usaVote) */

/* function getMinNumber(a, b) {
  if(a > b) {
    return b
  } else {
    return a;
  }
}

alert(getMinNumber(5, 10)); */

/* function pow(base, exponente) {
  if(exponente === 0) {
    return 1;
  }
  let result = base;
  for(let i = 1; i < exponente; i++) {
    result *= base;
  }
  return result;
}

console.log(pow(2, 3));
console.log(pow(4, 4));
console.log(pow(3, 9)); */

const students = ['Sol', 'Gastón', 'Pablo', 'Luis'];

/* for(let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
 */

function arrayToUpperCase(arrayLength){
  const dynamicArray = [];
  for(let i = 0; i < arrayLength; i++) {
    dynamicArray.push(
      prompt('Ingrese un nombre')
    )
  }
  for(let i = 0; i < dynamicArray.length; i++) {
    console.log(dynamicArray[i].toUpperCase());
  }
}

arrayToUpperCase(3);