// Operador de reposo
/* Este operador nos permite desestructurar un objeto con las propiedades
que querramos solamente y tener todo lo demás encapsulado en un objeto, 
es decir, podemos sacar solo una propiedad y a todas las demás poder acceder
sin acceder al objeto propio */

const person = {
  nombre: "Sebastian",
  edad: 19,
  ocupación: "Estudiante",
  pais: "Venezuela",
};

let { nombre, ...all } = person;
console.log(nombre, all);

// Sebastian { edad: 19, 'ocupación': 'Estudiante', pais: 'Venezuela' }

// Propiedades de propagación
/* Con esto podemos obtener todo lo que contiene un objeto
y agregarlo a uno nuevo sin tener que asignar esas propiedades nuevamente */

const persona = {
  nombre: "Alejandro",
  edad: "19",
};

const dondeVive = {
  ...persona,
  pais: "Argentina",
};

console.log(dondeVive);

// { nombre: 'Alejandro', edad: '19', pais: 'Argentina' }

// 2. Ejemplo

const auto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: "2020",
  transmision: "Automático",
  color: "Negro",
};

const propietario = {
  nombres: "David Santiago",
  apellidos: "González Torres",
  cedula: "V-90455321",
  edad: 22,
  ocupacion: "Ingeniero Industrial",
};

const datosVenta = {
  numeroFactura: "A854FB23",
  concesionario: "TuToyota Las Mercedes",
  locacion: "Caracas",
  fecha: "21 de septiembre del 2021",
};

const factura = {
  ...auto,
  ...propietario,
  ...datosVenta,
};

console.log(factura);

// Promise.finally()
/* Esta característica nos permite saber cuando terminó la promesa
y poder ejecutar una función en el momento que haya terminado, para esto
añadiremos la característica .finally en el llamado de nuestra promesa 
y le mandaremos la función que queremos que ejecute */

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test error"));
  });
};

helloWorld()
  .then((Response) => console.log(Response))
  .catch((Error) => console.log(Error))
  .finally(() => console.log("Finalizó la promesa"));

//Hello World
//Finalizó la promesa

// Trabajar con Regex
/* Se incluyeron mejoras en las expresiones regulares
La captura de grupos nos permite nombrar grupos
 para encontrarlos de una manera más fácil */

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2021-09-02");
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);

// Otra forma de hacerlo
/* Al hacerlo de esta manera tenemos los grupos
especificados y podemos acceder a cada uno de
estos grupos destructurando el objeto match */

const regexData = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
const match = regexData.exec("2021-09-02");
const { year, month, day } = match.groups;
console.log(year, month, day);
