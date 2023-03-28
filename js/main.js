

//-----------------conversor--------------------------------
const monedaEl_one = document.getElementById('moneda-uno');
const monedaEl_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos');
const cambioEl = document.getElementById('cambio');
const tazaEl = document.getElementById('taza');


// Fetch Tipo de cambio y actualizacin del DOM
function calculate() {
  const moneda_one = monedaEl_one.value;
  const moneda_two = monedaEl_two.value;

  return fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
    .then((res) => res.json())
    .then((data) => {
      const taza = data.rates[moneda_two];

      cambioEl.innerText = `1 ${moneda_one} = ${taza} ${moneda_two}`;

      cantidadEl_two.value = (cantidadEl_one.value * taza).toFixed(2);

      const resultado = {
        moneda_one,
        moneda_two,
        cantidad_one: cantidadEl_one.value,
        cantidad_two: cantidadEl_two.value,
        taza,
      };

      guardarResultadosEnLocalStorage(resultado);

      return resultado;
    });
}


//Event listeners
monedaEl_one.addEventListener('change', calculate);
cantidadEl_one.addEventListener('input', calculate);
monedaEl_two.addEventListener('change', calculate);
cantidadEl_two.addEventListener('input', calculate);

taza.addEventListener('click', () =>{
    const temp = monedaEl_one.value;
    monedaEl_one.value = monedaEl_two.value;
    monedaEl_two.value = temp;
    calculate();
} );


calculate();
//---------------------------------------------------------


//-----------------------localstorage----------------------

function guardarResultadosEnLocalStorage(resultado) {
  const resultadosGuardados = obtenerResultadosDeLocalStorage();
  resultadosGuardados.push(resultado);
  localStorage.setItem('resultados', JSON.stringify(resultadosGuardados));
}

 
 window.onload = function() {
  const resultados = obtenerResultadosDeLocalStorage();
  if (resultados.length > 0) {
    // Si hay resultados guardados, mostrarlos en la pagina
    for (const resultado of resultados) {
      // Crear un elemento HTML para mostrar el resultado
      const resultadoEl = document.createElement('div');
      resultadoEl.innerText = `1 ${resultado.moneda_one} = ${resultado.taza} ${resultado.moneda_two}`;
      // Agregar elemento a resultados
      resultadosEl.appendChild(resultadoEl);
    }
  }
}
function obtenerResultadosDeLocalStorage() {
  const resultadosGuardados = localStorage.getItem('resultados');
  if (resultadosGuardados) {
    return JSON.parse(resultadosGuardados);
  }
  return [];
}

  //-----------------------------------------------------------

//------------------calculadora--------------------------               

    let display = document.querySelector('.display');

    function addToDisplay(value) {
     display.value += value;
              }
                  
     function clearDisplay() {
      display.value = '';
                }
                       
     function calculadora() {
      let result = eval(display.value);
      display.value = result;
                 }
  //-------------------------------------------------------               
                    
  
  //----------------loading--------------------------------
const loaderContainer = document.querySelector('.loading');
let inicio = new Date;

window.addEventListener('load', () => {
    
    let fin = new Date;
    let segundos = (fin-inicio);

    if(segundos < 2000){
        setTimeout(() => {
            loaderContainer.style.display = 'none';
        }, 2000);
    }else{
        loaderContainer.style.display = 'none';
    }
   console.log(segundos)
    
});
//--------------------------------------------------------                 
                    
                    
                     