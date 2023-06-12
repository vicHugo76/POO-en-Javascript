const victor = {
  name: 'Victor Hugo',
  age: 47,
  approvedCourses: ['Curso 1'],
  addCourse(newCourse) {
    console.log('this ', this);
    console.log('this.approvedCourses ', this.approvedCourses);
    this.approvedCourses.push(newCourse);
  }
};

// console.log(Object.keys(victor));  // prop. static
// console.log(Object.getOwnPropertyNames(victor)); // prop.static
// console.log(Object.entries(victor)); // prop.static

// Object.seal(victor); // Pone en false, la propiedad configurable de todas propiedades del Objeto, osea no se puede borrar las propiedades del objeto

// Object.freeze(victor); // Pone en false, las propiedades configurable y writable de todas propiedades del Objeto, osea no se puede borrar las propiedades del objeto ni cambiar su valor

console.log(Object.getOwnPropertyDescriptors(victor)); // prop. static

// Object.defineProperty(victor, 'navigator', {
//   value: 'Chrome',
//   enumerable: false,
//   writable: true,
//   configurable: true
// });

// Object.defineProperty(victor, 'editor', {
//   value: 'VSCode',
//   enumerable: true,
//   writable: false,
//   configurable: true
// });

// Object.defineProperty(victor, 'terminal', {
//   value: 'WSL',
//   enumerable: true,
//   writable: true,
//   configurable: false
// });

// Object.defineProperty(victor, 'pruebaNASA', {
//   value: 'extraterrestres',
//   enumerable: false,
//   writable: false,
//   configurable: false
// });

