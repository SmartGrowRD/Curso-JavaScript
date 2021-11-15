/** ORDENAMIENTO DE CODIGO
 * 1- Importacion de Modulos.
 * 2- Declaracion de variables.
 * 3- Declaracion de Funciones.
 * 4- Ejecucion de Codigo.
 */
import saludar, {PI, Saludo} from "./constantes.js" // default, {Destructuracion, ..., ....} from "./archivos.js"
import{sumar, restar, aritmetica as calculos} from "./aritmetica.js";
// aritmetica - calculos "Alias"

console.log("Archivo de  modulo");
console.log(PI);
console.log(sumar(5,5));
console.log(calculos.multiplicar(4,4));
console.log(calculos.dividir(6,2));
saludar();
let saludo = new Saludo();