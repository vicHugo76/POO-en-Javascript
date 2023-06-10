// En este reto dada la siguiente clase:

class Course {
  constructor({
    name,
    classes = [],
  }) {
    this.name = name;
    this.classes = classes;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (typeof nuevoNombrecito === "string" && nuevoNombrecito.trim().length > 0) {
      let palabras = nuevoNombrecito.split(' ')
      this._name = palabras.map(palabra => 
        palabra.charAt(0).toUpperCase() + palabra.slice(1)
      ).join(' ').trim();
    }
    //  else {
    //   this._name = nuevoNombrecito;
    // }
  }
}

// function convertirMayusculas(cadena) {
//   const palabras = cadena.split(' ');
//   let palabrasMayusculas = palabras.map(palabra => 
//     palabra.charAt(0).toUpperCase() + palabra.slice(1)
//   ).join(' ');
//   return palabrasMayusculas;
// }

// Usando el set de la propiedad name valida siempre que se le quiera asignar un valor lo siguiente:

// Que sea de tipo string.
// Si es string convierte la primera letra de cada palabra del nombre en mayúsculas
// Si no es un string no se cambia el valor de la propiedad name.
// La solución debería tener un input y output como los siguientes:

// Input

const courseName = "curso de programación básica";
const nombreMayusculas = new Course({
    name: courseName
});

console.log(nombreMayusculas.name);

// Output

// 'Curso de Programación Básica'