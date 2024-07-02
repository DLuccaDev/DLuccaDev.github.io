function armazenaValor(){


//armazena o valor que o usuario digitou
var userInput = document.getElementById("userInput").value;

//exibe o valor armazenado
console.log("O valor da variavel é:" + userInput);

//atualiza o conteudo
document.getElementById("valorInserido").innerText = "O valor da variavel é:" + userInput;

}