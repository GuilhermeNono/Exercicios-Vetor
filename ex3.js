var userInput = []
var userInputDouble = []

for (let i = 0; i < 5; i++) {
    
    userInput[i] = parseInt(prompt("Informe um numero"))

    userInputDouble[i] = userInput[i] * 2 

}

for (let i = 0; i < 5; i++) {
    console.log(userInputDouble[i])
} 