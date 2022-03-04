function calcSum() {

    let num1 = document.getElementsByName("campo1")[0].value*75;

    let num2 = document.getElementsByName("campo2")[0].value*150;

    let sum = Number(num1) + Number(num2);

    document.getElementsByName("total")[0].value = sum;

}


/*
------------------------------------------------------------------
var $output = $("#valor-output");
$("#inputinteira").on("change keyup", function () {
    var value = parseFloat($(this).val());
    $output.val(value*150);
});

var $output = $("#valor-output");
$("#inputestudante").on("change keyup", function () {
    var value = parseFloat($(this).val());
    $output.val(value*75);
});*/

/*
var totalzao = $("#valor-output");
$("inputinteira").on("change keyup", function() {
    var valor = parseFloat($(this).val());
    totalzao.val(value*150);
});
*/


/*var inputInteira = document.querySelector('.quantidade1');
var valorInteira = inputInteira.value;
const precoInteira = 150;
valorTotalInteira = precoInteira * valorInteira;

var inputEstudante = document.querySelector('.quantidade2');
var valorEstudante = inputEstudante.value;
const precoEstudante = 75;
valorTotalEstudante = precoEstudante * valorEstudante;

var valorTotalDaCompra = valorTotalEstudante + valorTotalInteira;*/


/*
function multiplicarInteira () {
    const inputInteira = document.querySelector('.quantidade1');
    var valorInteira = inputInteira.value;
    const precoInteira = 150;
    var valorTotalInteira = precoInteira * valorInteira;
}

function multiplicarEstudante () {
    const inputEstudante = document.querySelector('.quantidade2');
    var valorEstudante = inputEstudante.value;
    const precoEstudante = 75;
    var valorTotalEstudante = precoEstudante * valorEstudante;
}


function somar (valorTotalEstudante, valorTotalInteira) {
    var valorTotalDaCompra = valorTotalEstudante + valorTotalInteira;
  
}
*/
