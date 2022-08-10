function validadorsenha() {
    var senha = document.getElementById('senhaforca').value;
    var forca = 0;
    document.getElementById('impsenha').innerHTML = "Senha " + senha;


    if((senha.length >=4) && (senha.length <=7)){
        forca +=10;

    }else if(senha.length > 7){
        forca +=25;
    }
    if ((senha.length >= 5) && (senha.match(/[a-z]+/))) {
        forca +=10;
    }

    if ((senha.length >= 6) && (senha.match(/[A-Z]+/))) {
        forca +=20;
    }

    if ((senha.length >= 7) && (senha.match(/[@#$%&;*]+/))) {
        forca +=25;
    }


    mostrarforca(forca);

}


function mostrarforca(forca) {
    document.getElementById("impforcasenha").innerHTML = 'Força: ' + forca;

    if (forca < 30){
        document.getElementById('errosenhaforca').innerHTML = "<span style ='color: #ff0000'>Fraca</span>";

    }else if((forca >= 30) && (forca < 50)){
        document.getElementById('errosenhaforca').innerHTML = "<span style ='color: #ffd700'>Média</span>";
    }
    else if((forca >= 50) && (forca < 70)){
        document.getElementById('errosenhaforca').innerHTML = "<span style ='color: #008000'>Forte</span>";
    }
    else if((forca >= 70) && (forca < 100)){
        document.getElementById('errosenhaforca').innerHTML = "<span style ='color: #7fffe0'>Excelente</span>";
    
    }
}