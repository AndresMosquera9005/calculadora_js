var capturaNumeroUno;
var capturaNumeroDos;
var captura_simbolo;
let btn_mas = document.getElementById("mas")
let btn_igual = document.getElementById("igual")

document.getElementById("0").onclick = function(){
    var capturaNumeroUno = document.getElementById("display").innerHTML;
    
    if (capturaNumeroUno == 0) {
        document.getElementById("display").innerHTML = 0        
    } else {
        var capturaNumeroDos = capturaNumeroUno + 0 
        document.getElementById("display").innerHTML = capturaNumeroDos    
    }
}

document.getElementById("1").onclick = function(){
    var capturaNumeroUno = document.getElementById("display").innerHTML;

    if (capturaNumeroUno == 0) {
        document.getElementById("display").innerHTML = 1
    } else {
        var capturaNumeroDos = capturaNumeroUno + 1
        document.getElementById("display").innerHTML = capturaNumeroDos
    } 
}

document.getElementById("2").onclick = function(){
    var capturaNumeroUno = document.getElementById("display").innerHTML;

    if (capturaNumeroUno == 0) {
        document.getElementById("display").innerHTML = 2
    } else {
        var capturaNumeroDos = capturaNumeroUno + 2;
        document.getElementById("display").innerHTML = capturaNumeroDos;        
    }
}

document.getElementById("3").onclick = function(){
    var capturaNumeroUno = document.getElementById("display").innerHTML;
    if (capturaNumeroUno == 0) {
        document.getElementById("display").innerHTML = 3        
    } else {
        var capturaNumeroDos = capturaNumeroUno + 3
        document.getElementById("display").innerHTML = capturaNumeroDos
    }
}

document.getElementById("4").onclick = function(){
    var capturaNumeroUno = document.getElementById("display").innerHTML;
    if (capturaNumeroUno == 0) {
        document.getElementById("display").innerHTML = 4
    } else {
        var capturaNumeroDos = capturaNumeroUno + 4
        document.getElementById("display").innerHTML = capturaNumeroDos
    }
}

document.getElementById("5").onclick = function(){
    var capturaNumeroUno = document.getElementById("display").innerHTML;
    if (capturaNumeroUno == 0) {
        document.getElementById("display"). innerHTML = 5        
    } else {
        var capturaNumeroDos = capturaNumeroUno + 5
        document.getElementById("display").innerHTML = capturaNumeroDos         
    }
}

document.getElementById("6").onclick = function(){
    var capturaNumeroUno = document.getElementById("display").innerHTML;
    if (capturaNumeroUno == 0) {
        document.getElementById("display"). innerHTML = 6        
    } else {
        var capturaNumeroDos = capturaNumeroUno + 6
        document.getElementById("display").innerHTML = capturaNumeroDos
    }
}

document.getElementById("7").onclick = function(){
    var capturaNumeroUno = document.getElementById("display").innerHTML;
    if (capturaNumeroUno == 0) {
        document.getElementById("display").innerHTML = 7
    } else {
        var capturaNumeroDos = capturaNumeroUno + 7
        document.getElementById("display").innerHTML = capturaNumeroDos     
    }
}

document.getElementById("8").onclick = function(){
    var capturaNumeroUno = document.getElementById("display").innerHTML;
    if (capturaNumeroUno == 0) {
        document.getElementById("display").innerHTML = 8       
    } else {
        var capturaNumeroDos = capturaNumeroUno + 8
        document.getElementById("display").innerHTML = capturaNumeroDos     
    }
}

document.getElementById("9").onclick = function(){
    var capturaNumeroUno = document.getElementById("display").innerHTML;
    
    if (capturaNumeroUno == 0) {
        document.getElementById("display").innerHTML = 9
    } else {
        var capturaNumeroDos = capturaNumeroUno + 9
        document.getElementById("display").innerHTML = capturaNumeroDos 
    }    
}


//las cinco operaciones + igual

document.getElementById("mas").onclick = function () {
    let displayAnterior = document.getElementById("display").innerHTML
    capturaNumeroUno = displayAnterior;
    captura_simbolo = "+";
    document.getElementById("display").innerHTML = "";
}

document.getElementById("menos").onclick = function () {
    let displayAnterior = document.getElementById("display").innerHTML
    capturaNumeroUno = displayAnterior    
    captura_simbolo = "-"
    document.getElementById("display").innerHTML = "";
}

document.getElementById("por").onclick = function () {
    var displayAnterior = document.getElementById("display").innerHTML
    capturaNumeroUno = displayAnterior
    captura_simbolo = "*"
    document.getElementById("display").innerHTML = ""
}

document.getElementById("dividido").onclick = function () {
    var displayAnterior = document.getElementById("display").innerHTML
    capturaNumeroUno = displayAnterior
    captura_simbolo = "/"
    document.getElementById("display").innerHTML = ""
}

document.getElementById("raiz").onclick = function () {
    var displayAnterior = document.getElementById("display").innerHTML
    capturaNumeroUno = displayAnterior
    var capturaNumeroUno = Math.sqrt(capturaNumeroUno)
    document.getElementById("display").innerHTML = ""
}

//botones de borrar and +/-
document.getElementById("on").onclick = function(){
    document.getElementById("display").innerHTML = "0"
}

document.getElementById("sign").onclick = function(){
    var capturaNumeroUno = document.getElementById("display").innerHTML
    if (capturaNumeroUno == "0") {
        document.getElementById("display").innerHTML = capturaNumeroUno
    } else {
        var capturaNumeroDos = capturaNumeroUno 
        document.getElementById("display").innerHTML = "-" + capturaNumeroDos
    }
}

document.getElementById("sign").ondblclick = function(){
    var capturaNumeroUno = document.getElementById("display").innerHTML
    if (capturaNumeroUno == "0") {
        document.getElementById("display").innerHTML = capturaNumeroUno
    } else {
        var capturaNumeroDos = capturaNumeroUno 
        document.getElementById("display").innerHTML = "+" + capturaNumeroDos
    }
}

document.getElementById("igual").onclick = function(){
    var pantalla = document.getElementById("display").innerHTML;
    capturaNumeroDos = pantalla
    calculadora();
}


var respuestaOperacion = document.getElementById("display");

function calculadora() {
    console.log("felipe");
    if (captura_simbolo == "-" || captura_simbolo == "+" || captura_simbolo == "*" || captura_simbolo == "/" ) {
        let respuesta;
        switch(captura_simbolo){
            case "-":
                respuesta = parseInt(capturaNumeroUno) - parseInt(capturaNumeroDos)
                break
            case "+":
                respuesta = parseInt(capturaNumeroUno) + parseInt(capturaNumeroDos)
                break
            case "*":
                respuesta = parseInt(capturaNumeroUno) * parseInt(capturaNumeroDos)
                break
            case "/":
                respuesta = parseInt(capturaNumeroUno) / parseInt(capturaNumeroDos)
                break
        }
        respuestaOperacion.innerHTML = respuesta
    }else{
        respuestaOperacion.innerText = "Calculo imposible de calcular "
    }
}
