// Tema 6: Enums y tipos literales
export {};

// Enum: grupo de constantes con nombre.
// Ojo: funciona con tsx y tsc, pero NO con "node archivo.ts".
enum Estado {
  PENDIENTE = "PENDIENTE",
  COMPLETADO = "COMPLETADO",
  CANCELADO = "CANCELADO",
}

let estadoTarea: Estado = Estado.PENDIENTE;
console.log("Estado inicial:", estadoTarea);
estadoTarea = Estado.COMPLETADO;
console.log("Estado nuevo:", estadoTarea);
// El enum existe al ejecutar: es un objeto de JavaScript
console.log("Todos los estados:", Object.values(Estado));

function describirEstado(estado: Estado): string {
  switch (estado) {
    case Estado.PENDIENTE:
      return "La tarea todavía no se hizo";
    case Estado.COMPLETADO:
      return "La tarea ya está terminada";
    case Estado.CANCELADO:
      return "La tarea se canceló";
  }
}
console.log(describirEstado(Estado.CANCELADO));

// Tipo literal: el valor tiene que ser exactamente uno de la lista
type Rol = "ADMIN" | "USER" | "GUEST";
type Direccion = "arriba" | "abajo" | "izquierda" | "derecha";

let rol: Rol = "USER";
console.log("Rol:", rol);
// rol = "SUPERADMIN"; // Error: no está en la lista

function mover(direccion: Direccion, pasos: number): void {
  console.log(`Me muevo ${pasos} pasos hacia ${direccion}`);
}
mover("arriba", 3);
// mover("adelante", 2); // Error: "adelante" no es una Direccion válida

// Alternativa al enum: objeto con 'as const' + un tipo sacado de él.
// Se usa igual que un enum, pero desaparece al compilar y anda con cualquier herramienta.
const Prioridad = {
  BAJA: "BAJA",
  MEDIA: "MEDIA",
  ALTA: "ALTA",
} as const;
type Prioridad = (typeof Prioridad)[keyof typeof Prioridad];

let prioridadTarea: Prioridad = Prioridad.ALTA;
console.log("Prioridad:", prioridadTarea);

// Diferencia: el tipo literal 'Rol' no existe al ejecutar (no se puede recorrer),
// en cambio el enum 'Estado' y el objeto 'Prioridad' sí.
