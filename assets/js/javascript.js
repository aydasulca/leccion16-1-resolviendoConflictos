function indiceMasaCorporal(){
var altura= document.getElementById('altura').value;
var peso= document.getElementById('peso').value;
 if (altura!="" && peso!=""){
   document.getElementById('masa').value= peso/(altura * altura);
 }
}
