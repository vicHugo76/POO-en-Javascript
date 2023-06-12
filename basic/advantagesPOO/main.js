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


class Comment {
  constructor({
    content,
    studentName,
    studentRole = 'estudiante'
  }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }
  publicar() {
    console.log(this.studentName + ' (' + this.studentRole + ')');
    console.log(this.likes + ' likes');
    console.log(this.content);
    // Victor (estudiante)
    // 0 likes
    // Me encanto el curso!
  }
}




function videoPlay(id) {
  const urlSecret = 'https://platziultrasecretmasquelanasa.com' + id;
  console.log('Se esta reproduciendo desde la URL:', urlSecret);  
}

function videoPause(id) {
  const urlSecret = 'https://platziultrasecretmasquelanasa.com' + id;
  console.log('Pausamos la URL:', urlSecret);  
}

class PlatziClass {
  constructor ({
    name,
    videoID
  }) {
    this.name = name;
    this.videoID = videoID;
  }
  playVideo() {
    videoPlay(this.videoID);
  }
  pauseVideo() {
    videoPause(this.videoID);
  }
}

class Course {
  constructor({
    name,
    classes = [],
    isFree = false,
    lang = 'Spanish'
  }) {
    this._name = name; // Escondemos el nombre del curso
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    if (newName === 'Curso Malito de Programación Básica')
      console.error('Web... No!');
    else 
      this._name = newName;
  }
}

const cursoProgBasica = new Course({
  name: 'Curso Gratis de Programación Básica',
  isFree: true,
  classes: listClass
});

// cursoProgBasica.name = '';

const cursoDefinitivoHTMLCSS = new Course({
  name: 'Curso Definitivo de HTML y CSS',
  classes: []
});

const cursoPracticoHTMLCSS = new Course({
  name: 'Curso Práctico de HTML y CSS',
  lang: 'English',
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
  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name
    });
    comment.publicar();
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }
  approvedCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn('Lo sentimos, ' + this.name + ', solo puedes tomar curso abiertos');
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }
  approvedCourse(newCourse) {
    if (newCourse.lang !== 'English') {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn('Lo sentimos, ' + this.name + ', no puedes tomar curso en ingles');
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }
  approvedCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }
  approvedCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: 'profesor'
    });
    comment.publicar();
  }
}


const victor = new FreeStudent({
  name: 'Victor Hugo',
  email: 'ortizrvh@gmail.com',
  username: 'vHugo',
  twitter: 'vHugo76',
  learningPaths: [
    escuelaWeb,
    escuelaVgs
  ]
});

const oliver = new BasicStudent({
  name: 'Oliver Jared',
  email: 'ortizgoj@gmail.com',
  username: 'oJared',
  instagram: 'oJared04',
  learningPaths: [
    escuelaAF,
    escuelaVgs
  ]
});

const amy = new TeacherStudent({
  name: 'Amy Karyme',
  email: 'ortizgak@gmail.com',
  username: 'aKaryme',
  instagram: 'aKaryme06'  
});