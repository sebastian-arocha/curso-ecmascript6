# Curso de ECMAScript 6+

# Módulo 1: ¿Qué se implementó en ECMAScript 6? (ES 2015)

- **¿Qué es ECMAScript?**

  ECMAScript es la especificación del lenguaje propuesto por ECMA International, institución especializada en los estándares. JavaScript utiliza esta especificación para trabajar sobre estas carácterísticas que se van lanzando año tras año a partir del 2015. Estas versiones se actualizan cada año en Junio.
  Si bien JavaScript nace de la propuesta que hizo NetScape en 1996 a partir de ahí han ido añadiéndose nuevas versiones, hasta lo que hoy en día es cada una de estas versiones (ECMAScript 6, 7, 8, etc).

- **1: Default Params y Concatenación**

  _Default Params_: Una de las nuevas características que se integraron son los parámetros por defecto. Esto significa que podemos establecer los valores que le pasamos a una función por defecto sin necesidad de declararlos como una variable dentro de la función.

  _Concatenación_: Así mismo, si queríamos imprimir un string con una variable necesitabamos hacer uso el operador de concatenación, ahora simplemente podemos utilizar los literal templates que nos provee ECMAScript 6.

- **2: LET y CONST, Multilínea, Spread Operator y Desestructuración**

  _Multilínea_: Al escribir una frase de tipo string en una variable, cuando se quería añadir otra frase debíamos agregar un nuevo salto de línea utilizando el operador del \n (se usa por cada salto de línea) y luego concatenar la nueva frase en otro string. En ECMAScript 6, se elimina el uso de estos operadores utilizando los literal templates, donde sólo agregamos los saltos de línea que queremos y la frase nueva.

  _Desestructuración_: Antes de EcmaScript6, para obtener el valor de la propiedad de un objeto debíamos llamarlo de esta forma = objeto.propiedad, ahora simplemente podemos almacenar en una variable un nuevo objeto con las propiedades del objeto que necesitamos y cuando queremos llamar esa propiedad funciona como si fuera una variable más.

  _Spread Operator (Operador de Propagación)_: Este nos permite expandir varios elementos de acuerdo a la situación. Por ejemplo, cuando queríamos agregar elementos de un array a un nuevo array antes de ES6 agregabamos cada elemento manualmente. Ahora, gracias operador de propagación (...) llamamos al array que queremos agregar dentro de nuestro nuevo array y listo, ya todos los elementos que queríamos están dentro, de una manera fácil.

  _Let y Const_: La forma de declarar variables antes de ECMAScript6 era con la palabra reservada var. Con la llegada de ECMAScript6 se añadieron las palabras reservadas let y const, que son una nueva mejor forma de declarar las variables ya que evitan muchos errores como el Hoisting. Estas, tienen sus propias características como que let puede cambiar el valor durante nuestra aplicación y const no, ya que es una variable constante.

- **3: Arrow Functions, Promesas y Parámetros en objetos**

  _Objetos Mejorados_: Cuando queríamos asignarle a un nuevo objeto el valor de una variable como propiedad del objeto, lo hacíamos de la siguiente manera "propiedad: nombreVariable". Ahora desde ES6, simplemente cuando declaramos el objeto, colocamos el nombre de la variable como la propiedad, por lo tanto la propiedad recibirá como valor el valor de la variable.

  _Arrow Functions_: Las funciones de tipo flecha tienen una sintaxis más reducida y nos permite una escritura más amigable. Al declarar una función antes de ECMAScript6, debíamos utilizar una sintaxis más larga en el bloque dentro de la función, y teníamos la necesidad, en ciertos casos de utilizar la palabra reservada return. Con las funciones flecha nos ahorramos todas estas particularidades y mejoramos muchísimo la sintaxis.

  _Promesas_: Las promesas hacen parte del asincronismo en JavaScript, esto significa que una función se ejecutará si algo ocurre, y dependiendo de la validación (si algo es verdadero o falso) dará un resultado.

- **4: Clases, Módulos y Generadores**

  _Clases_: Las clases son una forma de manejar objetos y la herencia. Estas clases siempre inician con un método constructor que crea una plantilla con ciertas propiedades dinámicas que podemos agregar llamando una nueva instancia de la clase. Una clase, es muy parecida a una función constructora, y prácticamente cada instancia de la clase se guarda en un objeto diferente con las propiedades que asignamos y esto nos permite reutilizar el código sin tener que crear uno para cada clase. Otra ventaja que tenemos en las clases es que podemos agregar métodos (que son funciones) que darán ciertas funcionalidades a cada instancia que creemos de la clase.

  _Módulos_: Una de las características que añadieron en ES6 fueron la de importar y exportar, es decir, trabajar con módulos, los módulos nos permiten usar códigos de un archivo en otro archivo, para hacer el código de un archivo exportable utilizamos el siguiente ejemplo. Esto nos sirve ya que vamos a poder separar en módulos las lógicas diferentes de nuestro proyecto (por ejemplo una lógica que se encargue de hacer una petición a una API, una que haga una operación matemática) en diferentes archivos y poder llamar esas funciones o variables a nuestro archivo principal.

  _Generadores_: Generator es una función especial que retorna una serie de valores según el algoritmo definido. Para definir una función generadora colocamos un asterisco \* al lado de nuestra palabra reservada function. Los generadores nos permiten hacer iterables nuestras funciones para que por cada llamada, muestre un resultado diferente.

##

# Módulo 2: ¿Qué se implementó en ECMAScript 7? (ES 2016)

- **1: Método .includes y Operaciones de Potenciación**

  _Método includes_: Con el método .includes podemos validar si en un array se encuentra cierto elemento. A este método le podemos pasar dos parámetros (searchElement: element, fromIndex: indexnumber) que básicamente el primer parámetro que le pasemos es el elemento que queremos encontrar y el segundo (que es opcional) es desde que posición del array lo vamos a empezar a buscar. Ejemplo: ("Sebastián", 20) Buscamos al string Sebastian desde la posición número 20 del array.

  _Operaciones de potenciación_: En EcmaScript 7 se añadió la posibilidad de hacer operaciones de potenciación utilizando el operador de potencia (doble asterisco).

##

# Módulo 3: ¿Qué se implementó en ECMAScript 8? (ES 2017)

- **1: Object.entries(), Object.values(), Padding y Trailing Commas**

  _Object.entries()_: El método Object.entries() devuelve en una matriz las propiedades y los valores de un objeto. Es decir, el valor que retorna esta función son cada propiedad con su valor de un objeto en un array.

  _Object.values()_: El método Object.values() devuelve un array donde los elementos de este array son los valores de las propiedades según el orden en el que se encuentren en el objeto que creemos. Esto nos sirve cuando queremos saber cuales son los valores de un objeto sin su propiedad.

  _Padding_: Esta funcionalidad nos permite añadirle a un string cadenas vacías, caracteres, o completar con una cadena de texto el string que estemos trabajando. Esto nos sirve cuando queremos aplicar ciertas estructuras en nuestros textos en el lado del frontend. Los métodos .padStart() y .padEnd() reciben dos parámetros los cuales son (maximoDeCaracteres: num de caracteres, completarString: string) el máximo de carácteres significa de cuanto va a ser la longitud de nuestro string, y el string que le pasemos para completar rellenará los caracteres que sean necesarios. El método .padStart completa el string desde el comienzo (izquierda) hasta la cadena actual. El método .padEnd completa el string desde el final de la cadena actual (derecha) hasta el final del string.

  _Trailing Commas_: Cuando añadimos una coma al final de elemento de un objeto, evitamos que ocurran errores de sintaxis al querer agregar otro elemento.

- **2: Async y Await**

  Usar async y await en las promesas es una de las mejores funcionalidades que se añadieron en ES8. La función async declara una función asíncrona que retorna como valor una promesa, este tipo de funciones async pueden tener una expresión await, que pone en espera la ejecución de la función async mientras la promesa se resuelve, luego de que se devuelve el valor de la promesa reanuda la ejecución del async y el valor resuelto.

##

# Módulo 4: ¿Qué se implementó en ECMAScript 9? (ES 2018)

- **1: Operador de reposo, Propiedades de propagación, Promise.finally(), Regex**

  _Operador de reposo_: Este operador nos permite sacar ciertas propiedades de un objeto y dejar todas las demás alojadas en una variable sin desestructurar todo el objeto.

  _Propiedades de propagación_: Usando el operador de propagación y colocandole el nombre del objeto, podemos asignar todo el contenido del objeto (sus propiedades y valores) dentro de un nuevo objeto con diferentes propiedades sin afectar al objeto original y sin asignar nuevamente cada propiedad.

  _Promise.finally()_: Esta nueva funcionalidad nos permite saber en qué momento termina nuestra promesa y poder ejecutar una función al momento que termina.

  _Regex_: Esta nueva característica nos permite trabajar con los Regex y asignar grupos los cuales podremos acceder mediante destructurando el resultado del match y llamando cada elemento. Podemos hacerlo mediante su posición o llamandolo por cada propiedad. Esto nos permite trabajar mejor con un grupo de elementos, asignarle su tamaño de caracteres, el tipo de elementos y encontrarlo por grupos.

##

# Módulo 5: ¿Qué se implementó en ECMAScript 10? (ES 2019)

- **1: Método .flat(), .flatMap(), .trimStart() y .trimEnd(), Optional Catch Binding, Object.fromEntries(), Symbol Objects**

  _Método .flat()_: El método .flat() crea una nueva matriz con todos los elementos de una matriz, incluyendo las submatrices. Lo que hace es aplanar estas submatrices dependiendo de la profundidad en la que se encuentren, veamos un ejemplo. Aplanar es sacar esas submatrices a la matriz principal.

  _Método .flatMap()_: El método array.flatMap() primero mapea cada elemento del array y puede manipular estos, luego los devuelve en una matriz con todos estos elementos aplanados.

  _Método .trimStart() y .trimEnd()_: El método .trimStart() elimina los espacios sobrantes de un string desde el inicio (izquierda). El método .trimEnd() elimina los espacios sobrantes desde el final (derecha)

  _Optional Catch Binding_: Antes, en la antigua sintaxis cuando queríamos trabajar con try y catch debíamos pasarle el argumento (error) a catch para que pudiera funcionar, ahora podemos ahorrarnos eso incluyendo el argumento directamente en el bloque de código.

  _Object.fromEntries()_: Este método nos permite convertir un array con matrices que incluyan la propiedad y el valor (como si fuera un objeto) y convertir toda esa matriz en un objeto. Es decir, esta propiedad hace lo inverso que el Object.entries() que convierte un objeto en una matriz con matrices diferentes para cada propiedad con su valor.

  _Symbol.prototype.description_: Esta nueva función nos permite acceder a la descripción de los objetos de tipo símbolo.
