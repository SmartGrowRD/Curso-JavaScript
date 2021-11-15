console.log("Inicio...");

/*setTimeout(() => {
    console.log("Ejecutando un setTimeout, esto solo se ejecuta una vez.");
}, 2000);*/

/*setInterval(() => {
    console.log("Ejecutando un setInterval, esto se ejecuta cada 10000ms.");
}, 10000);*/

let temporizador = setTimeout(() => {
  console.log("Ejecutando un setTimeout, esto solo se ejecuta una vez.");
}, 1000);

let interval = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

clearTimeout(temporizador); // Elimina setTimeout
clearInterval(interval); // Elimina setInterval

/** Antes de explicar como funciona el modelo de JavaScript es importante entender algunos conceptos
 *
 * Procesamiento Single thread y Multi thread.
 * Operaciones de CPU y Operaciones I/O.
 * Operaciones Concurrentes y Paralelas.
 * Operacines Bloqueantes y No Bloqueantes.
 * Operaciones Sincronas y Asincronas.
 *
 * Javascript usa un modelo asincrono y no bloqueante con un loop de eventos
 * implementado en un solo hilo (Single Thread para operaciones de entrada y
 * salida (Input/Output)).
 */

// Codigo Sincrono Bloquante

/*(() => {
console.log("Codigo Sincrono");
console.log("Inicio");

function dos(){
    console.log("Dos");
}

function uno(){
    console.log("Uno");
    dos();
    console.log("Tres");
}

uno();
console.log("Fin");
})();

console.log("***********************");
// Codigo Asincrono No Bloquante.

(() => {
    console.log("Codigo Asincrono");
    console.log("Inicio");

    function dos(){
        setTimeout(() => {
            console.log("Dos");
        }, 1000);
    }

    function uno(){
        setTimeout(() => {
            console.log("Uno");
        }, 0);
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");
})(); */

/** Mecanismos de Asincronia de Javascript. */

// 46 - CALLBACKS

/** - Se utilizan para tener control del flujo de la aplicacion al manejar codigo asincrono.
 *  - No son  muy eficientes cuando tenemos la necesidad de concatenar varias peticionas asincronas.
 */

function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1000));
}

/* cuadradoCallback(0,(value, result) => {
    console.log("Iniciando Callback...");
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(1,(value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(2,(value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            cuadradoCallback(3,(value, result) => {
                console.log(`Callback: ${value}, ${result}`);
                cuadradoCallback(4,(value, result) => {
                    console.log(`Callback: ${value}, ${result}`);
                    cuadradoCallback(5,(value, result) => {
                        console.log(`Callback: ${value}, ${result}`);
                        console.log("Fin del Callback.");
                        console.log("Callback Hell !!!!")
                        console.log("wwww.callbackhell.com");
                    });
                });
            });
        });
    });
}); */

// 47 - PROMESAS

/** Estas se conviene utilizarlas cuando hay una necesidad de concatenar varios procesos asincronos. */

function cuadadradoPromise(value) {
  if (typeof value !== "number")
    return Promise.reject(`Error, El valor ${value} no es un valor numerico.`);
  return new Promise((resolve, reject) => {
    // resolve y reject son metodos (resolve es el retorno positivo de la promensa, mientras el reject es el retorno negativo 'Error')
    setTimeout(() => {
      resolve({
        value, //Objeto literal, propiedad y valor tienen el mismo nombre "Se simplifica.".
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

cuadadradoPromise(0)
  .then((obj) => {
    // Recibe el resolve de la promesa.
    console.log("Inicia Promesa.");
    console.log(`Promesa: ${obj.value}, ${obj.result}`);
    return cuadadradoPromise(1);
  })
  .then((obj) => {
    console.log(`Promesa: ${obj.value}, ${obj.result}`);
    return cuadadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promesa: ${obj.value}, ${obj.result}`);
    return cuadadradoPromise(3);
  })
  .then((obj) => {
    console.log(`Promesa: ${obj.value}, ${obj.result}`);
    return cuadadradoPromise(4);
  })
  .then((obj) => {
    console.log(`Promesa: ${obj.value}, ${obj.result}`);
    return cuadadradoPromise(5);
  })
  .then((obj) => {
    console.log(`Promesa: ${obj.value}, ${obj.result}`);
  })
  .catch((err) => console.error(err)); // Recibe el reject de la promesa.

// 48 - Async - Await
/**
 * Las funciones asincronas no vienen a sustituir las promesas, si no que trabajan en conjunto.
 */

async function funcionAsincronaDeclarada() {
  try {
    console.log("Inicio Async Function");
    let obj = await cuadadradoPromise(0);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadadradoPromise(1);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadadradoPromise(2);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadadradoPromise(3);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadadradoPromise(4);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadadradoPromise(5);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
  } catch (err) {
    console.error(err);
  }
}

funcionAsincronaDeclarada();

const funcionAsincronaExpresada = async () => {
  try {
    console.log("Inicio Async Function");
    let obj = await cuadadradoPromise(6);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadadradoPromise(7);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadadradoPromise(8);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadadradoPromise(9);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadadradoPromise(10);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    console.log("Fin Async Function");
  } catch (err) {
    console.error(err);
  }
};

funcionAsincronaExpresada();


