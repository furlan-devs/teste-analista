const num = parseInt(prompt("Digite um número para verificar se faz parte da sequência de Fibonacci:"));

let a = 0;
let b = 1;
let c = 0;
let fazParte = false;

while (c < num) {
  c = a + b;
  a = b;
  b = c;
}

if (c === num) {
  fazParte = true;
}

if (fazParte) {
  console.log(`${num} faz parte da sequência de Fibonacci.`);
} else {
  console.log(`${num} não faz parte da sequência de Fibonacci.`);
}