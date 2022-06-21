var userInput = []
var impar = 0;
var par = 0;


for (let i = 0; i < 4; i++) {

    userInput[i] = parseInt(prompt("Informe um valor"));
    if (userInput[i] % 2 === 0) {
        par++
    }
    else {
        impar++
    }
}

alert(`Foram imformados ${par} pares e ${impar} impares`)
