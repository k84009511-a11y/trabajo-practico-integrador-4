// Tema 3: Tipos básicos
export {};

// string, number y boolean
let nombre: string = "Marcos";
let edad: number = 30;
let activo: boolean = true;
console.log("Primitivos:", nombre, edad, activo);

// Arrays con tipo
let numeros: number[] = [1, 2, 3];
let nombres: string[] = ["Ana", "Luis"];
numeros.push(4);
// numeros.push("cinco"); // Error: solo acepta números
console.log("Arrays:", numeros, nombres);

// Tupla: cantidad y tipo fijos en cada posición
let usuario: [string, number] = ["Juan", 25];
console.log("Tupla:", usuario[0], "tiene", usuario[1], "años");

// Tipo unión: puede ser string o number
let id: string | number = "ABC123";
console.log("ID como texto:", id);
id = 456;
console.log("ID como número:", id);

// Con una unión hay que revisar el tipo antes de usar métodos propios de uno
function mostrarId(valor: string | number): void {
  if (typeof valor === "string") {
    console.log("Es texto, en mayúsculas:", valor.toUpperCase());
  } else {
    console.log("Es número, con 2 decimales:", valor.toFixed(2));
  }
}
mostrarId("abc");
mostrarId(10);

// Unión con null: hay que verificar antes de usar
function mostrarLargo(texto: string | null): void {
  if (texto !== null) {
    console.log("El texto tiene", texto.length, "letras");
  } else {
    console.log("El texto es null, no se puede medir su largo");
  }
}
mostrarLargo("Formosa");
mostrarLargo(null);

// any: desactiva la verificación (conviene evitarlo)
let cualquierCosa: any = "texto";
cualquierCosa = 42; // TypeScript no avisa nada
console.log("any acepta cualquier cosa:", cualquierCosa);
// cualquierCosa.metodoQueNoExiste(); // No da error al escribir, pero falla al ejecutar

// unknown: acepta cualquier valor, pero obliga a verificar antes de usarlo
let dato: unknown = "texto";
// dato.toUpperCase(); // Error: primero hay que verificar el tipo
if (typeof dato === "string") {
  console.log("unknown verificado, en mayúsculas:", dato.toUpperCase());
}
