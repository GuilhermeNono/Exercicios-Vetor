var userInput = []

var result = 0;

for (let i = 0; i < 5; i++) {
    
    userInput[i] = parseInt(prompt("Informe um numero"))
    if(i <= 2) {
        result += userInput[i];
    }
}

alert(`A soma dos 3 primeiros elementos do vetor é igual a ${result}`)