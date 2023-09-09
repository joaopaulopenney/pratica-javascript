function calcularImc() {
    let nome = document.querySelector("#nome").value;
    let altura = document.querySelector("#altura").value;
    let peso = document.querySelector("#peso").value;
    let resposta = document.querySelector(".resposta");
    let imc = (peso / altura ** 2).toFixed(1)

    resposta.innerHTML = ("")
    if (imc >= 40) {
        resposta.innerHTML = (`<p>${nome}, seu IMC é ${imc} e você está com obesidade grau 3 (mórbida).</p>`)
    } else if (imc <= 40 && imc >= 35) {
        resposta.innerHTML = (`<p>${nome}, seu IMC é ${imc} e você está com obesidade grau 2.</p>`)
    } else if (imc <= 35 && imc >= 30) {
        resposta.innerHTML = (`<p>${nome}, seu IMC é ${imc} e você está com obesidade grau 1.</p>`)
    } else if (imc <= 30 && imc >= 25) {
        resposta.innerHTML = (`<p>${nome}, seu IMC é ${imc} e você está acima do peso.</p>`)
    } else if (imc <= 25 && imc >= 18.5) {
        resposta.innerHTML = (`<p>${nome}, seu IMC é ${imc} e você está com o peso normal.</p>`)
    } else if (imc <= 18.5 && imc >= 17) {
        resposta.innerHTML = (`<p>${nome}, seu IMC é ${imc} e você está abaixo do peso.</p>`)
    } else {
        resposta.innerHTML = (`<p>${nome}, seu IMC é ${imc} e você está muito abaixo do peso ideal.</p>`)
    }
}