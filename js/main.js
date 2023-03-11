

const monedaEl_one = document.getElementById('moneda-uno');
const monedaEl_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos');
const cambioEl = document.getElementById('cambio');
const tazaEl = document.getElementById('taza');


// Fetch Tipo de cambio y actualización del DOM
function calculate(){
    const moneda_one = monedaEl_one.value;
    const moneda_two = monedaEl_two.value;
    
   fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
   .then(res => res.json() )
   .then(data => {
       const taza = data.rates[moneda_two];
       
       cambioEl.innerText = `1 ${moneda_one} = ${taza} ${moneda_two}`;

       cantidadEl_two.value = (cantidadEl_one.value * taza).toFixed(2);

    } );
    
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


function agregar () {
   // console.log("agregado");
    function Cliente (nombre,edad,email){
      this.nombre=nombre;
      this.edad=edad;
      this.email=email;
    }
  
  var nombreAgregar = document.getElementById("nombre").value;
  //console.log(nombreAgregar);
  var edadAgregar =document.getElementById("edad").value;
  //console.log(edadAgregar);
  var emailAgregar =document.getElementById("email").value;
  //console.log(emailAgregar);

  nuevoUsuario = new Cliente(nombreAgregar,edadAgregar,emailAgregar);
  console.log(nuevoUsuario);
  guardar();
  }

  var baseDatos= [];
  function guardar(){
    baseDatos.push(nuevoUsuario);
    console.log(baseDatos);
  }

  function manejarclick () { 
    alert ("Registrado con éxito")

    BigInt.onclick = function(){alert("Registrado con éxito")}
  }

  
  

