# Curso de ECMAScript 6+

# Módulo 1: ¿Qué se implementó en ECMAScript 6?

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
