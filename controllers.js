/*
// ciclos for 
   // inicio     //fin     //intervalos
for(var ini =1; ini <= 10; ini=ini +1){
    //instrucciones 
    document.write(ini + "<br>")
}


// ciclo wile
var inicio = 1;
while(inicio <= 10){
    //instruciones 
    document.write(inicio + "<br>");
    inicio = inicio + 1;
    //inicio++
    //inicio+=2
}
*/

var inicio = parseInt(prompt("ingrese el valor de inicio del ciclo "));
var fin = parseInt(prompt("ingrese el valor final del ciclo "));
var intervalo =parseInt(prompt("ingrese intervalos del ciclo"));

//accendente
while (inicio <= fin){
    //instrucciones
    document.write(inicio +"<br>");
    //intervalo
    inicio += intervalo;
}
document.write("ascendente <hr> desendente <br>")
//desendente
while(inicio >= fin){
    //intrucciones 
    document.write(inicio +"<br>");
    //intervalo 
    inicio -=intervalo; 


}

var numero =parent(prompt("ingrese un numero"));
var acumulador = 0;
var contador = 0;
var acumuladorTexto = "";
for (var x = 1; x <= 5; x++) {
    var numero = parseInt(prompt("ingrese un numero"));
    contador++;
    acumulador += numero;
    acumuladorTexto = acumuladorTexto + numero + ", ";
}
document.write("numeros ingresados" + acumuladorTexto+"<br>")
document.write("numeros ingresados" + acumulador+"<br>")
document.write("numeros ingresados" + contador+"<br>")