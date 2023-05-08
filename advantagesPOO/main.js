// Objetos Literales - La gran desventaja es la creacion de un objeto para cada conjunto de datos, ademas que no es escalable por si tiene alguna modificacion en sus datos, en si no es buena idea usar este tipo de objetos o no es programacion orientada a objetos.
const hugo = {
  name: 'Victor Hugo',
  username: 'vhugo',
  point: 230,
  socialMedia: {
    twitter: 'vHugo76',
    instagram: undefined,
    facebook: 'Victor Ortiz'
  },
  approvedCourses: [
    'Curso Definitivo de HTML y CSS',
    'Curso Práctico de HTML y CSS'
  ],
  learningPaths: [
    {
      name: 'Escuela de Desarrollo Web',
      courses: [
        'Curso Definitivo de HTML y CSS',
        'Curso Práctico de HTML y CSS',
        'Curso de Responsive Design',
        'Curso de Sistemas de Diseño'
      ]
    },
    {
      name: 'Escuela de Videojuegos',
      courses: [
        'Curso de Introducción a la Producción de Videojuegos',
        'Curso de Unreal Engine',
        'Curso de Unity 3D'
      ]
    }
  ]
}

const jared = {
  name: 'Oliver Jared',
  username: 'oJared',
  point: 130,
  socialMedia: {
    twitter: 'oJared04',
    instagram: 'oJared04',
    facebook: undefined
  },
  approvedCourses: [
    'Curso de Física',
    'Curso de Astronomía'
  ],
  learningPaths: [
    {
      name: 'Escuela de Astrofísica',
      courses: [
        'Curso de Física',
        'Curso de Astronomía',
        'Curso de Física Cuántica'
      ]
    },
    {
      name: 'Escuela de Videojuegos',
      courses: [
        'Curso de Introducción a la Producción de Videojuegos',
        'Curso de Unreal Engine',
        'Curso de Unity 3D'
      ]
    }
  ]
}

// Programacion Orientada a Objetos
class Classes {
  constructor(clase = []) {
    this.clase = clase;
  }
}

const listClass = [

];
const listClasses = new Classes(listClass);
class Course {
  constructor({
    name,
    classes = []
  }) {
    this.name = name;
    this.classes = classes;
  }
}

const cursoProgBasica = new Course({
  name: 'Curso Gratis de Programación Básica',
  classes: listClass
});

const cursoDefinitivoHTMLCSS = new Course({
  name: 'Curso Definitivo de HTML y CSS',
  classes: []
});

const cursoPracticoHTMLCSS = new Course({
  name: 'Curso Práctico de HTML y CSS',
  classes: []
});

class LearningPath {
  constructor({
    name,
    courses = []
  }) {
    this.name = name;
    this.courses = courses;
  }
  // addCourses(...course) {
  //   this.courses.push(...course);
  // }
}

const escuelaWeb = new LearningPath({
  name: 'Escuela de Desarrollo Web',
  courses: [
    cursoProgBasica,
    cursoDefinitivoHTMLCSS,
    cursoPracticoHTMLCSS,
    'Curso de Responsive Design',
    'Curso de Sistemas de Diseño'    
  ]
});

// escuelaWeb.addCourses(
//   'Curso Definitivo de HTML y CSS',
//   'Curso Práctico de HTML y CSS',
//   'Curso de Responsive Design',
//   'Curso de Sistemas de Diseño'
// );

const escuelaVgs = new LearningPath({
  name: 'Escuela de Videojuegos',
  courses: [
    'Curso de Introducción a la Producción de Videojuegos',
    'Curso de Unreal Engine',
    'Curso de Unity 3D'
  ]
});

// escuelaVgs.addCourses(
//   'Curso de Introducción a la Producción de Videojuegos',
//   'Curso de Unreal Engine',
//   'Curso de Unity 3D'
// );

const escuelaAF = new LearningPath({
  name: 'Escuela de Astrofísica',
  courses: [
    'Curso de Física',
    'Curso de Astronomía',
    'Curso de Física Cuántica'
  ]
});

// escuelaAF.addCourses(
//   'Curso de Física',
//   'Curso de Astronomía',
//   'Curso de Física Cuántica'
// );

class Student {
  constructor ({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = []
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const victor = new Student({
  name: 'Victor Hugo',
  email: 'ortizrvh@gmail.com',
  username: 'vHugo',
  twitter: 'vHugo76',
  learningPaths: [
    escuelaWeb,
    escuelaVgs
  ]
})

const oliver = new Student({
  name: 'Oliver Jared',
  email: 'ortizgoj@gmail.com',
  username: 'oJared',
  instagram: 'oJared04',
  learningPaths: [
    escuelaAF,
    escuelaVgs
  ]
})