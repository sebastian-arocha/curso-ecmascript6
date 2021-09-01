// MÉTODO INCLUDES
/* El método includes nos permite buscar si un elemento se
encuentra dentro de nuestro array, a este elemento le podemos
pasar dos parámetros (searchElement, indexFrom) el primer
parámetro es el elemento que queremos buscar y el segundo, que
es opcional, nos permite buscarlo desde cierta posición en el array */

let numbers = [1, 2, 3, 7, 8, 5, 6];

//Primer Ejemplo pasandole solo un parámetro
/*En este ejemplo utilizaremos el método includes y validaremos con 
un condicional si el elemento 7 se encuentra dentro del array, dependiendo
de si es verdadero o falso retornará un resultado en la consola*/

if (numbers.includes(7)) {
  console.log("Si se encuentra el número 7");
} else {
  console.log("No se encuentra");
}

//Segundo ejemplo pasándole ambos parámetros
/* En este ejemplo validaremos dos casos, el primero es falso y el segundo
es verdadero. El primer caso buscará el número 3 desde la posición 5 del array
y el segundo caso buscará el número 5 desde la posición 4 del array y 
dependiendo del resultado ejecutará el bloque de código dentro del condicional*/
if (numbers.includes(3, 5)) {
  console.log("Se encuentra el 3 desde la p. 5");
} else {
  console.log("No se encuentra");
}

if (numbers.includes(5, 4)) {
  console.log("Se encuentra el 5 desde la p.4");
} else {
  console.log("No se encuentra");
}

// OPERACIONES DE FORMA EXPONENCIAL - POTENCIACIÓN
/* En EcmaScript 7 se añadio la posibilidad de hacer
operaciones de potenciación utilizando el
operador de potencia (**). En el siguiente ejemplo
podremos ver como podemos hacer una operacion de potencia
con valores asignados en variables */
const base = 3;
const exponente = 2;
const potencia = base ** exponente;
console.log(`El resultado de 3 a la 2 es: ${potencia}`);

// 2. Ejemplo, potencia directa
/* Simplemente podemos ejecutar esta operación como cualquier
otra en JavaScript */
console.log(4 ** 2);
