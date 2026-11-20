# Glosario de TypeScript

Términos importantes de los temas investigados, cada uno con una definición corta y un ejemplo simple.

## 1. Tipado estático
Es cuando los tipos de los datos se revisan antes de ejecutar el programa, mientras se escribe el código. TypeScript tiene tipado estático opcional.

```ts
let edad: number = 20;
// edad = "veinte"; // Error: no se puede guardar un string en un number
```

## 2. Inferencia de tipos
Es cuando TypeScript deduce el tipo de una variable a partir de su valor inicial, sin que haya que escribirlo.

```ts
let ciudad = "Formosa"; // TypeScript infiere que es string
// ciudad = 42; // Error
```

## 3. Tipo primitivo
Son los tipos más simples: `string` (texto), `number` (números) y `boolean` (verdadero o falso).

```ts
let nombre: string = "Ana";
let edad: number = 20;
let activo: boolean = true;
```

## 4. Array tipado
Es una lista donde todos los elementos son del mismo tipo. Se escribe el tipo seguido de `[]`.

```ts
let numeros: number[] = [1, 2, 3];
numeros.push(4);
```

## 5. Tupla
Es un array con una cantidad fija de elementos, donde cada posición tiene su propio tipo.

```ts
let usuario: [string, number] = ["Juan", 25];
```

## 6. Tipo unión
Permite que un valor sea de uno entre varios tipos, separados por `|`.

```ts
let id: string | number = "ABC123";
id = 456;
```

## 7. any
Es un tipo que desactiva la revisión de TypeScript: acepta cualquier valor y no avisa de errores. Conviene evitarlo.

```ts
let cualquierCosa: any = "texto";
cualquierCosa = 42;
```

## 8. unknown
Es un tipo para datos de los que no se sabe el tipo. A diferencia de `any`, obliga a comprobar el tipo antes de usarlos.

```ts
let dato: unknown = "texto";
if (typeof dato === "string") {
  console.log(dato.toUpperCase());
}
```

## 9. Interface
Describe cómo tiene que ser un objeto: qué propiedades tiene y de qué tipo es cada una. Se puede ampliar con `extends`.

```ts
interface Usuario {
  id: number;
  nombre: string;
}
const user: Usuario = { id: 1, nombre: "María" };
```

## 10. Type (alias de tipo)
Es un nombre que se le pone a un tipo. Sirve para uniones, valores exactos y objetos.

```ts
type ID = string | number;
let codigo: ID = "P-001";
```

## 11. Propiedad opcional
Es una propiedad que el objeto puede tener o no. Se marca con `?` después del nombre.

```ts
interface Persona {
  nombre: string;
  edad?: number;
}
const ana: Persona = { nombre: "Ana" };
```

## 12. Parámetro opcional
Es un parámetro de una función que se puede omitir al llamarla. Se marca con `?`. Si no se envía, vale `undefined`.

```ts
function saludar(nombre: string, apellido?: string): string {
  return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}
saludar("Ana");
```

## 13. Parámetro por defecto
Es un parámetro que ya tiene un valor asignado, que se usa cuando no se envía otro.

```ts
function crear(nombre: string, rol: string = "USER"): string {
  return `${nombre} es ${rol}`;
}
crear("Luis");
```

## 14. void
Es el tipo de retorno de una función que no devuelve ningún valor.

```ts
function mostrar(mensaje: string): void {
  console.log(mensaje);
}
```

## 15. Enum
Es un grupo de constantes con nombre. A diferencia de otros tipos, se convierte en un objeto de JavaScript, es decir que sí existe cuando el programa corre.

```ts
enum Estado {
  PENDIENTE = "PENDIENTE",
  COMPLETADO = "COMPLETADO",
}
let estado: Estado = Estado.PENDIENTE;
```

## 16. Tipo literal
Es un tipo que acepta solamente un valor exacto. Combinados con `|`, limitan una variable a una lista de opciones.

```ts
type Rol = "ADMIN" | "USER" | "GUEST";
let rol: Rol = "ADMIN";
// rol = "OTRO"; // Error
```

## 17. Compilador (tsc)
Es la herramienta oficial de TypeScript. Revisa los tipos y convierte los archivos `.ts` en `.js`. Por ejemplo, `tsc` detectaría el error de la línea comentada antes de ejecutar el programa:

```ts
const total: number = 30;
// const otroTotal: number = "treinta"; // tsc marca: 'string' no se puede asignar a 'number'
```

---

**Fuentes:** guía de la cátedra *Introducción a TypeScript* (Unidad 4, 2026, Instituto Politécnico Formosa) y documentación oficial de TypeScript: https://www.typescriptlang.org/docs/
