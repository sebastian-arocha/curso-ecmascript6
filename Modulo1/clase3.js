// OBJETO MEJORADO

// Antes de ES6
let myName = "Sebastian";
let myLastName = "Arocha";

const myID = { name: myName, lastName: myLastName };
console.log(myID);

// Ahora en ES6
let petName = "Bruno";
let petType = "Dog";

const myPet = { petName, petType };
console.log(myPet);

// ARROW FUNCTIONS - FUNCIONES FLECHA

// Antes de ES6
const people = [
  { name: "John", university: "UCAB" },
  { name: "David", university: "UCV" },
  { name: "Sergio", university: "UNIMET" },
];

let namesOfPeople = people.map(function (person) {
  console.log(person.name);
});

// Después de ES6

//Cuando usamos un método del array y declaramos función anónima
let listOfNames = people.map((person) => console.log(person.name));

//Una función con más de 2 parámetros
const listOfNames2 = (a, b, c) => {
  const suma = a + b + c;
  console.log(suma);
};

listOfNames2(2, 4, 6);

//Función de un solo parámetro
const multiplicacionPor10 = (value) => {
  const suma = value * 10;
  console.log(suma);
};

multiplicacionPor10(5);

//Otra forma de hacerlo incluso más sencillo
const square = (num) => console.log(num * 4);
square(2);

// PROMESAS

/*Las promesas forman parte del asincronismo de JS, cuando creamos
estas promesas lo que estamos diciendo es que algo ocurrirá, y dependiendo
de la validación si es verdadero o falso entonces nos dará cierto resultado*/
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ups!!");
    }
  });
};

helloPromise()
  .then((Response) => console.log(Response))
  .catch((Error) => console.log(Error));
