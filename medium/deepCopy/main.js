// Funcion de deepCopy

// const obj1 = {
//   a: 'a',
//   b: 'b',
//   c: {
//     d: 'd',
//     e: 'e'
//   },
//   editA() {
//     this.a = 'AAAAAAAAAAAA';
//   },
//   f: ['a', 1, 'b', 3, 7, 'v', 15]
// };

function isObject(subject) {
  return typeof subject === 'object';
}

function isArray(subject) {
  return Array.isArray(subject)
}

function deepCopy(subject) {
  let copySubject;
  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);
  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }
  for (key in subject) {
    const keyIsObject = isObject(subject[key])
    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else if (subjectIsArray) {
        copySubject.push(subject[key]);
    } else {
        copySubject[key] = subject[key];
    }  
  }
  return copySubject;
}

// **** Abstraccion con objetos literales ****

// const studentBase = {
//   name: undefined,
//   email: undefined,
//   age: undefined,
//   approvedCourses: undefined,
//   learningPaths: undefined,
//   socialMedia: {
//     facebook: undefined,
//     instagram: undefined,
//     twitter: undefined
//   }
// }

// const victor = deepCopy(studentBase);

// // De esta manera definimos propiedad por propiedad de un objeto 
// // Object.defineProperty(victor, 'name', {
// //   value: 'Victor Hugo',
// //   configurable: false
// // });

// // Con este metodo lo que hacemos es proteger todas las propiedades del objeto para que no puedan ser borradas
// Object.seal(victor);

// console.log(Object.isSealed(victor)); // Verificamos si las propiedades del objeto estan bloqueadas
// console.log(Object.isFrozen(victor)); // Verificamos si el valor de las propiedades estan protegidas

// **** Factory pattern, module pattern, namespaces y RORO ****

function requiredParam(param) {
  throw new Error(param + ' es obligatorio');
}

function createStudent({
  name = requiredParam('name'), // Parametro Obligatorio o error
  age,
  email = requiredParam('email'), // Parametro Obligatorio o error
  facebook,
  instagram,
  twitter,
  approvedCourses = [],
  learningPaths = []
} = {}) {
  const private = {
    '_name': name,
  };
  const public = {
    age,
    email,
    approvedCourses,
    learningPaths,
    socialMedia: {
      facebook,
      instagram,
      twitter
    },
    // Forma de proteger una propiedad para no ser modifada solo mediante la funcion changeName()
    readName() {
      return private['_name'];
    },
    changeName(newName) {
      // if (newName) {
      private['_name'] = newName;
      // }
    },
  };
  // Forma de proteger cambios en las propiedades o metodos del objeto con la diferencia que al utilizar poliformismo no se modificaran los valores de la propiedad padre donde se apliquen
  Object.defineProperty(public, 'readName', {
    writable: false,
    configurable: false
  });
  Object.defineProperty(public, 'changeName', {
    writable: false,
    configurable: false
  });
  return public;
}

const victor = createStudent({
  name: 'Victor Hugo',
  age: 47,
  email: 'ortizrvh@gmail.com',
  instagram:'vhor76',
});