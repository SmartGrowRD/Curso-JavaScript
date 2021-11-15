// 49 - Symbols
/**
 * Es un nuevo tipo de dato primitivo, incluido desde ECS 2015, se utilizan para crear propiedades privadas
 * dentro de los objetos, nos permiten crear identificadores unicos.
 *
 */

let id = "hola";
let id2 = "hola";
console.log(id === id2); // Comparacion extricta (true).

let ids = Symbol("Etiqueta"); // Recibe como parametro un string que utiliza como etiqueta.
let ids2 = Symbol();
console.log(ids === ids2); // Comparacion Extricta (false), ya que symbol crea referencia unica.

const NOMBRE = Symbol("Nombre");
const SALUDAR = Symbol("Saludo");

const persona = {
  [NOMBRE]: "Rubby", // [] Especifica que va a recibir un Symbol.
  Edad: 32,
};

console.log(persona);
persona.NOMBRE = "Rubby Antonio Perez";
console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);

persona[SALUDAR] = function () {
  console.log("Hola");
};
console.log(persona);
persona[SALUDAR]();

for (const propiedad in persona) {
  // Los tipo Symbols son propiedades privadas.
  console.log(propiedad);
  console.log(persona[propiedad]);
}

console.log(Object.getOwnPropertySymbols(persona));

// 50 - SETS
/**
 * Es una estructura muy similar a un Array Pero de datos unicos, no permite elementos duplicados.
 * Esto solo tiene validez con valores primitivos.
 */

let set = new Set([
  1,
  2,
  3,
  3,
  4,
  5,
  6,
  true,
  false,
  true,
  {},
  {},
  "Hola",
  "hola",
]);
console.log(set);
console.log(set.size);

let set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});

console.log(set2);
console.log(set2.size);

console.log("Elementos SET.");
for (const item of set) {
  console.log(item);
}

console.log("Elementos SET2.");
set2.forEach((item) => console.log(item));

let arr = Array.from(set2); // Convertir Set En array
console.log(arr);
console.log(arr[2]);

set.delete("Hola"); // Elimina elemento de la coleccion.
console.log(set.has("hola")); // Verifica si elemento esta en una coleccion.

set2.clear(); // Limpia Coleccion.

// 51 - Maps
/**
 * Son objetos "Datos Complejos" iterables que funcionan como diccionarios de datos.
 * En un objeto primitivo, las llaves "Propiedades"" son cadenas de texto, en cambio en un Map, las llaves (Propiedades) puede ser cualquier cosa, numero, bool, etc.
 */

let mapa = new Map();
mapa.set("Nombre", "Rubby"); // Agrega llave a objeto.
mapa.set("Apellido", "Perez");
mapa.set("Edad", 32);

console.log(mapa);
console.log(mapa.size); // Tamaño de la coleccion.
console.log(mapa.has("correo")); // Verifica si una llave existe en la coleccion, devuelve (Boolean)
console.log(mapa.has("Nombre"));
console.log(mapa.get("Nombre")); // Obtiene el valor de una llave.
mapa.set("Nombre", "Rubby Antonio"); // Establece valor a llave.
console.log(mapa.get("Nombre"));
mapa.delete("Apellido"); // Elimina Llave de coleccion.

mapa.set(10, "Diez"); // Las llaves de un Map, puede ser cualquier tipo.
mapa.set(true, "Bool");
mapa.set({}, {});
console.log(mapa);

for (let [key, value] of mapa) {
  console.log(`Llave: ${key}, Valor: ${value}`);
}

const mapa2 = new Map([
  ["Nombre", "Elmer"],
  ["Edad", 5],
  ["Animal", "Perro"],
  [null, "Nulo"],
]);

console.log(mapa2);

const llavesMapa2 = [...mapa2.keys()]; // Destructuracion de llaves objeto en un array, se utiliza operador Spread.
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);

// 52 - WeakSets & WeakMaps.
/**
 * Son Objetos no iterables que al nulifizar los valores de sus items el garbage collector del navegador va a eliminar estas llaves,
 * a diferencia de los Sets y Maps, estos tienen ciertas limitaciones y carencias.
 *
 * 1 - No son objetos iterables.
 * 2 - No se pueden limpiar todos sus items de una sola vez, solo de uno en uno, no existe clear();
 * 3 - No se puede verificar su tamaño, no existe size();
 * 4 - Solo aceptan referencias debiles "Objetos".
 */

const ws = new WeakSet();

let valor1 = { Valor: 1 };
let valor2 = { Valor: 2 };
let valor3 = { Valor: 3 };

ws.add(valor1);
ws.add(valor2);
ws.add(valor3);
console.log(ws);

console.log(ws.has(valor1)); // Comprueba si el valor existe en el objeto.
ws.delete(valor3); // Elimina valor.

const wm = new WeakMap();

let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1); // Establece key
wm.set(llave2, 2);
wm.set(llave3, 3);
console.log(wm);
console.log(wm.get(llave1)); // Obtiene valor key

// 53 - Iterables & Iterators
/**
 * Tipo de dato iterable: Es una estructura de dato lineal, que tienes sus elementos publicos y se puden recorrer
 * ejemplo: arrays, strings, etc.
 *
 * El iterador es una interfaz que funciona como un apuntador o mecanismo que recorre el elemento.
 */

const iterable = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Accedemos al iterador del iterable.
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);
console.log(iterador.next()); // Devuelve un objeto {value: Valor, done: Bool}, cada vez que se ejecuta funcion pasa al siguente elemento.

let next = iterador.next();

while (!next.done) {
  console.log(next.value);
  next = iterador.next();
}

// 54 - Generators

/**
 * Los Generators sirven para generar iteradores, es una funcion que permite trabajar de una manera mas amigable con la interfaz de los iteradores en un elemento iterable.
 * Converte el codigo de una funcion en iterable.
 */

function* iterableG() {
  // Para que Javascript sepa que es una funcion de tipo generator solo hay que agragar * despues de function.
  yield "Hola";
  console.log("Hola consola");
  yield "Hola 2"; // yield es parecido al return
  console.log("Seguimos con mas intrucciones de nuesto codigo.");
  yield "Hola 3";
  yield "Hola 4";
}

let iterator = iterableG();
/*console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());*/

for (let y of iterator) {
  // Iterar yields de Generator.
  console.log(y);
}

const array = [...iterableG()]; // Guardar yieds en un array, con operador Spread.
console.log(array);

// 55 - Proxys
/**
 * Es un nuevo mecanismo que tiene javascript que permite crear un objeto basado en un objeto literal inicial.
 * Estos a diferencias de las clases, que al crear un instacia de un objeto utilizando como referencia a ellas,
 * los proxies permiten crear instacias de un objeto a partir de un objeto literal, maneniendo este un vinculo con el
 * objeto original, sirviendo esto para realizar validaciones de propiedades antes de hacer la asignacion de un valor a traves de un manejador 'Handler'.
 */

const auto = {
  marca: "",
  modelo: "",
  year: "",
};

// Hander o manejador, donde se realizan las validaciones.
const handler = {
  set(obj, prop, valor) {
    if (Object.keys(obj).indexOf(prop) === -1) {
      // Validacion de si lapropiedad existe.
      return console.error(`La propiedad ${prop} no existe en el objeto auto.`);
    }
    if (
      prop === "marca" &&
      !/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/g.test(valor)
    ) {
      return console.error(
        `La propiedad ${prop} solo acepta letras y espacios en blanco.`
      );
    }
    // Las validaciones se realizan antes de asignar valor a la propiedad.
    obj[prop] = valor;
  },
};

const carro = new Proxy(auto, handler);
console.log(carro);
carro.condicion = "buena"; // Enviara un error porque la propiedad no existe en el objeto original.
carro.marca = "Corolla7"; // Enviara un error porque la propiedad "marca" solo admite letras y espacios en blanco.



// 56 - Propiedades Dinamicas de los Objetos. (Computed Properties).

/**
 * Estas son propiedades que se generan dinamicamente "En el momento de ejecucion."
 */

const objUsuarios = {}; // Creacion del objeto.
const usuarios = [
  "Antonio",
  "Joselo",
  "Miguel",
  "Leonardo",
  "Papito",
  "Roberto",
]; // Usuarios Dentro de Array.

// Creacion de propiedes en tiempo de ejecucion con natacion de [].
usuarios.forEach((usuario, index) => {
  objUsuarios[`id_${index}`] = usuario;
});
console.log(objUsuarios);

// Apartir del nuevo estandar de ECS5 podemos crear propiedades dinamicas desde dentro del mismo objeto.
let aleatorio = Math.round(Math.random() * 100);
const objUsuarios2 = {
  // Tambien se crean con notacion [] "Corchetes".
  [`id_${aleatorio}`]: "Valor Aleratorio.",
};
console.log(objUsuarios2);

// 57 - This

/**
 * Hace referencia al objeto en cuestion.
 */
console.log(this); // Devuelve el objeto gobal de los navegadores, el objeto "Window", en NojeJs seria "Global".

this.nombreScope = "Contexto Global"; // Se declara variable dentro del objeto global;

function imprimirScope() {
  console.log(this.nombreScope); // Objeto que hace referencia this es Windows.
}
imprimirScope();

const objScope = {
  nombreScope: "Contexto Objeto",
  imprimir: function () {
    console.log(this.nombreScope); // Objeto que hace referencia this es objScope.
  },
};
objScope.imprimir();

// imprimirScope hace referencia a la funcion imprimirScope que se declaro al objeto global, pero en este caso se mantenien el Scope del objeto objScope2 "Context Objeto 2".
const objScope2 = {
  nombreScope: "Contexto Objeto 2",
  imprimirScope,
};
objScope2.imprimirScope();

/** imprimirScope hace referencia a la funcion imprimirScope que se declaro al objeto global, pero en este caso hace referencia a nombreScope del objeto global,
 *  ya que las Arrow functions mantiene enlace con el objeto padre que en este caso es Window. "Contexto Global"".
 *  Las Arrow Functions no crean un Scope, por eso se salta al Scope del Objeto padre a diferencia de las funciones anonimas que si lo generan.
 *  Las funciones generan su contexto, excepto las Arrow Function que suben al Scope Padre.
 */
const objScope3 = {
  nombreScope: "Contexto Objeto 3",
  imprimirScope: () => {
    console.log(this.nombreScope);
  },
};
objScope3.imprimirScope();

// Funcion Constructora
function PersonaScope(nombreScope) {
  this.nombreScope = nombreScope;
  console.log(this.nombreScope);
}
// Imprime Rubby porque toma valor de la variable "nombreScope" que se ha declarado dentro de la funcion Constructora y asignado valor parametro.
let rubby = new PersonaScope("Rubby");

// Funcion Constructora
function PersonaScope2(nombreScope) {
  // Funcion Constructara genera su propio Scope.
  this.nombreScope = nombreScope;

  return function () {
    // Esta funcion anonima genera su Scope, pero al no haber ninguna propiedad "nombreScope dentro de ella, lo que hace es subir y regresar al contexto global."
    console.log(this.nombreScope + " Test");
  };
}
// Imprime "Contexto Global".
let rubby2 = new PersonaScope2("Rubby");
rubby2();

// Funcion Constructora
function PersonaScope3(nombreScope) {
  // Funcion Constructara genera su propio Scope.
  this.nombreScope = nombreScope;

  return () => {
    //Esta Arrow Function no genera Scope, pero sube al Scope Padre, donde si existe la propiedad "nombreScope".
    console.log(this.nombreScope + " Test");
  };
}
// Imprime "Contexto Global".
let rubby3 = new PersonaScope3("Rubby Arrow Func.");
rubby3();

/**"this" hace referencia al scope donde se encuentra, las funciones anónimas crean scopes pero las arrow-functions no y éstas últimas
 * se brincan al scope superior para buscar la propiedad. */



// 58 - Call, Apply, Bind

