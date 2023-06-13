const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e'
  },
  editA() {
    this.a = 'AAAAAAAAAAAA';
  }
};

//  JSON. stringify() y JSON.parse

// Estos metodos ayudan a copiar un objeto convirtiendolo en cadena (stringify) y despues pasandolo como objeto (parse), solucionando el problema de apuntar solo al objeto original, pero tambien estos metodos tienen un problema con los metodos del objeto que no trabajan con ellos y no los copean al nuevo objeto

// const obj2 = JSON.stringify(obj1);
const stringifiedComplexObj = JSON.stringify(obj1);
const obj2 = JSON.parse(stringifiedComplexObj);

//  JSON. stringify() y JSON.parse

// Estos metodos ayudan a copiar un objeto convirtiendolo en cadena (stringify) y despues pasandolo como objeto (parse), solucionando el problema de apuntar solo al objeto original, pero tambien estos metodos tienen un problema con los metodos del objeto que no trabajan con ellos y no los copean al nuevo objeto