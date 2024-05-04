var capturaNumero = document.getElementById("display").innerHTML
var operacionDos = document.getElementById("display").innerHTML 

document.getElementById("0").onclick = function(){
    var displayAnterior = document.getElementById("display").innerHTML;
    if (displayAnterior === "0") {
        document.getElementById("display").innerHTML = "0"        
    } else {
        var numeroNuevo = displayAnterior + 0 
        document.getElementById("display").innerHTML = numeroNuevo    
    }
}

document.getElementById("1").onclick = function(){
    var displayAnterior = document.getElementById("display").innerHTML;
    if (displayAnterior === "0") {
        document.getElementById("display").innerHTML = 1
    } else {
        var numeroNuevo = displayAnterior + 1
        document.getElementById("display").innerHTML = numeroNuevo 
    } 
}

document.getElementById("2").onclick = function(){
    var displayAnterior = document.getElementById("display").innerHTML;
    if (displayAnterior == "0") {
        document.getElementById("display").innerHTML = 2
    } else {
        var numeroNuevo = displayAnterior + 2;
        document.getElementById("display").innerHTML = numeroNuevo;        
    }
}

document.getElementById("3").onclick = function(){
    var displayAnterior = document.getElementById("display").innerHTML;
    if (displayAnterior == "0") {
        document.getElementById("display").innerHTML = 3        
    } else {
        var numeroNuevo = displayAnterior + 3
        document.getElementById("display").innerHTML = numeroNuevo    
    }
}

document.getElementById("4").onclick = function(){
    var displayAnterior = document.getElementById("display").innerHTML;
    if (displayAnterior == "0") {
        document.getElementById("display").innerHTML = 4
    } else {
        var numeroNuevo = displayAnterior + 4
        document.getElementById("display").innerHTML = numeroNuevo        
    }
}

document.getElementById("5").onclick = function(){
    var displayAnterior = document.getElementById("display").innerHTML;
    if (displayAnterior == "0") {
        document.getElementById("display"). innerHTML = 5        
    } else {
        var numeroNuevo = displayAnterior + 5
        document.getElementById("display").innerHTML = numeroNuevo         
    }
}

document.getElementById("6").onclick = function(){
    var displayAnterior = document.getElementById("display").innerHTML;
    if (displayAnterior == "0") {
        document.getElementById("display"). innerHTML = 6        
    } else {
        var numeroNuevo = displayAnterior + 6
        document.getElementById("display").innerHTML = numeroNuevo 
    }
}

document.getElementById("7").onclick = function(){
    var displayAnterior = document.getElementById("display").innerHTML;
    if (displayAnterior == "0") {
        document.getElementById("display").innerHTML = 7
    } else {
        var numeroNuevo = displayAnterior + 7
        document.getElementById("display").innerHTML = numeroNuevo     
    }
}

document.getElementById("8").onclick = function(){
    var displayAnterior = document.getElementById("display").innerHTML;
    if (displayAnterior == "0") {
        document.getElementById("display").innerHTML = 8       
    } else {
        var numeroNuevo = displayAnterior + 8
        document.getElementById("display").innerHTML = numeroNuevo     
    }
}

document.getElementById("9").onclick = function(){
    var displayAnterior = document.getElementById("display").innerHTML;
    if (displayAnterior == "0") {
        document.getElementById("display").innerHTML = 9
    } else {
        var numeroNuevo = displayAnterior + 9
        document.getElementById("display").innerHTML = numeroNuevo 
    }    
}

//las cinco operaciones

document.getElementById("mas").onclick = function () {
    var displayAnterior = document.getElementById("display").innerHTML
    var numeroNuevo = displayAnterior + "+"   
    document.getElementById("display").innerHTML = numeroNuevo
}

document.getElementById("menos").onclick = function () {
    var displayAnterior = document.getElementById("display").innerHTML
    var numeroNuevo = displayAnterior + "-"
    document.getElementById("display").innerHTML = numeroNuevo
}

document.getElementById("por").onclick = function () {
    var displayAnterior = document.getElementById("display").innerHTML
    var numeroNuevo = displayAnterior + "*"
    document.getElementById("display").innerHTML = numeroNuevo
}

document.getElementById("dividido").onclick = function () {
    var displayAnterior = document.getElementById("display").innerHTML
    var numeroNuevo = displayAnterior + "/"
    document.getElementById("display").innerHTML = numeroNuevo
}

document.getElementById("raiz").onclick = function () {
    var displayAnterior = document.getElementById("display").innerHTML
    var numeroNuevo = Math.sqrt(displayAnterior)
    document.getElementById("display").innerHTML = numeroNuevo
}

//botones de borrar and +/-
document.getElementById("on").onclick = function(){
    document.getElementById("display").innerHTML = "0"
}

document.getElementById("sign").onclick = function(){
    var displayAnterior = document.getElementById("display").innerHTML
    if (displayAnterior == "0") {
        document.getElementById("display").innerHTML = displayAnterior
    } else {
        var numeroNuevo = displayAnterior 
        document.getElementById("display").innerHTML = "-" + numeroNuevo
    }
}

document.getElementById("sign").ondblclick = function(){
    var displayAnterior = document.getElementById("display").innerHTML
    if (displayAnterior == "0") {
        document.getElementById("display").innerHTML = displayAnterior
    } else {
        var numeroNuevo = displayAnterior 
        document.getElementById("display").innerHTML = "+" + numeroNuevo
    }
}

//operaciones para el resultado

document.getElementById("igual").onclick =function(){
    if (capturaNumero === "igual") {
        capturaNumero = eval(displayAnterior) 
    }
}
