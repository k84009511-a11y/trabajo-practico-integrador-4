## Tema 1: ¿Qué es TypeScript?

**¿Qué es TypeScript y quién lo desarrolla?**
TypeScript es un lenguaje de programación que está hecho sobre JavaScript. Básicamente es JavaScript, pero con la posibilidad de decirle de qué tipo es cada dato (texto, número, etc.). Lo desarrolla Microsoft. Todo código JavaScript también funciona en TypeScript.

**¿Qué diferencias tiene con JavaScript?**
La principal es que TypeScript tiene tipos y JavaScript no. En JavaScript un error de tipos recién se ve cuando el programa ya está funcionando, y en TypeScript se ve antes, mientras uno escribe el código. Otra diferencia es que los navegadores y Node no entienden TypeScript directamente: el código se convierte a JavaScript y en ese paso los tipos desaparecen.

**¿Qué ventajas ofrece?**
Las ventajas que encontré son que avisa de los errores antes de ejecutar, que el editor ayuda más con el autocompletado y que los tipos sirven como documentación, porque con solo mirarlos se entiende qué datos usa cada función. Esto es útil sobre todo en proyectos grandes.

**¿Cuál es su versión actual?**
La versión estable actual es la 7.0, que salió el 8 de julio de 2026. Es mucho más rápida que las anteriores porque Microsoft reescribió el compilador en otro lenguaje (Go). También hay una versión 7.1 en beta, pero todavía no es la estable.

## Tema 2: Crear y ejecutar un proyecto

**¿Cómo se instala TypeScript en un proyecto?**
Primero se crea el proyecto con (npm init -y) y después se instala con:
npm i -D typescript @types/node tsx

La '-D' significa que es una herramienta de desarrollo, o sea que sirve para programar pero no hace falta para que el programa funcione. Se instala dentro del proyecto (y no en toda la computadora) para que cualquiera que lo descargue tenga la misma versión.

**¿Para qué sirve el archivo tsconfig.json?**
Es el archivo donde se configura el proyecto. Le dice a TypeScript qué archivos tiene que revisar, qué tan estricto tiene que ser con los tipos y en qué carpeta tiene que guardar el JavaScript que genera. Sin este archivo, el comando "tsc" no sabe qué compilar.

**¿Qué hace el comando "tsc"?**
tsc es el compilador de TypeScript. Revisa que los tipos estén bien y, si todo está correcto, convierte los archivos .ts en archivos .js. Si no encuentra errores no muestra nada, y eso significa que está todo bien. Con tsc --noEmit solo revisa los tipos sin crear archivos.

**¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?**

- **tsc**: no ejecuta el programa. Revisa los tipos y genera el JavaScript. Es la única de las tres que avisa si hay errores de tipos.
- **tsx**: ejecuta el archivo .ts directamente, sin pasos intermedios. Es cómoda para desarrollar, pero no revisa los tipos, así que ejecuta aunque haya errores.
- **node**: las versiones nuevas de Node pueden ejecutar un .ts borrando los tipos. Tampoco revisa los tipos y además no funciona con cosas como los enum.

## Tema 3: Tipos básicos

**¿Qué son los tipos string, number y boolean?**
Son los tipos más simples. string es para texto (por ejemplo "Marcos"), number es para números, sean enteros o con decimales (por ejemplo 30), y boolean es para verdadero o falso (true o false). Si una variable es de un tipo, no se le puede guardar un valor de otro tipo.

ts
let nombre: string = "Ana";
let edad: number = 20;
let activo: boolean = true;

**¿Cómo se declara un array con tipo?**
Se escribe el tipo de lo que va a guardar y después []. Por ejemplo, number[] es una lista de números y string[] es una lista de textos. Si se intenta meter un dato de otro tipo, TypeScript marca error.

ts
let numeros: number[] = [1, 2, 3];

**¿Qué es un tipo unión?**
Es un tipo que permite que una variable sea de más de un tipo, separándolos con |. Por ejemplo, string | number quiere decir que puede ser texto o número. Antes de usar el valor hay que fijarse de qué tipo es realmente, por ejemplo con typeof.

ts
let id: string | number = "ABC123";
id = 456;

**¿Por qué se recomienda evitar any?**
Porque any hace que TypeScript deje de revisar esa variable: acepta cualquier cosa y no avisa de ningún error. Entonces se pierde la ventaja de usar TypeScript y los errores aparecen recién cuando el programa ya está corriendo. Si no se sabe qué tipo tiene un dato, es mejor usar unknown, que obliga a comprobar el tipo antes de usarlo.

## Tema 4: Funciones

**¿Cómo se indican los tipos de los parámetros?**
Se escribe : y el tipo después del nombre de cada parámetro. Así la función solo acepta datos del tipo correcto.

ts
function sumar(a: number, b: number) { ... }

**¿Cómo se indica el tipo de retorno?**
Se escribe : y el tipo después de los paréntesis. Eso indica qué tipo de dato devuelve la función. Si la función no devuelve nada, se usa void.

ts
function sumar(a: number, b: number): number {
return a + b;
}

**¿Qué es un parámetro opcional?**
Es un parámetro que no es obligatorio al llamar a la función. Se marca poniendo ? después del nombre. Si no se envía, vale undefined, por eso hay que comprobarlo antes de usarlo.

ts
function saludar(nombre: string, apellido?: string) { ... }

**¿Qué es un parámetro por defecto?**
Es un parámetro que ya tiene un valor asignado. Si al llamar a la función no se envía ese dato, se usa el valor que tiene por defecto.

ts
function crear(nombre: string, rol: string = "USER") { ... }

## Tema 5: Interfaces y type

**¿Qué es una interfaz y para qué sirve?**
Una interfaz (interface) sirve para describir cómo tiene que ser un objeto: qué propiedades tiene y de qué tipo es cada una. Así, si se crea un objeto y falta una propiedad o tiene un tipo equivocado, TypeScript avisa. Una interfaz también se puede ampliar con extends.

ts
interface Usuario {
id: number;
nombre: string;
}

**¿Qué es un type?**
Un type es una forma de ponerle nombre a un tipo. Se puede usar para describir objetos, igual que una interfaz, pero también sirve para uniones y para valores exactos.

ts
type ID = string | number;
type Rol = "ADMIN" | "USER" | "GUEST";

**¿Cómo se declara una propiedad opcional?**
Poniendo ? después del nombre de la propiedad. Eso significa que el objeto puede tenerla o no.

ts
interface Usuario {
nombre: string;
edad?: number;
}

**¿Cuándo conviene usar cada uno?**
Según la guía de la cátedra, interface conviene para objetos y clases, sobre todo si se necesita extends. type conviene para uniones, intersecciones, valores exactos y para ponerle nombre a tipos simples. Para objetos sencillos los dos sirven, lo importante es usar siempre el mismo criterio en el proyecto.

## Tema 6: Enums y tipos literales

**¿Qué es un enum?**
Un enum es un grupo de constantes con nombre. Se usa cuando hay una lista fija de opciones, como los estados de una tarea. A diferencia de otros tipos, el enum no desaparece al compilar: TypeScript lo convierte en un objeto de JavaScript.

ts
enum Estado {
PENDIENTE = "PENDIENTE",
COMPLETADO = "COMPLETADO",
}
let estado: Estado = Estado.PENDIENTE;

**¿Qué es un tipo literal?**
Es un tipo que acepta solamente un valor exacto. Si se combinan varios con |, la variable solo puede valer uno de esos valores.

ts
type Rol = "ADMIN" | "USER" | "GUEST";
let rol: Rol = "ADMIN";

**¿En qué se parecen y en qué se diferencian?**
Se parecen en que los dos limitan los valores que puede tener una variable, y en que si uno se equivoca de valor, el editor avisa. Se diferencian en que el enum existe cuando el programa corre (genera código) y se usa con su nombre, como Estado.PENDIENTE, mientras que el tipo literal desaparece al compilar y se usa con el valor directo, como "ADMIN". Por eso el enum no funciona ejecutando con node archivo.ts, pero el tipo literal sí.

**¿En qué situaciones se puede usar cada uno?**
El enum se puede usar cuando se quiere tener un grupo de constantes con nombre, como estados o categorías. El tipo literal se puede usar cuando solo hace falta limitar las opciones de un dato, como un rol o una dirección, sin agregar código extra.

## Fuentes consultadas

- Instituto Politécnico Formosa. _Introducción a TypeScript_ (Guía teórico-práctica, Unidad 4, 2026).
- Documentación oficial de TypeScript: https://www.typescriptlang.org/docs/
- Referencia de tsconfig: https://www.typescriptlang.org/tsconfig
- Anuncio de TypeScript 7.0 (blog oficial): https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/
- Documentación de Node.js sobre TypeScript: https://nodejs.org/api/typescript.html
