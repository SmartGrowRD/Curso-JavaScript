// Notas
/*Operadores relacionales*/
console.log(8 > 9);
console.log(9 > 8);
console.log(8 >= 9);
console.log(9 >= 0);
console.log(7 < 7);
console.log(7 <= 7);

console.log("-------------------");

/*
= 1 igual es asignacion de variable
== 2 iguales es comparacion de valores
=== 3 iguales es comparacion de valores y tipo.
*/

console.log("==");
console.log(7 == 7);
console.log("7" == 7);
console.log(0 == false);

console.log("===");
console.log(7 === 7);
console.log("7" === 7);
console.log(0 === false);

/*Operadores Incremento y Decremento */
let i = 1;
let a = 1;

console.log((i += 2));
console.log((i -= 2));
console.log((i /= 3));
console.log((i *= 2));

// Operador Unario
a++;
a--;
++a;
--a;
console.log(a);

// For In variante de ciclo for para iterear propiedades de objetos javascript.

const rubby = {
  nombre: "Rubby",
  apellido: "Perez",
  edad: 32,
};

for (const propiedad in rubby) {
  console.log(`key: ${propiedad}, Values:${rubby[propiedad]}`);
}

//For Of para iterear cualquier elemento iterable de javascript.

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (const numero of numeros) {
  console.log(numero);
}

let cadena = "Hola mundo";

for (caracter of cadena) {
  console.log(caracter);
}

// Manejo de Errores.

try {
  console.log("En el Try se agrega el codigo a evaluar");
  noExiste; // Error, varinable no definida.
} catch (error) {
  console.log("Catch, Captura cualquier error surgido o lanzado en el try");
  console.log(error);
} finally {
  console.log(
    "El bloque finally se ejecura siempre al final de un bloque try-catch."
  );
}

try {
  let numero = 10;
  if (isNaN(numero)) {
    throw new Error("El caracter introducido no es un Numero.");
  }
  console.log(numero * numero);
} catch (error) {
  console.log(`Se produjo el siguiente error: ${error}`);
}

// Break & Continue

console.log("----break----");

let numerosBajos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < numerosBajos.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(numerosBajos[i]);
}

console.log("----continue----");

for (let i = 0; i < numerosBajos.length; i++) {
  if (i === 5) {
    continue;
  }
  console.log(numerosBajos[i]);
}

// Destructuración------------------------

const numerosDes = [1, 2, 3];

const persona = {
  nombre: "Rubby",
  apellido: "Perez",
  edad: 32,
};

//Sin destructuracion
let uno = numerosDes[0],
  dos = numerosDes[1],
  tres = numerosDes[2];

console.log(uno, dos, tres);

// Con Destructuracion "Array".
const [one, two, three] = numerosDes;
console.log(one, two, three);

// Con Destructuracion "Objeto".

let { nombre, apellido, edad } = persona;
console.log(nombre, apellido, edad);

/// Objetos Literales son objetos que se definen anteriormente en una variable y luego son utilizdos en un objeto JavaScript.

console.log("--Paramentros Rest--");
/// Paramentros REST, permiten recibir una cantidad indefinida de parametros en una funcion.

function sumar(a, b, ...c) {
  let resultado = a + b;

  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}

console.log(sumar(3, 3));
console.log(sumar(1, 5, 6, 7));

/// Operador Spread o de Propagacion.

const array1 = [1, 2, 3, 4, 5],
  array2 = [6, 7, 8, 9, 0];
console.log(array1, array2);

const array3 = [...array1, ...array2];
console.log(array3);

/// Arrow Functions, Funciones Flecha, es una manera simplificada de expresar funciones anonimas.

const saludar = function () {
  console.log("hola funcion expresada...");
};
saludar();

const saludar2 = () => {
  console.log("hola funcion flecha...");
};
saludar2();

const saludar3 = () => console.log("hola funcion flecha una sola linea...");
saludar3();

const saludar4 = (nombre) => console.log(`Hola ${nombre}`);
saludar4("Samia");

const sumarNumeros = function (a, b) {
  return a + b;
};
console.log(sumarNumeros(5, 6));

const sumarNumaros2 = (a, b) => a + b;
console.log(sumarNumaros2(7, 7));

const numerosArreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numerosArreglo.forEach(function (el, index) {
  console.log(`${el} en la posición ${index}`);
});

numerosArreglo.forEach((el, index) =>
  console.log(`Elemento ${el} en la posición ${index}`)
);

/// 22 - PROTOTIPOS

const animal = {
  nombre: "Snoopy",
  sonar() {
    console.log("Soy Snoopy");
  },
};

const animal2 = {
  nombre: "Lola Bunny",
  sonar() {
    console.log("Soy Lola Bunny");
  },
};
console.log(animal);
console.log(animal2);

// Funcion Cosntructora.
function Animal(nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;

    //Metodos
    this.sonar = function (){
        console.log("Hago sonidos porque estoy vivo.");
    }
    this.saludar = function (){
        console.log(`Hola soy ${nombre}`);
    }
    }

const snoopy = new Animal("Snoopy", "Macho"),
lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.saludar();

// Funcion Constructora
function Animal2(nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
    }
        /* Metodos agregados al prototipo de la funcion costructora y no en la funcion constructora en si, Esto evita que cuando se creen varias instancias de el objeto
        se dupliquen metodos innecesarios en todos los objetos, esto mejora considerablemente el rendimiento y consumo de recursos */
        Animal2.prototype.sonar = function (){
            console.log("Hago sonidos porque estoy vivo.");
        }
        Animal2.prototype.saludar = function (name){
            console.log(`Hola soy ${name}`);
        }

const snoopy2 = new Animal2("Snoopy 2", "Macho"),
lolaBunny2 = new Animal2("Lola Bunny 2", "Hembra");

console.log(snoopy2);
console.log(lolaBunny2);

snoopy2.saludar('Snoopy El Perro');

// 23 - HERENCIA PROTOTIPICA

function Perro(nombre, genero, tamanio) {
  this.super = Animal2;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

// Perro esta heredando de Animal2
Perro.prototype = new Animal2();
Perro.prototype.constructor = Perro;

console.log(Perro);

// Sobrescritura de metodos der prototipo padre en el hijo.
Perro.prototype.sonar = function () {
  console.log("Soy un perro y hago guau guau.")
};
Perro.prototype.sonar();

// Agregar metodo a prototipo.
Perro.prototype.ladrar = function () {
  console.log("Guau.. Guau..")
};

//
const snoopy3 = new Perro("Snoopy Firulays", "Macho", "Mediano");
console.log(snoopy3);
console.log(lolaBunny2);
snoopy3.ladrar();

console.log("----Clases y Herencia-----");
// 24- CLASES Y HERENCIA.

class AnimalClass {

  // Constructor
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  //Metodos
  sonar() {
    console.log("Hago sonidos porque estoy vivo.");
  }
  saludar() {
    console.log(`Hola soy ${nombre}`);
  }
}

class Perros extends AnimalClass {

  constructor(nombre, genero, tamanio) {
    // con el metodo super() se manda a llamar el constructor de la clase padre.
    super(nombre, genero);
    this.tamanio = tamanio;
    this.raza = null;
  }

  sonar() {
    console.log("soy un perro y mi sonido es un ladrido.");
  }

  ladrar() {
    console.log("Guau.. Guau..!!");
  }

  //Un metodo estatico se puede ejecutar sin necesidad de instanciar la clase.
  static queEres() {
    console.log("Los perros somos animales mamiferos que pertenencemos a la familia de los caninos, tambien somos considerados el mejor amigo del hombre.");
  }

  // Los Setter y Getter son metodos especiales que nos permiten establecer y obtener los valores de los atributos "Propiedades" de nuestras clases.
  get getRaza() {
    return this.raza;
  }
  set setRaza(raza) {
    this.raza = raza;
  }
}

const lala = new AnimalClass("Lala", "Hembra"),
  scooby = new Perros("Scooby", "Macho", "Grande");

console.log(lala);
lala.sonar();
lala.saludar();
console.log(scooby);
scooby.sonar();
scooby.saludar();
scooby.ladrar();

//25 - Metodos estaticos, Setters y Getters.

Perros.queEres(); // Metodo estatico.
console.log(scooby.getRaza);
scooby.setRaza = "Gran Danes";
console.log(scooby.getRaza);


// 26- Objeto Console.

console.log("----Objeto Console-----");
console.log(console);
console.error("Esto es un Error");
console.warn("Esto es una alerta.");
console.info("Esto es informacion");

let nombreS = "Rubby",
  apellidoS = "Perez",
  edadS = 32;

console.log(`Hola, mi nombre es %s %s y tengo %d años.`, nombreS, apellidoS, edadS);

console.clear(); // Limpia consola

console.log(window);
console.log(document);
console.dir(document);

console.group("Ejemplo Cursos");
console.log("Curso JavaScript.");
console.log("Curso NodeJs.")
console.log("Curso HTML.")
console.log("Curso CSS");
console.groupEnd();

console.groupCollapsed("Ejemplo Cursos");
console.log("Curso JavaScript.");
console.log("Curso NodeJs.")
console.log("Curso HTML.")
console.log("Curso CSS");
console.groupEnd();

// Ver todas las entradas de un objeto en una tabla.
console.table(Object.entries(console).sort());

const numeroT = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  vocales = ["a", "e", "i", "o", "u"];

console.table(numeroT);
console.table(vocales);

const perroT = {
  nombre: "Ranger",
  raza: "Pitbull",
  color: "Negro"
}

console.table(perroT);

// Cronometrar tiempo de ejecucion de fracmento de codigo.

console.time("Tiempo en ejecutarse");
const arrayT = Array(1000000);

for (let i = 0; i < arrayT.length; i++) {
  arrayT[i] = i;

}
console.timeEnd("Tiempo en ejecutarse");

// Identificar cuantas veces se ejecuta codigo.

for (i = 0; i <= 100; i++) {
  console.count("Count for");
  console.log(i);
}

// Metodo assert, nos sirve para realizar pruebas unitarias.

let x = 1,
  y = 2,
  pruebaXY = "Siempre X debe de ser menor a Y.";
console.assert(x < y, x, y, pruebaXY);

/// 27 - Objeto Date.

console.log(Date());

let fecha = new Date();
console.log(fecha);

// Devuelve Dia del Mes.
console.log(fecha.getDate());

// Devuelve dia de la semana [D L M MI J V S -> 0 1 2 3 4 6]
console.log(fecha.getDay());

// Devuelve Mes
console.log(fecha.getMonth());

// Devuelve año.
console.log(fecha.getFullYear());

// Devuelve Horas.
console.log(fecha.getHours());

// Devuelve Minutos.
console.log(fecha.getMinutes());

// Devuelve Segundos.
console.log(fecha.getSeconds());

// Devuelve Milisegundo.
console.log(fecha.getMilliseconds());

// Devuelve Fecha en formato mas humano.
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());

// Devuelve Fecha hora cero Meridiano de Gre. en formato mas humano.
console.log(fecha.getUTCDate());

// Devuelve Fecha en formata timestamp 1/1/1070
console.log(Date.now());

let cumpleRubby = new Date(1989,1,5);

console.log(cumpleRubby.toLocaleDateString());


/// 28 - Objeto Math.

console.log(Math);
console.log(Math.PI);

// Devuelve Valor Absoluto de un numero.
console.log(Math.abs(7.5));

// Redondea al numero entero posterior "Mayor".
console.log(Math.ceil(9.4));

// Redondea al numero entero anterior "Menor".
console.log(Math.floor(8.4));

// Redondea al numero entero mas cercano inmediato.
console.log(Math.round(6.4));

//Devuelve la Raiz cuadadrada de un numero.
console.log(Math.sqrt(6));

//Devuelve Potencia de un Numero Base/Exponente.
console.log(Math.pow(2,2));

// Indica Si el numerno es negativo, positivo o Cero, (-1, 0, 1).
console.log(Math.sign(-5));

// Devuelve un munero aleatorio de 0 a 1.
console.log(Math.random());

// de 0  a 1000
console.log(Math.round(Math.random() * 1000));

/// 29 - Operador de Cortocircuito.

/*
Cortocircuito OR - Cuando el valor de la izquierda en expresion siempre pueda validar a true, es el valor
que se cargara por defecto.

Cortocirtuito AND - Cuando el valor de la izquierda en la expresion siempre pueda validar a false, es el valor
que se cargara por defecto.
*/

function saludarCortocircuito (nombre){
nombre = nombre || "Desconocido"; 
console.log(`Hola ${nombre}`);
}

saludarCortocircuito();

console.log("Cadena"|| "Cadena de la derecha");
console.log(19|| "Cadena de la derecha");
console.log(true|| "Cadena de la derecha");
console.log([]|| "Cadena de la derecha");
console.log({}|| "Cadena de la derecha");
console.log(false|| "Cadena de la derecha");
console.log(null|| "Cadena de la derecha");
console.log(undefined|| "Cadena de la derecha");
console.log(0|| "Cadena de la derecha");

console.log(false && "Cadena de la derecha");
console.log(null && "Cadena de la derecha");
console.log(undefined && "Cadena de la derecha");
console.log(0 && "Cadena de la derecha");

/* 30- Alert, Confirm, Prompt * Objetos para interactuar con el usuario y cualgan del objeto Window, Solo 
existen en navegadores porque en Node.js no existe el objeto Window.
*/
console.clear();

// console.log(window);
// let alerta = alert("Esto es una alerta");
// let confirmacion = confirm("Hola, esto es una confirmacion");
// let aviso = prompt("Hola, esto es un aviso y le permita al usuario ingresar un valor");

// console.log(alerta);
// console.log(confirmacion);
// console.log(aviso);

/*31 - Expresiones Regulares 
Es una secuencia de caracteres que forma un patron de busqueda, que principalmense es utilizado en
para la busqueda de patrones de cadenas de caracteres.
 */

let cadenaExpReg = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 65";

let expReg = new RegExp("lorem","i");
console.log(expReg.test(cadenaExpReg)); // Devuelve True o False
console.log(expReg.exec(cadenaExpReg)); // Devuelve array con mas informacion.

//let expReg2 = /\d/ig;
let expReg2 = /[0-9]/ig;
console.log(expReg2.test(cadenaExpReg));
console.log(expReg2.exec(cadenaExpReg));



// 32 - Funciones anonimas Autoejecutables (IIFE).
/* Permiten encapsular codigo */

(function () {
  console.log("Mi primer IIFE");
})();

(function (d, w, c) {
  console.log("Mi segundo IIFE");
  console.log(d);
  console.log(w);
  console.log(c);
})(document, window, console);

// Formas de escribir las funciones Anonimas Autoejecutables.

//Clasica.
(function () {
  console.log("Version Clasica.")
})();

// La Crockford (JavaScript The Good Parts)
((function () {
  console.log("Version Crockford.");
})());

// Unaria
+function () {
console.log("Version Unaria.")
}();

// Facebook
!function(){
  console.log("Version Facebook.");
}();

// ** 33 - Modulos (import / export)

