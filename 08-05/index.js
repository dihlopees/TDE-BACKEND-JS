// 1 -> Escreva na tela todos os números pares de 0 a 100
const par = () => {
  for (let num = 0; num <= 100; num++) {
    if (num % 2 == 0) console.log(num);
  }
};

par();

// 2 -> Criar um algoritmo que percorre um array de números qualquer e retorna a soma total desses números

const somaArray = (array) => {
  let sum = 0;
  array.forEach((it) => {
    sum += it;
  });
  return sum;
};

console.log('A soma do meu array é: ', somaArray([2, 4, 6, 8]));

// 3 -> Crie uma função que remova todos os números negativos de um array

const removeNegativos = (array) => {
  let newArray = array.filter((it) => it > 0);
  console.log('Array filtrado sem numeros negativos', newArray);
};

removeNegativos([-2, 2, -5, 3]);

// 4 -> Percorra um array de numeros qualquer.. e crie um novo array com todos os numeros do primeiro multiplicado por 2
// ex: [1, 2, 3, 4, 5] -> [2, 4, 6, 8, 10]

const multipliqueOPrimeiroNumero = (array) => {
  let newArray = array.map((it) => {
    return it * 2;
  });
  return newArray;
};

console.log('Array multiplicado', multipliqueOPrimeiroNumero([1, 2, 3, 4, 5]));

// [[Bonus]] -> Crie uma função que soma dois numeros e devolve uma Promise. Caso a soma seja Par o valor deve ser resolvido e caso seja Impar deve ser rejeitado
// ex:
// soma(1, 2).then(res => {
//     console.log("Valor é par")
// }).catch(err => {
//     console.log("Valor é impar")
// })

const soma = (a, b) => {
  return new Promise((resolve, reject) => {
    let sum = a + b;
    if (sum % 2 == 0) resolve('A soma dos numeros é par');
    else reject('A soma dos numeros é impar');
  });
};

soma(1, 2)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
