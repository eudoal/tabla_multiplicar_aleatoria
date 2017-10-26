// script Juego Ahorcado
var numero=0;
var max=97;
var min=122;

numero=Math.random() * (max - min) + min;
numero=Math.round(numero);

console.log(numero);

var letra=String.fromCharCode(numero);
console.log(letra);

var adivinar=(letra);
console.log(adivinar);
//hasta aquí todo funciona OK

var i=5

 while ((i>0)&&(adivinar!=n1)) {

   var n1 = prompt("Adivina la letra");
console.log(i)
if (adivinar!=n1){
i--;
alert ("¿Cuantos Intentos te quedan?  :"+ i);

console.log(i);}

if (i==0) {
  alert ("SE TERMINÓ!!");
}}

if (adivinar==n1) {
alert("Es correcto!!");}
