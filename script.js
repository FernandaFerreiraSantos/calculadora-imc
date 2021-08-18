const altura = document.getElementById("altura")
const peso = document.getElementById("peso")
const calcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")

function calcularImc() {
    const imc = parseFloat(peso.value) / (parseFloat(altura.value) ** 2)
    resultado.textContent = imc    
}

calcular.addEventListener("click",calcularImc)