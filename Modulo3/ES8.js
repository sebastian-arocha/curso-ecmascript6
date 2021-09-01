//OBJECT.ENTRIES
/* Esta función nos permite crear una matriz con las propiedades
y valores de un objeto donde {propiedad: valor} hacen parte de 
un array dentro de la matriz */

//Creamos nuestro objeto
const data = { frontend: "Oscar", backend: "Isabel", design: "Ana" };

/*Guardamos el resultado de la función en una variable, por lo que
la variable será la matriz con los arrays de las propiedades*/
const entries = Object.entries(data);

//Imprimimos e+l contenido de la matriz
console.log(entries);
//Imprimimos la cantidad numérica de arreglos dentro de la matriz
console.log(entries.length);

//OBJECT.VALUES
/* El método Object.values() devuelve un array donde
 los elementos son los valores de las propiedades
 del objeto con el que estamos trabajando */

//Creamos nuestro objeto
const data2 = { nombre: "Sebastian", edad: 19, país: "Venezuela" };

//Guardamos en una constante el array con los valores de las propiedades
const values = Object.values(data2);
//Imprimimos ese array
console.log(values);
//Imprimimos la cantidad numérica de elementos en el array
console.log(values.length);

// PADDING
/* Esta funcionalidad nos permite añadir cadenas vacías, 
completar con otros strings, o con caracteres un string
que tengamos, esto sirve cuando queremos darle 
una estructura al texto que estemos presentando en el frontend*/

/* El método padStart y padEnd reciben dos parámetros los cuales
son (maximoDeCaracteres: número de carácteres, completarString: cadena de texto) */

const palabra = "Yellow";

console.log(palabra.padStart(10, "-")); //----Yellow
console.log(palabra.padEnd(10, "-")); //Yellow----
console.log(palabra.padStart(10, "Blue")); //BlueYellow
console.log(palabra.padEnd(10, "Blue")); //YellowBlue

// TRAILING COMMAS
/* Añadir una coma al final de cada elemento de nuestro objeto
nos permite que no tengamos errores al añadir nuevos objetos por
no poner una coma, muchos editores de texto resaltan cuando hay un 
error por no colocar estas comas ya que es un estandar para
escribir los objetos*/

const obj = {
  nombre: "Sebastian",
  apellido: "Arocha",
};
