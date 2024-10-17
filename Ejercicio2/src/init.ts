function saludar(nombre: string, saludo?: string): string {
  return `${saludo || "Hola"}, ${nombre}!`;
}

console.log(saludar("Pedro"));
console.log(saludar("Ana", "Buenos días!!!"));
