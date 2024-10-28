// // // media aluno; 
// // // nota1 e nota2;

// // function calcularMedia(nota1, nota2) {
// //     let media = nota1 + nota2/2;
// //     console.log(media);
// // }
// //  calcularMedia(6, 5)
// // function calcularImc(peso, metros){
// //     let imc = peso/metros**2
// //     console.log(imc);
// // }

// // calcularImc()
// function calcularMedia(nota1 = 0, nota2 = 0) { quando o usuário não digita nada o js entende que é 0 
//          let media = nota1 + nota2/2;
//          console.log(media);
//      }
//      calcularMedia(10)


function calcularMedia() {
let nota1 = Number (prompt("Insira a nota1 "));
let nota2 = Number (prompt("Insira a nota 2"));
    let media = (nota1 + nota2) / 2;
    alert(`Sua media é ${media}`);
}
calcularMedia()