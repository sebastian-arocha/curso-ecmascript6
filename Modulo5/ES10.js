// Method .flat()
/* Devuelve una matriz con las 
submatrices aplanadas, y recibe
como argumento la profundidad  */

/* Los primeros elementos de la matriz son los
directores, la primera submatriz los profesores
y la segunda los estudiantes */
let escuela = [
  "Sebastian",
  "María",
  ["Luis", "Daniela", ["Lucia", "Andres", "Oscar", "Alejandro", "Mateo"]],
];

console.log(escuela.flat());
// ["Sebastian", "María", "Luis", "Daniela", ["Lucia", "Andres", "Oscar", "Alejandro", "Mateo"]]
console.log(escuela.flat(2));
// ["Sebastian", "María", "Luis", "Daniela", "Lucia", "Andres", "Oscar", "Alejandro", "Mateo"]

// Method .flatMap()
/* Permite modificar los 
elementos de una matriz y devolverla
en una nueva matriz con los elementos
aplanados */

let serieNumerica = [1, 2, 3, 4, 5];

console.log(serieNumerica.flatMap((value) => [value, value * 2]));
// [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

// Method .trimStart() y .trimEnd()
/* Elimina los espacios en blanco de un string,
trimStart lo hace desde el principio y trimEnd desde
el final del string */

let prueba = "      Tengo muchos espacios      ";
console.log(prueba);
//      Tengo muchos espacios
console.log(prueba.trimStart());
//Tengo muchos espacios
console.log(prueba.trimEnd());
//       Tengo muchos espacios
console.log(prueba.trimStart().trimEnd() + " Hola");
// Tengo muchos espacios Hola

// Optional Catch Binding

/* Al usar el catch con la sintaxis
antigua se le tenía que pasar como argumento 
el error, ahora podemos ahorrarnos eso */
// Forma antigua

try {
  console.log("Hola!");
} catch (error) {
  (error) => console.log(error);
}

// Forma nueva

try {
  console.log("Hola!");
} catch {
  (error) => console.log(error);
}

// Object.fromEntries()
/* Permite que podamos convertir
una matriz con submatrices que incluyan 
propiedades y valor en un objeto, este método
es el inverso a Object.entries() */

let entries = [
  ["name", "oscar"],
  ["age", 32],
];

const objeto = Object.fromEntries(entries);
console.log(objeto);
// {name: "oscar", age: 32}

// Symbol Object
/* Esta nueva función nos permite
acceder a la descripción de los objetos
de tipo símbolo */

let mySymbol = "My symbol object";
let symbol = Symbol(mySymbol);
console.log(symbol.description);
// My symbol object
