var userInput = [];
var maiorNumero = 0;

for (let i = 0; i < 5; i++) {
    userInput[i] = parseInt(prompt("Informe um numero"))
    if(userInput[i] > maiorNumero) {
        maiorNumero = userInput[i]
    }
}

alert(`O maior numero informado é ${maiorNumero}`)