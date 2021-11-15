// 59 - JSON
/**
 * JavaScript Object Notation
 */
// Objeto JavaScript
const json = {
  cadena: "Rubby",
  numero: 32,
  boolean: true,
  arrelgo: ["Subir", "Bajar", "Brincar"],
  objeto: {
    twiter: "@rubbyperez",
    email: "rubbyantonio@gmail.com",
  },
  nulo: null,
};
console.log(JSON);
// Parse analiza una cadena "string" que tenga un formato valido de JSON y lo convierte en un objeto JavaScript.
console.log(JSON.parse("{}"));
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.parse("true"));

// Stringify apartir de un objeto valido JavaScript lo convierte en una cadena de texto con notacion JSON.
console.log(JSON.stringify({}));
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify(null));
console.log(JSON.stringify({ a: 1, b: 2 }));
console.log(JSON.stringify(json));
console.log(JSON.parse('{"cadena": "Rubby","numero": 32,"boolean": true,"arrelgo": ["Subir", "Bajar", "Brincar"],"objeto": {"twiter": "@rubbyperez","email": "rubbyantonio@gmail.com"},"nulo": null}'));