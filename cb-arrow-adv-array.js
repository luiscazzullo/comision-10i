//Fizzbuzz
/*for(let i = 1; i < 100; i++) {
 if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz')
  } else if(i % 5 === 0) {
    console.log('buzz')
  } else if(i % 3 === 0) {
    console.log('fizz')
  } else {
    console.log(i);
  }
} */

//Get prime numbers
/* function getPrimeNumbers(minNumber, maxNumber) {
  let primes = [];
  for(let i = minNumber; i <= maxNumber; i++) {
    let flag = 0;
    for(let j = 2; j < i; j++) {
      if(i % j === 0) {
        flag = 1;
        break;
      }
    }
    if(i > 1 && flag === 0) {
      primes.push(i);
    }
  }
  return primes;
}

console.log(getPrimeNumbers(1, 21)); */

//Dividir arrays

/* function chunkArray(array, size) {
  let result = [];
  while(array.length) {
    result.push(array.splice(0, size));
  }
  return result;
}

const newArray = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);
console.log(newArray);
console.log(newArray[1][0]); */

// Coerción

//Coerción implícita. Javascript no va a poder sumar números con strings, y viceversa. Entonces, va a transformar el tipo de dato para poder realizar operación.
/* console.log(4 + "7");
console.log(4 * "7");
console.log(2 + true);
console.log(false - 3); */

//Coerción explícita
//String, parseInt, Number, Boolean
/* console.log(typeof Number("7")) */

//Truthy and Falsy

//Falsy. Valores que se comportan como false.
/* console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(false)); */

//Truthy. Son todos los demás valores, que se compartan como true;

/* const user = { name: 'user', lastname: 'user2'};
 */
/* if(user) {
  console.log('Existe user');
} else {
  console.log('No existe user');
} */

//Callback
function saludo(name, lastname) {
  alert(`Hola ${name} ${lastname}`)
}

function despedida(name, lastname) {
  alert(`Chau ${name} ${lastname}`)
}

function userInputName(callback) {
  const name = prompt('Ingrese su nombre');
  const lastname = prompt('Ingrese su apellido');
  callback(name, lastname);
}

/* userInputName(saludo);
userInputName(despedida); */

function doHomework(language, cb) {
  alert('Empezando la tarea de ' + language);
  cb();
}

function finishTask() {
  alert('Finalizando la tarea');
}

/* doHomework('javascript', finishTask); */

//Arrow functions o Funcion Flecha

function helloWorld() {
  return 'Hola mundo';
}

const helloWorld2 = function() {
  return 'Hola mundo2';
}

console.log(helloWorld());
console.log(helloWorld2());

const helloWorld3 = (number) => {
  if(number === 3) {

  }
  return 'Hola mundo 3';
}

console.log(helloWorld3());

const helloWorld4 = () => 'Hola mundo 4';

console.log(helloWorld4());

const helloWorld5 = (name, lastname) => 'Hola ' + name + ' ' + lastname
console.log(helloWorld5('gimena', 'ledesma'));

const helloWorld6 = name => 'Hola ' + name;
console.log(helloWorld6('gimena'));

// Array Advanced Method o High Order Methods

// For each

const students = [
  {id: 1, name: 'Pablo Coronel', age: 30},
  {id: 2, name: 'Gimena Ledesma', age: 25},
  {id: 3, name: 'Mauro Romo', age: 27},
  {id: 4, name: 'Francisco Merchan', age: 28},
  {id: 5, name: 'Javier Martinez', age: 22}
]

/*
//Primera iteración
 A => Pablo
 B => Gimena
 A => Gimena
 B => Pablo
//Segunda iteración
 A => Pablo
 B => Mauro
 A => Mauro
 B => Pablo
 //Tercer iteración
 A => Pablo
 B => Francisco
 A => Francisco
 B => Pablo
 //Cuarta
 A => Pablo
 B => Javier
 A => Javier
 B =>
*/

//const studentsNames = [];
/* for(let i = 0; i < students.length; i++) {
  studentsNames.push(students[i].name);
} */

/* function addStudent(student) {
  studentsNames.push(student.name);
} */

//students.forEach(student => studentsNames.push(student.name));
//console.log(studentsNames);
//console.log('Array de nombres ===>', studentsNames);

//Map. No modifica la array original.
const numbers = [1, 2, 3, 4, 5, 6];
const multiply2 = numbers.map((element, index) => element * 2);
console.log('Array original', numbers);
console.log('array modificada', multiply2);

/* function addName(student) {
  return student.name
} */

const addName = student => student.name;

const studentsName = students.map(addName);

const newStudents = students.map((student, index) => {
  return (index % 2 === 0) ? { ...student, comision: '10i', grupo: 2 } : {...student, comision: '10i', grupo: 3 }
  /* if(index % 2 === 0) {
    return {
      ...student,
      comision: '10i',
      grupo: 2
    }
  } else {
    return {
      ...student,
      comision: '10i',
      grupo: 3
    }
  } */
})

/*

const numbers = [1, 2, 3, 4]
for(let i = 0; i < numbers.length; i++) {
  i => Representaría al index
  numbers[i] => representaría cada número dentro de la array
}

numbers.map((number, index) => {
  number => Cada número dentro de la array
  index => La posición de cada elemento
})

*/

//Spread operator => {...students}
console.log(newStudents);

// REDUCE
const newNumbers = [1, 2, 3, 4, 5];
/* let counter = 0;
for(let i = 0; i < newNumbers.length; i++) {
  counter += newNumbers[i];
} */

const result = newNumbers.reduce((counter, element) => counter += element, 0);
console.log(result);

const mayorNumber = newNumbers.reduce((counter, element) => {
  return counter > element ? counter : element
}, 0);

const totalAges = students.reduce((counter, student) => counter += student.age, 0);
console.log(totalAges);

const mostOldStudent = students.reduce((acum, student) => {
  return (acum.age || 0) > student.age ? acum : student
}, {})

console.log(mostOldStudent);

// FILTER
const youngStudents = students.filter(student => {
  return student.age < 25
});

console.log(youngStudents);

//FIND
const gimena = newStudents.find((student, index) => student.id === 1);
console.log(gimena);
const tres = newNumbers.find(number => number === 3);
console.log(tres);

// FIND INDEX
const pabloIndex = students.findIndex(student => student.id === 85);
console.log('Find Index', pabloIndex);

// SOME
const areSomeGreatherThan30 = students.some(student => student.age >= 30);
console.log(areSomeGreatherThan30);

// EVERY
const areSomeGreatherThan30Two = students.every(student => student.age >= 30);
console.log(areSomeGreatherThan30Two);

//SORT
const orderByAge = students.sort((a, b) => b.age - a.age);
console.log(orderByAge);

const orderByName = students.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if(nameA < nameB) {
    return -1;
  }
  if(nameA > nameB) {
    return 1;
  }
  return 0;
})


