// Tema 5: Interfaces y type
export {};

// Interface: describe la forma de un objeto
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad?: number; // propiedad opcional
  readonly createdAt: Date; // solo lectura
}

const usuarioSinEdad: Usuario = {
  id: 1,
  nombre: "María",
  email: "maria@example.com",
  createdAt: new Date("2026-11-05"),
};
const usuarioConEdad: Usuario = {
  id: 2,
  nombre: "Pedro",
  email: "pedro@example.com",
  edad: 22,
  createdAt: new Date("2026-11-05"),
};
console.log("Sin edad:", usuarioSinEdad.nombre, usuarioSinEdad.edad);
console.log("Con edad:", usuarioConEdad.nombre, usuarioConEdad.edad);
// usuarioSinEdad.createdAt = new Date(); // Error: createdAt es de solo lectura

// Interface con un método
interface Producto {
  nombre: string;
  precio: number;
  calcularDescuento(porcentaje: number): number;
}
const remera: Producto = {
  nombre: "Remera",
  precio: 10000,
  calcularDescuento(porcentaje: number): number {
    return this.precio - (this.precio * porcentaje) / 100;
  },
};
console.log("Remera con 20% de descuento:", remera.calcularDescuento(20));

// extends: una interface que amplía a otra
interface Empleado extends Usuario {
  legajo: string;
  salario: number;
}
const empleado: Empleado = {
  id: 3,
  nombre: "Sofía",
  email: "sofia@example.com",
  createdAt: new Date("2026-11-05"),
  legajo: "A-100",
  salario: 900000,
};
console.log("Empleado:", empleado.nombre, "- legajo", empleado.legajo);

// type: alias de tipos
type ID = string | number;
type Rol = "ADMIN" | "USER" | "GUEST";
type Coordenada = {
  x: number;
  y: number;
};

const idProducto: ID = "P-001";
const rolActual: Rol = "ADMIN";
const punto: Coordenada = { x: 10, y: 20 };
console.log("ID:", idProducto, "- Rol:", rolActual, "- Punto:", punto);

// Intersección (&): junta dos tipos en uno
type EmpleadoCompleto = Empleado & {
  departamento: string;
};
const empleadoCompleto: EmpleadoCompleto = {
  ...empleado,
  departamento: "Sistemas",
};
console.log("Departamento de", empleadoCompleto.nombre + ":", empleadoCompleto.departamento);
