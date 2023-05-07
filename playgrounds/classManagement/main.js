// Dadas la siguientes clases:

// Clase Banda con las propiedades:

// nombre - string
// generos - Array
// integrantes - Array
// Crea una clase llamada "Integrante" con las propiedades:

// nombre - string
// instrumento - string
// Escribe la lógica para agregar integrantes a la clase Banda en la función agregarIntegrante. En esta función no debe dejar agregar más de un baterista, es decir hay que validar que solo se pueda agregar un integrante con instrumento "Bateria".

class Banda {
  constructor({
    nombre,
    generos = [],
  }) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
  }
  agregarIntegrante(integranteNuevo) {
    // Tu código aquí 👈
    if (!this.integrantes.find(integrante => integrante.instrumento === 'Bateria')) 
      this.integrantes.push(integranteNuevo);
  }
}

//Crear clase Integrante
class Integrante {
  // Tu código aquí 👈
  constructor({
    nombre,
    instrumento
  }) {
    this.nombre = nombre;
    this.instrumento = instrumento;
  }
}

// La solución debería tener un input y output como los siguientes:

// Input

  const data = {
    nombre: "Los Jacks",
    generos: ["rock", "pop", "post-punk"],
    integrantes: [],
  }
  const banda = new Banda(data)
  banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }))
  banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))
  banda.agregarIntegrante(new Integrante({ nombre: "Hugo", instrumento: "Bateria" }))

// Output

// {
//   "nombre":"Los Jacks",
//   "generos":["rock","pop","post-punk"],
//   "integrantes":[
//     {"nombre":"Erik","instrumento":"Guitarra"},
//     {"nombre":"Paul","instrumento":"Bateria"}
//   ]}