// MULTILINEAS

// Multilineas antes de ES6
let multilinea =
  "esta es una frase de prueba, nada de lo que veas aquí es verdad \n" +
  "luke, yo soy tu padre, el lado oscuro esta en ti";

// Multilineas en ES6

let nuevaMultiLinea = `esto es una frase épica en EcmaScript 6, nada de lo que veas

es parecido a la realidad, esto es otra frase en una linea nueva`;

// DESESTRUCTURACIÓN

// Como se hacía antes de ES6
let person = {
  name: "Sebastian",
  age: 19,
  country: "Venezuela",
};

console.log(person.name, person.age, person.country);

// Desde ES6

let { name, age } = person;
console.log(name, age);

// OPERADOR DE PROPAGACIÓN

let team1 = ["Oscar", "Sebastian", "Daniel"];
let team2 = ["Alejandra", "Camila", "Valeria"];
let team3 = ["Dayana", "Alvaro", "David"];

let integrantesGeneral = [...team1, ...team2, ...team3];
console.log(integrantesGeneral);

//LET Y CONST

{
  var miNombre = "Sebastian";
}

console.log(miNombre);

{
  let miApellido = "Arocha";
  console.log(miApellido);
}

// console.log(miApellido);

{
  const miEdad = 19;
  // const miEdad = 25; - Error, miEdad ya ha sido declarada
  console.log(miEdad);
}
