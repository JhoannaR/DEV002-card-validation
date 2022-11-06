import validator from './validator.js';
const inputNumero = document.getElementById("inputNumber")
//const inputUsuario = document.getElementById("user")

const verificara = document.getElementById('botonValidar')
const ocultara = document.getElementById('botonValidar')


verificara.addEventListener('click', function () {
    var valid = validator.isValid(inputNumero.value);
    if (valid === true)
        console.log("valida");
    else
        console.log("invalida");
});

ocultara.addEventListener('click', function () {
    var hidden = validator.maskify(inputNumero.value);
        console.log(hidden);
    
});































//formulario -> input -> usuario
//cmo puedo obtener el valor de un input?¨
//cuando evaluar la tarjeta? (usuario decida validarla? - button)

//prevenir el reload (recarga de pagina) evento submit formulario

//como seleccionar un elemento de html en javascript
//document.getElement
//elemento seleccionado agregar un evento ()

//esta funcion ya hace la logica de validar
//espera recibir un numero y devuelve ... un boolean (true,false)



