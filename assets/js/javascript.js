function indiceMasaCorporal(){
var altura= document.getElementById('altura').value;
var peso= document.getElementById('peso').value;
var resultado= document.getElementById('masa').value= peso/(altura * altura);
 if (altura!="" && peso!=""){
   return resultado;
 };
};
