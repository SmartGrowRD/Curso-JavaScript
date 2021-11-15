export const PI = Math.PI;

export default function saludar(){ // Default solo funciona con funciones declaradas.
    console.log("Saludo +ECS6");
}

export class Saludo{
    constructor(){
        console.log("Hola Clase")
    }
}