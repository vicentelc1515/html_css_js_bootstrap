function clicar(){
	window.open("http://www.b3.com.br/pt_br/");
}

function trocar(){
	document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
}

function voltar(){
	document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
}

function funcaoChange(elemento){
	cosole.log(elemento.value)
}



/*function soma (n1,n2){
	return n1+n2;
}
function subtrair (n1,n2){
	return n1-n2;
}
function multiplicar (n1,n2){
	return n1*n2;
}
function dividir (n1,n2){
	return n1/n2;
}
while(true){
	var n1 = prompt("Digite um numero: ");
	var n2 = prompt("Digite outro numero: ");
	alert("Digite 1 para somar, 2 para subtrair, 3 para multiplicar ou 4 para dividir!!");
	var operador = prompt("Digite o operador: ");
	if(operador == 1){
		alert(soma());
	}else if(operador == 2){
		alert(subtrair());
	}else if(operador == 3){
		alert(multiplicar());
	}else if(operador == 4){
		alert(dividir());
	}else{
		alert("Numero invalido!!");
	}
	var s = prompt("Deseja continuar? S para continuar N para sair: ");
	if (S == "n"){
		break;
	}


}*/


/*var nome = prompt("Qual seu nome? ");
var idade = prompt("Qual sua idade? ");

if (idade >= 18){
	alert("Bem vindo a pagina " + nome);
}else{
	alert("Voce é menor de idade!!");
}

var d = new Date();
alert(d);*/
