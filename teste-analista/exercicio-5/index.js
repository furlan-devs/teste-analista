
let string = prompt("Digite uma string: ");
let caracteres = string.split("");
let i = 0, j = caracteres.length - 1;

while (i < j) {
    let temp = caracteres[i];
    caracteres[i] = caracteres[j];
    caracteres[j] = temp;
    i++;
    j--;
}

let stringInvertida = caracteres.join("");

console.log(stringInvertida);
