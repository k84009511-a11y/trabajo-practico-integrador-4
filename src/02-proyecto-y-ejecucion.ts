// Tema 2: Crear y ejecutar un proyecto
export {};

// Este archivo usa 'process', que es de Node. TypeScript lo conoce gracias a
// @types/node y a la opción "types": ["node"] del tsconfig.json.
console.log("Versión de Node:", process.version);

// Argumentos que se pasan por la terminal, por ejemplo:
//   npx tsx src/02-proyecto-y-ejecucion.ts Marcos
const argumentos: string[] = process.argv.slice(2);
const nombre: string = argumentos.length > 0 ? argumentos[0] : "Invitado";
console.log(`Hola, ${nombre}!`);

// Resumen de los comandos del proyecto (ver package.json):
const comandos: string[] = [
  "npm i -D typescript @types/node tsx  -> instala las herramientas",
  "npx tsc --noEmit                     -> solo verifica los tipos",
  "npm run build (tsc)                  -> verifica y genera dist/*.js",
  "npx tsx src/archivo.ts               -> ejecuta el .ts sin verificar tipos",
  "node dist/archivo.js                 -> ejecuta el JavaScript compilado",
];
console.log("Comandos principales:");
comandos.forEach((comando) => console.log(" -", comando));

// Ejemplo de por qué hace falta tsc: tsx y node no verifican tipos.
// Si descomento la línea de abajo, tsx la ejecuta igual (y falla recién al correr),
// pero tsc --noEmit la marca como error antes de ejecutar.
// const total: number = "treinta";
