// const calcular = document.getElementById('calcular')
// const calcular = document.querySelector('#calcular')
// calcular.addEventListener('click', exibirResultado)

function calcularIMC(peso, altura) {
    return (peso / (altura ** 2)).toFixed(1)
}

function classificar(imc) {

    let classificacao = ''
    if (imc < 18.5) {
        classificacao = 'abaixo do peso'
    } else if (imc < 25) {
        classificacao = 'com peso ideal. Parabés'
    } else if (imc < 30) {
        classificacao = ' levemente acima do peso'
    } else if (imc < 35) {
        classificacao = 'com obesidade grau I'
    } else if (imc < 40) {
        classificacao = 'com obesidade grau II'
    } else {
        classificacao = 'com obesidade grau III, <span class = "vermelho">CUIDADO!!</span>'
    }

    return classificacao

}

function camposValidos() {
    return document.querySelector('form').reportValidity()
}

function exibirResultado() {
    const resultado = document.getElementById('resultado')
    const nome = document.getElementById('nome').value
    const peso = parseFloat(document.getElementById('peso').value.replace(',', '.'))
    const altura = parseFloat(document.getElementById('altura').value.replace(',', '.'))

    if (camposValidos()) {
        const imc = calcularIMC(peso, altura)
        const classificado = classificar(imc)
        resultado.innerHTML = `${nome} seu IMC é ${imc.replace('.', ',')}. Você está ${classificado}`
    } else {
        resultado.textContent = 'Preencha todos os campos'
    }
}

// ----------------eventos------------------

function capturarEnter(event) {
    if (event.key == 'Enter') {
        exibirResultado()
    }
}

document.getElementById('calcular')
    .addEventListener('click', exibirResultado)
document.querySelector('form')
    .addEventListener('keypress', capturarEnter)
