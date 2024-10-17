"use strict";
function saludar(nombre, saludo) {
    return `${saludo || "Hola"}, ${nombre}!`;
}
console.log(saludar("Pedro"));
console.log(saludar("Ana", "Buenos días!!!"));
