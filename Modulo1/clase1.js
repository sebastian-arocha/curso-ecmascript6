// PARÁMETROS POR DEFECTO

// Como se realizaban las funciones antes de ES6
function newFunction(name, age, country) {
  var name = name || "Sebastian";
  var age = age || 19;
  var country = country || "Venezuela";
  console.log(name, age, country);
}

newFunction();

// Como se hace en ES6 con la asignación de parámetros
function newFunction2(name = "Sebastian", age = 19, country = "Venezuela") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Carolina", 25, "Colombia");

// CONCATENACIÓN

// Como creabamos una frase con variables antes de ES6
let hello = "Hello";
let world = "World!";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// Ahora, en ES6 con el uso de template literals

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
