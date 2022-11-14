const validator = {
  isValid: function (creditCardNumber) {
    var arrayCardNumber = creditCardNumber;
    /*const creditCardNumber ='5529931622059431';*/
    arrayCardNumber = Array.from(creditCardNumber);/*transforma el string de entrada en array*/
    /*console.log(arrayCardNumber);*/
    const arrayCardInvertido = arrayCardNumber.reverse();
    /* console.log(arrayCardInvertido)*/

    for (let index = 1; index < arrayCardInvertido.length; index = index + 2) {
      arrayCardInvertido[index] = arrayCardInvertido[index] * 2;
      if (arrayCardInvertido[index] >= 10) {
        arrayCardInvertido[index] = arrayCardInvertido[index] - 9;
      }
    }
    var suma = 0;
    /*  console.log(arrayCardInvertido)*/ /*muestra el array invertido con la suma de cifras de sus numeros pares duplicados si son mayores que 10*/
    for (var j = 0; j < arrayCardInvertido.length; j++) {
      suma += arrayCardInvertido[j];
    }
    /*console.log(suma); /*unió char, int, char, int... en un string '0charchar...'*/

    var y = 0;/*aquí se guardará la suma de dígitos de la cadena suma*/
    suma.split('').forEach(suma => y += parseInt(suma));
    /* console.log(y);*/

    if (y % 10 === 0) {
      return true;
    }
    else
      return false;
  },

  maskify: function (creditCardNumber) {
    /*const creditCardNumber ='5529931622059431';*/
    /* console.log(creditCardNumber);*/
    const arrayCardNumber = Array.from(creditCardNumber);
    /*console.log(arrayCardNumber);*/


    const z = arrayCardNumber[arrayCardNumber.length - 1];
    const y = arrayCardNumber[arrayCardNumber.length - 2];
    const x = arrayCardNumber[arrayCardNumber.length - 3];
    const w = arrayCardNumber[arrayCardNumber.length - 4];

    /*   console.log(arrayCardNumber.length);*/
    if (arrayCardNumber.length >= 4) {
      var cadenaMichis = '';
      for (var index = 0; index < arrayCardNumber.length - 4; index++) {
        cadenaMichis = cadenaMichis + '#';
      }
      var cadenaOculta = cadenaMichis + w + x + y + z;
      return (cadenaOculta);
    }
    else if (arrayCardNumber.length == 1){
      return z;}
    else if (arrayCardNumber.length === 2)
    {return y + z;}
   else if (arrayCardNumber.length === 3)
     { return x + y + z;}
    else {w + x + y + z;}
      
      


  },

};

export default validator;  /* el export es para utilizarlo en otro archivo(index.js)*/
