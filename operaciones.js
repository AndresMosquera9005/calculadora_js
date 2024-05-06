var capturaNumeroUno = document.getElementById("display").value
var captura_simbolo = document.getElementById("display").value
var capturaNumeroDos = document.getElementById("display").value
var respuestaOperacion = document.getElementById("display").value
let resultado_igual = document.getElementById("igual")
let btn_igual = document.getElementById("igual")
let btn_mas = document.getElementById("mas")

btn_igual.addEventListener("click", calculadora)

function calculadora() {
    if (display == "-" || display == "+" || display == "*" || display == "/" ) {
        let respuesta;
        switch(display){
            case "-":
                respuesta = capturaNumero - capturaNumeroDos
                break
            case "+":
                respuesta = capturaNumero + capturaNumeroDos
                break
            case "*":
                respuesta = capturaNumero * capturaNumeroDos
                break
            case "/":
                respuesta = capturaNumero / capturaNumeroDos
                break
        }
        respuestaOperacion.innerText = respuesta
    }else{
        respuestaOperacion.innerText = "Calculo inposibre de calcular "
    }
}