

document.querySelector("img").addEventListener("click", mostrarborde)
const imagen = document.querySelector("img")
let border = false

 function mostrarborde(){

      if (border == false) {
        imagen.style.border = "solid blue 5px"
        border = true
      }
      else {
        imagen.style.border = "none"
        border = false
      }
    }





function sumarcantidad(){
n1 = Number(document.querySelector('#p-1').value)
n2 = Number(document.querySelector('#p-2').value)
n3 = Number(document.querySelector('#p-3').value)
suma = n1 + n2 + n3 

element = document.querySelector('#result')
if (suma <= 10){
  element.innerHTML = 'Llevas ' + suma + ' stickers'
}
else {
  element.innerHTML = 'Llevas demasiados stickers' 
}}


function limpiarcampos(){
    element = document.querySelector('#result')

        document.querySelector('#p-1').value= ''; 
        document.querySelector('#p-2').value= '';
        document.querySelector('#p-3').value= '';
        element.innerHTML = '';
}



function validenumero(evt){
   
    var code = (evt.which) ? evt.which : evt.keyCode;
			
    if(code==8) {
        
      return true;
    } else if(code>=48 && code<=57) { 
        
      return true;
    } else{ 
        window.alert("Solo está permitido ingresar números")
      return false;
    }
 }




function validapwd(){

const mensaje = document.querySelector("#mensaje")
let pwd = 516
let pwd2 = 821
val1 = document.querySelector('#bx1').value
val2 = document.querySelector('#bx2').value
val3 = document.querySelector('#bx3').value
let pwt = val1 + val2 + val3

if (pwt == pwd){

    mensaje.innerHTML = "Password 1 correcto"
    document.querySelector("#mensaje").style.border = "4px solid green";

}else if(pwt ==pwd2){

    mensaje.innerHTML = "Password 2 correcto"
    document.querySelector("#mensaje").style.border = "4px solid green";
}

else{
    mensaje.innerHTML = "Password Incorecto"
    document.querySelector("#mensaje").style.border = "4px solid red";

}

}