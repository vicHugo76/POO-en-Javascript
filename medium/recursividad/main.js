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

// Estructura de una funcion recursiva
// function recursiva() {
//   if (/* validacion */) {
//     // llamados recursivos
//   } else {
//     // llamados normales, sin recursividad
//   }
// }

const numeritos = [0,1,2,3,4,5,6,7,8,21,32324,2335,6,7,3];
// let numerito = 0;
// for (let index = 0; index < numeritos.length; index++) {
//   numerito = numeritos[index];
//   console.log({index, numerito});
// }

function recursiva(numbersArray) {
  if (numbersArray.length !== 0) {
    const firstNum = numbersArray[0];
    console.log(firstNum);    
    numbersArray.shift();
    return recursiva(numbersArray);
  }
}

recursiva(numeritos);