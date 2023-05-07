// Objeto Literal
const amy = {
  name: 'Amy Karyme',
  age: 16,
  cursosAprobados: [
    'Curso Definitivo de HTML y CSS',
    'Curso Práctico de HTML y CSS'
  ],
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

// Objeto con sintaxis de Prototipo
function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  // Forma de agregar un método al objeto
  // this.aprobarCurso = function(nuevoCurso) {
  //   this.cursosAprobados.push(nuevoCurso);
  // }
}

// Otra manera de agregar un método al objeto desde fuera de él
Student.prototype.aprobarCurso = function(nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
}

// Creámos una Intancia del prototipo Student
const oliver = new Student(
  'Oliver Jared', 
  19, 
  [
    'Curso de Introducción a la Producción de Videojuegos',
    'Curso de Creación de Personajes'
  ]
);

// Prototipos con la sintaxis de Clases
class Student2 {
  constructor(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

const marta = new Student2(
  'Marta Letecia',
  44,
  [
    'Curso Análisis de Negocios para Ciencia de Datos',
    'Curso de Principios de visualización de Datos para BI'
  ]
)

// Una clase con un parametro de objetos
class Student3 {
  constructor({
    name, 
    age, 
    email,
    cursosAprobados = []
  }) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.cursosAprobados = cursosAprobados;
  }
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

const victor = new Student3({
  email: 'ortizrvh@gmail.com',
  age: 47,
  name: 'Victor Hugo'  
});
