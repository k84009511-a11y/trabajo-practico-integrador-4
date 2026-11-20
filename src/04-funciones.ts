// Tema 4: Funciones
export {};

// Tipos en los parámetros y en el retorno
function sumar(a: number, b: number): number {
  return a + b;
}
console.log("sumar(2, 3) =", sumar(2, 3));
// sumar("2", 3); // Error: "2" es string y se esperaba number

// Parámetro opcional (?): se puede no enviar
function saludar(nombre: string, apellido?: string): string {
  return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}
console.log(saludar("Ana"));
console.log(saludar("Ana", "Gómez"));

// Parámetro por defecto: si no se envía, usa el valor indicado
function crearUsuario(nombre: string, rol: string = "USER"): void {
  console.log(`Usuario ${nombre} con rol ${rol}`);
}
crearUsuario("Luis");
crearUsuario("Marta", "ADMIN");

// void: la función no devuelve nada (crearUsuario es un ejemplo)

// Arrow function con tipos
const multiplicar = (a: number, b: number): number => a * b;
console.log("multiplicar(4, 5) =", multiplicar(4, 5));

// Parámetros rest: recibe cualquier cantidad de números
function sumarTodos(...nums: number[]): number {
  return nums.reduce((total, n) => total + n, 0);
}
console.log("sumarTodos(1, 2, 3, 4) =", sumarTodos(1, 2, 3, 4));

// Función que devuelve una Promise: el tipo indica qué valor trae al resolverse
function esperarMensaje(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Mensaje que llegó con retraso"), 500);
  });
}
esperarMensaje().then((mensaje) => console.log(mensaje));
