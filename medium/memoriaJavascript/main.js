// * Shallow Copy

// Manera de copiar un objeto sin refenciar al objeto original

const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e'
  }
};

// Un problema con este metodo de copiado es cuando asignamos objetos a las propiedades del objeto, osea objeto dentro de otros objetos, este metodo de copiado no funciona porque solo hace referencia a los objetos dentro del objeto

const obj2 = {};

for (prop in obj1) {
  obj2[prop] = obj1[prop];  // Asignamos el valor de la propiedad a la propiedad del nuevo objeto
}

// * Metodo de copiado assign

const obj3 = Object.assign({}, obj1);

// Esta forma de copiar le ocurre lo mismo que shallow copy

// * create

const obj4 = Object.create(obj1);

// Con este metodo de copiado los que es copiar el objeto guardandolo en la propiedad proto del objeto, asi cuando asignamos un nuevo valor a una propiedad lo que pasa es crear otra propiedad dentto del objeto copiado, pero si modifica alguna propiedad en el objeto original se ve afectado el valor del objeto que esta guardado en proto 