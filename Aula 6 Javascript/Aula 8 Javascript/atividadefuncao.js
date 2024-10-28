let peso = parseFloat (prompt('Digite o seu peso'))
let metros = parseFloat (prompt('Digite  a sua altura'))

function calcularImc(peso, metros) {

}

let resultadoimc = peso / (metros ** 2);

if (resultadoimc < 16.9) {
    return(`Muito Abaixo do peso ${imc}`);
}

else if (resultadoimc >= 17 && resultadoimc <= 18.4) {
    alert(`Abaixo do peso ${imc}`);
}

else if (resultadoimc >= 18.5 && resultadoimc <= 24.9) {
    alert(`Peso normal${imc}`);
}


else if (resultadoimc >= 25 && resultadoimc <= 29.9) {
    alert('Acima do peso');
}

else if (resultadoimc >= 30 && resultadoimc >= 34.9) {
    alert(`Obesidade grau 1'${imc}`);
}

else if (resultadoimc >= 35 && resultadoimc >= 40) {
    alert(`Obesidade grau 2 ${imc}`);
}

else {
    alert(`Obesidade grau 3 ${imc}`);
}
calcularImc(peso,metros).tofixed(2);






