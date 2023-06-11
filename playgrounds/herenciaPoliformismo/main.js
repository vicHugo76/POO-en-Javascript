// Dentro de este reto encuentras las clases Student y Comment con un código base, recuerda ir a verlas en el sistema de archivos.

// Tu reto consisten en:

// Hacer que la clase TeacherStudent herede de Student
// Agrega un propiedad de tipo Array llamada skills a la clase TeacherStudent.
// Sobrescribir el método publicarComentario dentro de TeacherStundent.
// Debe agregar el array de skills en la propiedad studentRole de la clase Comment.
// El string debe verse de la siguiente manera "profesor de skill1, skill2".

class Comment {
  constructor({
    content,
    studentName,
    studentRole = "estudiante",
  }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }
  publicar() {
    const comentario = {
      studentName: this.studentName + " (" + this.studentRole + ")",
      likes: this.likes + " likes",
      content: this.content
    }
    return comentario
  }
}

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    return comment.publicar();
  }
}

// import { Comment } from "./Comment";
// import { Student } from "./Student";

class TeacherStudent extends Student {
  // Tu código aquí 👈
  constructor(props, skills = []) {
    super(props);
    this.skills = skills;
  }
  // approvedCourse(newCourse) {
  //   this.approvedCourses.push(newCourse);
  // }
  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: 'profesor de ' + this.skills.join(', ')
    });
    return comment.publicar();
  }
}

// Input

const skills = ["js", "python", "mongodb"]
const props = {
  name: "Erik Ochoa",
  username: "elyager"
}

const profesor = new TeacherStudent(props, skills)
console.log(profesor.publicarComentario('Mi primer comentario'))

// Output

// {
//   "studentName":"Erik Ochoa (profesor de js,python,mongodb)",
//   "likes":"0 likes",
//   "content":"Mi primer comentario"
// }