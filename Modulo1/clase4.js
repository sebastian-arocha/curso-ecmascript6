// CLASES

//1. Ejemplo
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(26, 2));

//2. Ejemplo

class Empleado {
  constructor(nombre, edad, cargo, pais) {
    this.nombre = nombre;
    this.edad = edad;
    this.cargo = cargo;
    this.pais = pais;
  }
  infoPersonal() {
    console.log(
      `
      Nombre: ${this.nombre} 
      Edad: ${this.edad} 
      Cargo: ${this.cargo} 
      País: ${this.pais}`
    );
  }
  saludar() {
    console.log("Hola!");
  }
}

const DataScientist = new Empleado("Carlos", 23, "Data Scientist", "Colombia");
DataScientist.infoPersonal();
const SWEngineer = new Empleado("David", 30, "Ingeniero de Software", "México");
SWEngineer.infoPersonal();

//3. Ejemplo

class Gerentes extends Empleado {
  constructor(nombre, edad, cargo, pais, salario) {
    super(nombre, edad, cargo, pais);
    this.salario = salario;
  }
  infoPersonal() {
    console.log(
      `
      Nombre: ${this.nombre}
      Edad: ${this.edad} 
      Cargo: ${this.cargo} 
      País: ${this.pais}
      Salario: ${this.salario}
      `
    );
  }
}

const CEO = new Gerentes("Freddy", "35", "CEO", "Colombia", "300.000$");
CEO.infoPersonal();

// MÓDULOS

// import { hello } from "./clase4-module"; //sintaxis ES6

// hello();

const hello = require("./clase4-module"); //Sintaxis ES5 Node.js

console.log(hello());

// GENERADORES

function* helloWorld() {
  if (true) {
    yield "Hello";
  }
  if (true) {
    yield "World!";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

// 2. Ejemplo

function* RuedaDeLaFortuna() {
  yield console.log("Tienes 100$");
  yield console.log("Ups! Menos 90$. Ahora tienes 10$.");
  yield console.log("Hoy es tu día! Recibes 3.000$");
  yield console.log("Pierdes todo lo que tienes. Ahora estás en 0$");
  yield console.log("Ganas 100$. Se te acabaron tus tickets");
  yield "Fin del juego!";
}

const fortuna = RuedaDeLaFortuna();
fortuna.next();
fortuna.next();
fortuna.next();
fortuna.next();
fortuna.next();
console.log(fortuna.next().value);
console.log(fortuna.next().value);

// 3. Ejemplo

//Creamos nuestra función generadora y dentro colocaremos
//los yields que retornarán una acción por cada llamada

function* miFuncionGeneradora() {
  yield "Hola";
  yield "Mundo!";
  yield "Soy Sebastian Arocha";
  yield "Estudiante de Desarrollo de 19 años";
  yield "Y seré un gran programador!";
}

//Generamos una nueva instancia de la función en una variable

const generador = miFuncionGeneradora();

for (let y of generador) {
  console.log(y);
}
