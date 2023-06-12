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

// console.log(Object.getOwnPropertyDescriptors(victor)); // prop. static

Object.defineProperty(victor, 'pruebaNASA', {
  value: 'extraterrestres',
  enumerable: true,
  writable: true,
  configurable: true
});