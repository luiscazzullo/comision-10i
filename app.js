//Evitar los magic string y numbers. ¿Qué son? Son números colocados directamente en el código, sin estar almacenados en una variable. Pueden confundir a los demás desarrolladores ya que si no tienen el contexto, no entenderán para qué sirven.
const ageToVote = 16;
const legalAge = 18;
const topAge = 65;
const myAge = 17;
const confirmMessageVote = 'Puedo votar';

//Dentro del if deben colocarse valores booleanos, o expresiones que devuelvan un valor booleano, como las operaciones de comparación. Tendremos los siguiente signos:
// "<" ===> menor que
// "<=" ===> menor o igual que
// ">" ===> mayor que
// ">=" ===> mayor o igual que
// "==" ===> Operador de comparación. Este sólo controla que los valores sean iguales
//"===" ===> Operador de comparación estrica. Controla que tanto los valores como el tipo de dato sean iguales.
// "!" ===> Operador de negado. Transforma un valor booleano en su opuesto.
// "!=" ===> Distino de.
// "!==" ===> Estrictamente distinto de

//Esto debería leerse como: Si mi edad es mayor a 18.
if(age > 18) {
  //Si se cumple la condición del if, el código ingresará en esta parte.
  console.log('El voto es obligatorio');
} else if(age > 70) {
  //El else if se usa para encadenar condiciones. Dentro, podemos colocar otra estructura que devuelva un valor booleano. Entonces, si la condición del if no se cumple, pero sí se cumple la del else if, debemos continuar por esta rama
  console.log('No es obligatorio votar');
} else {
  //El else se utiliza para definir una estructura de control o un bloque de código que queremos que se ejecute si la condición es falsa.
  console.log('No puedo votar');
}

//BUENA PRÁCTICA. No se deben encadenar muchos else if, con uno sólo basta. Si tenemos más de tres condiciones lo correcto es usar un switch. El switch es otra estuctura para controlar condicionales.

//El prompt despliega un pequeño modal que le permite al usuario ingresar texto. 
const signo = prompt('¿Cuál es tu signo?').toLowerCase();

//Debemos comenzar colocando switch y dentro de los paréntesis colocamos la variable que queremos condicional
switch(signo) {
  //Se usa la palabra case para realizar la comparación. Sería el equivalente a colocar signo === 'acuario'
  case 'acuario':
    //Si se cumple esta condición, el bloque de código de abajo se ejecutará.
    console.log('acuario');
    //Es importante colocar un break dentro de los condicionales porque sino se ejecutarán los demás cases. La palabra break le dice a nuestro código que salga del bloque del switch, o de cualquier bloque en el que lo usemos.
    break;
  case 'escorpio':
    console.log('escorpio');
    break;
  case 'sagitario':
    console.log('Hola mundo');
    break;
  //Si quiero que para dos condiciones se ejecute el mismo código puedo escribirlo de la siguiente manera.
  case 'géminis':
  case 'geminis':
    console.log('Géminis');
    break;
    //Defino un bloque de código en caso de que ninguna de las condiciones anteriores sea válida.
  default:
    console.log('El signo no es válido');
}

// COMPARACIÓN POR TIPO

//Si usamos el doble igual, la expresión de abajo dará true. Porque aunque sus tipos de datos sean distintos, sus valores son iguales.
console.log(3 == '3');
//Si usamos el triple igual, la expresión de abajo dará false.Porque el triple igual compara el valor y el tipo de valor. Ambos deben ser iguales.
console.log(3 === '3');

//BUENA PRÁCTICA. Usar el triple igual.

const person = {
  name: 'Luis',
  lastname: 'Cazzullo'
}

const person2 = {
  name: 'Luis',
  lastname: 'Cazzullo'
}

console.log(person == person2);
console.log(person === person2);

//Si tratamos de comparar objetos siempre obtendremos false porque los tipos de datos no primitivos se guardan por referencia. En este caso estamos comparando las referencia entre person y person2, ambas son distintas.

const myAge = Number(prompt('Cuál es su edad?'));

//Cuando queremos colocar condicionales dentro, debemos colocar un true dentro del switch.
switch(true) {
  case myAge >= 18 && myAge < 65:
    console.log('Puede votar');
    break;
  case myAge >= 16 && myAge < 18 && myAge > 65:
    console.log('No es obligatorio votar');
    break;
  default:
    console.log('No puede votar')
}

// CREAR UN PIEDRA PAPEL O TIJERA

//Primero, defimos una serie de valores para nuestras opciones, es decir: piedra, papel o tijera.
const piedra = 1;
const papel = 2;
const tijera = 3;

//Le pedimos al usuario que ingrese un valor y lo almacenamos en una constante;
const user = parseInt(
  prompt(`
    1. Piedra
    2. Papel
    3. Tijera
  `)
);

//Generamos un número aleatorio. Explicación de la fórmula:
//Usamos la función Math.random() que nos devuelve un número aleatorio entre 0 y 0.9999999.
//Al resultado de Math.random lo multiplicamos por un número más que nuestro máximo valor (nuestro máximo valor es 3, de la tijera) menos uno (nuestro número mínimo). Esto hará que se generen valores entre el 1 y el 3.
//Al resultado de la multiplicación, le sumamos uno.
// A todo el resultado, le aplicamos Math.floor, para redondear hacia abajo y eliminar los decimales.
const machine = Math.floor((Math.random() * (4 - 1)) + 1);

//Creamos una función que tendrá como parámetros las elecciones del usuario y las elecciones de la máquina.
function play(user, random) {
  //Realizamos las comparaciones e imprimimos mensajes de acuerdo a esas condiciones.
  if(
    (user === piedra && random === tijera) ||
    (user === papel && random === piedra) ||
    (user === tijera && random === papel) 
  ) {
    return 'Gana el usuario';
  } else if(user === random) {
    return 'Empate';
  } else {
    console.log('Ganó la máquina');
  }
}

//Ejecutamos la función con las variables del usuario y de la máquina.
play(user, machine);


const luis = 'Luis';
const pablo = 'pablo';
const cinthia = 'Cinthia';
const flor = 'Flor';

//Creamos una función para saludar dinámicamente a los usuarios.
//El parámetro name representará a todos los nombres que nosotros queremos saludar. Nosotros los definiremos recién cuando ejecutemos la función. Por eso, se dice que los parámetros hacen referencia a valores futuros que nosotros le pasaremos a la función.
function saludar(name) {
  alert(`hola ${name}`);
}

saludar('Gaston');

// Una de las cosas más difíciles para trabajar con funciones consiste en la abstracción de valores. Nosotros tenemos que pensar qué hará nuestra función y que necesitamos para que funcione. En este caso, vamos a los orígenes de la suma y pensamos: consiste en un número que se añade a otro.
function sumar(num1, num2) {
  console.log(num1 + num2);
}

sumar(100, 50);

function sumar(a, b) {
  const resultadoSuma = a + b;
  //La palabra return nos sirve para devolver un valor con una función, esto permite que nosotros podamos almacenar ese resultado en una variable, cuando ejecutemos la función.
  return resultadoSuma;
}
const resultadoSuma = sumar(4, 4);
console.log('La variable ===>', resultadoSuma);

const palabra = ``;

//Declarativa. Posee hoisting.
function miFuncion() {
  console.log('Soy una funcion declarativa');
}

//Expresiva. No se le aplica hoisting.
const miFuncion2 = function(a, b) {
  return a + b
}

//HOISTING DEFINICION

//Hoisting es cuando las funciones y las variables se declaran antes de que se procese todo el código.El hoisting sólo funciona con versiones anteriores a ES6.

//¿Cómo se genera y cómo puedo evitarlo ?

console.log(miNombre);
var miNombre;
miNombre = 'Luis';

//Primero declaramos las variables y luego las inicializamos.Lo que pasa con hoisting es que muchas veces llamamos variables sin haberlas declarado.Esto me arroja un error, un undefined porque estamos llamando una variable antes de declararla e inicializarla.El navegador interpreta el código y luego lo compila.JavaScript cuando llega a esa línea piensa que hay algo que posiblemente es una variable, pero como no la veo declarada, voy a generar un espacio en memoria.Pero como no tiene valor, JS le añade un valor de undefined.

//Las funciones también tienen este fenómeno.Cuando trabajamos con funciones también se puede producir el hoisting:


hey();
function hey() {
	console.log('Funcionando' + miNombre);
}
var miNombre = 'Luis';

//Llamo a una función pero la declaro después.Nos arrojará Hola undefined.Las variables y las funciones se procesan antes de ejecutar cualquier código.Pero, las funciones se declaran antes que las variables.

//Todas las variables y funciones deben ser declaradas antes de llamarlas.
