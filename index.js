import validator from './validator.js';
const inputNumero = document.getElementById("inputNumber")
const inputUsuario = document.getElementById("user")

const modalAdd= document.querySelector('#modalAdd');
const modalAddValid= document.querySelector('#modalAddValid');

const botonCloseModal = document.querySelector('#botonCloseModal')
const botonCloseModalValid = document.querySelector('#botonCloseModalValid')

const verificara = document.getElementById('botonValidar')
const ocultara = document.getElementById('botonValidar')
const prueba = document.getElementById('prueba')
const pruebaValid = document.getElementById('pruebaValid')


const openModal = () =>{
    modalAdd.style.display='flex';
    prueba.textContent  = "hola "+inputUsuario.value+ ", el número de tarjeta que ingresaste no existe o te equivocaste en digitar. Deseas probar de nuevo o deseas cancelar la compra"
    //texto en html <p> 
    //p.textContent = "#####3412"
    //p.innerHtml
}
const openModalValido = () =>{
  modalAddValid.style.display='flex';
  pruebaValid.textContent  = "Muy bien "+inputUsuario.value+ " ahora nos comunicaremos con el banco para realizar tu pago"
}

function closeModal () {
  modalAdd.style.display='none';
}
function closeModalValid () {
  modalAddValid.style.display='none';
}
  
  
botonCloseModal.addEventListener('click',closeModal)
botonCloseModalValid.addEventListener('click',closeModalValid)

verificara.addEventListener('click', function () {
    var valid = validator.isValid(inputNumero.value);
    if (valid === true){
        
        console.log("valida");
        openModalValido()
  
    }
        
    else{
      console.log("invalida");
      openModal()
    }
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



