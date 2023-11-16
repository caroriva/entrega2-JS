//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

const verificarNumero = (numero) => {
  if (numero % 2 == 0) {
    console.log(`El número ${numero} es par.`);
  } else {
    console.log(`EL número ${numero} es impar.`);
  }
};

//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

const verificarMayor = (num1, num2) => {
  if (num1 > num2) {
    console.log(`${num1} es mayor que ${num2}`);
  } else if (num1 < num2) {
    console.log(`${num2} es mayor que ${num1}`);
  } else {
    console.log(`Los números ${num1} y ${num2} son iguales`);
  }
};

//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

const verMultiplo = (numero) => {
  if (numero % 5 == 0) {
    console.log(`El número ${numero} es múltiplo de 5`);
  } else {
    console.log(`El número ${numero} NO es múltiplo de 5`);
  }
};

//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

const imprimirNum = (numero) => {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
};

//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

const imprimirPalabra = (palabra, num) => {
  console.log(`${palabra} `.repeat(num));
};

//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const verduras = [
  "tomate",
  "lechuga",
  "zanahoria",
  "zapallo",
  "papa",
  "brocoli",
];

const imprimirArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

// imprimirArray(verduras);

//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const imprimirValoresArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == array[4]) {
      continue;
    }

    console.log(array[i]);
  }
};

// imprimirValoresArray(numeros);

//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const arrayPorNumero = (array, num) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * num);
  }
};
