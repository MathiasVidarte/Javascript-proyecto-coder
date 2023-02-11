//alert ()

function convertir (){

    var valore = parseInt (document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 40.00;
    var euro = 42.00;
    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de Peso uruguayo a Dolares es: USD" + resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El cambio de Peso uruguayo a Euro es: EU" + resultado.toFixed(2));
    }
    else{
        alert("Se deben completar todos los campos");
    }
}