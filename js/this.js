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
 
 console.log("---- Clase 58-------")
 
 // 58 - Call, Apply, Bind
 /** */

 this.lugar = "Contexto Global";  // lugar declarado en contexto Windows "Global".

 function saludar(saludo, aQuien){
     console.log(`${saludo} ${aQuien} Estamos en el ${this.lugar}`);
 }
 saludar("Hi","Pedro");

 const obj = {
     lugar: "Contexto Objeto."
 }
 // Call obtiene el Scope del objeto que se pasa como parametro.
 saludar.call(obj,"Hola", "Rubby");
 // Si se coloca null se va al contexto Global.
 saludar.call(null,"Hola", "Rubby");
 // Apply funciona del mismo modo que Call, la unica diferencia es como reciben parametros, este lo hace atraves de un Array[].
 saludar.apply(obj,["Adios","Rubby"])


const persona = {
    nombre: "Carlos",
    saludar: function () {
        console.log(`Hola ${this.nombre}`);
    }
}
persona.saludar();

const otraPersona = {
    saludar: persona.saludar.bind(persona) // bind enlaza con el contexto del objeto persona, this enlaza con objeto "Window" Global.
}
otraPersona.saludar();

/**bind() funciona como call(), si la hacemos autoejecutable: 
personaDos.saludar.bind(pesonaUno)()
Este llamado de saludar(), tomará el contexto de la instancia personaUno, a pesar de ser llamado por personaDos. */

