let a = 10

let b = 89

let c = 40

//Verificar se a é maior que b e b é divisivel por 2
let resultado1 = (a > b && b % 2 == 0)
console.log('Resultado 1', resultado1);

//Verificar se b é maior igual a ou b dividido por 2 o resultado é 2
let resultado2 = (b >= a || b / 2 == 2)
console.log('Resultado 2', resultado2);

//Verificar se a é maior que b e b maior igual a 5
let resultado3 = (a > b && b >= 5)
console.log('Resultado 3', resultado3);

//Verificar se b é par ou impar usando ternário
let resultado4 = (b % 2 == 0 ? 'É par' : 'É ímpar')
console.log('Resultado 4', resultado4);

