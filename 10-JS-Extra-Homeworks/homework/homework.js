// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];
  for (var atributo in objeto){
    matriz.push([atributo, objeto[atributo]]);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var caracter = '';
  var cont = 0;
  var obj = {};
  for(let i = 0; i < string.length; i++){
    cont = 0;
    caracter = string[i];
    for(let x = 0; x < string.length; x++){
      if(caracter === string[x]){
        cont = cont + 1;
      }      
    }
    obj[string[i]] = cont;
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayuscula = '';
  var minuscula = '';
  for(let i = 0; i < s.length; i++){
    if (s.charAt(i) === s.charAt(i).toUpperCase()){
      mayuscula = mayuscula + s.charAt(i);
    }else minuscula = minuscula + s.charAt(i);
  }
  return (mayuscula + minuscula);
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var arrayExtra = str.split(' ');
  var aux1 = '';
  var aux2 = '';
  var frase = '';

  for (let i = 0; i < arrayExtra.length; i++){
    aux1 = '';
    aux2 = '';
    if(arrayExtra[i].length !== 1){
      for(let x = 0; x < Math.floor(arrayExtra[i].length / 2); x++){
      aux1 = arrayExtra[i].charAt(x) + aux1;
      aux2 = aux2 + arrayExtra[i].charAt(arrayExtra[i].length - (x + 1));
      }
      if(arrayExtra[i].length % 2 === 1){
        arrayExtra[i] = aux2 + arrayExtra[i].charAt(Math.floor(arrayExtra[i].length/2)) + aux1;
      }else arrayExtra[i] = aux2 + aux1;
    }
  }
  frase = arrayExtra[0];
  for (let i = 1; i < arrayExtra.length; i++){
    frase = frase.concat(' ', arrayExtra[i]);
  }
  return frase;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num = numero.toString();

  var cont = numero.toString().length - 1
  for(let i = 0; i < Math.floor(num.length / 2); i++){
    if(num.charAt(i) === num.charAt(num.length - 1)){
      cont = cont - 1;  
    }else return 'No es capicua';
    break;
  }
  return 'Es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevaCadena = '';
  var cont = 0;
  var long = cadena.length
  for(let i = 0; i < long; i++){
    if(cadena.charAt(i) === 'a' || cadena.charAt(i) === 'b' || cadena.charAt(i) === 'c'){
      cadena = cadena.slice(i+1);
      cont = 0;
    }else {
    nuevaCadena = nuevaCadena + cadena.charAt(cont);
    cont = cont + 1
  }}
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var aux;
  for(let x = 0; x < arr.length; x++){
    for (let i = x + 1; i < arr.length; i++){
      if(arr[x].length > arr[i].length){
        aux = arr[i];
        arr[i] = arr[x];
        arr[x] = aux;
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevoArreglo = [];
  for (let  x = 0; x < arreglo1.length; x++){
    for(let i = 0; i < arreglo2.length; i++){
      if (arreglo1[x] === arreglo2[i]){
        nuevoArreglo.push(arreglo1[x])
      }
    }
  }
  return nuevoArreglo;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

