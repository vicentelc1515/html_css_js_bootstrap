// A função abaixo usa ajax para fazer uma requisição a uma API pedindo dados referentes ao CEP informado na URL,
// Esse retorno é em JSON.

function consultacep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value
    var url = "https://viacep.com.br/ws/"+ cep +"/json/"
    $.ajax({ // $ Chama a biblioteca Jquery
        url: url,
        type: "GET", // verbo HTTP
        success: function(response){
            console.log(response)

            /*
            // Duas formas de fazer a mesma coisa

            //$("#logradouro").html(response.logradouro)
            document.getElementById("logradouro").innerHTML = response.logradouro;

            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;


            */

            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + response.cep);
            $(".cep").show();
            $(".barra-progresso").hide();
        }

    });

}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();

});