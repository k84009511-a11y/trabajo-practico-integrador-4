// Tema 1: ¿Qué es TypeScript?
export {};

// TypeScript es JavaScript con tipos: acá le digo de qué tipo es cada dato.
let nombre: string = "Ana";
let edad: number = 20;
console.log("Nombre:", nombre, "- Edad:", edad);

// Si intento guardar un dato de otro tipo, TypeScript marca error en el editor:
// edad = "veinte"; // Error: el tipo 'string' no se puede asignar al tipo 'number'

// TypeScript también puede deducir el tipo solo (inferencia)
let ciudad = "Formosa"; // TypeScript infiere que es string
console.log("Ciudad:", ciudad);

// Una función con tipos: se sabe qué recibe y qué devuelve
function calcularAnioNacimiento(anioActual: number, edadPersona: number): number {
  return anioActual - edadPersona;
}
console.log("Año de nacimiento:", calcularAnioNacimiento(2026, edad));

// Todo código JavaScript válido también es TypeScript válido
const numeros = [1, 2, 3];
const dobles = numeros.map((n) => n * 2);
console.log("Dobles:", dobles);

// Los tipos desaparecen al convertir a JavaScript: solo existen mientras escribo.
interface Persona {
  nombre: string;
  edad: number;
}
const persona: Persona = { nombre, edad };
console.log("La interfaz no existe al ejecutar, pero el objeto sí:", persona);
console.log("Tipo del objeto en ejecución:", typeof persona);
