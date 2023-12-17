'use strict'
/*Partiendo del siguiente array, realizar las operaciones necesario para 
ordenar los días de la semana:

let week = ['Suday', 'Tuesday', 'Wednesday', 'Thursday',  'Saturday' ]; 

    Eliminar el día domingo del inicio de la lista.
    Agregar el día lunes al inicio de la lista.
    Agregar el día domingo al final de la lista.
    Insertar el día viernes en la posición correspondiente.
    Mostrar en pantalla de elemento en elemento usando un for.

Usar los métodos: push, pop, shift, unshift, splice
  */

let week = ['sunday', 'tuesday', 'wednesday', 'thursday', 'saturday'];

//eliminar el domingo y agregar el lunes

week.shift();
week.unshift('monday');

//agregar el dia domingo al final

week.push('sunday');

//insertar el friday

week.splice(4,0, 'friday');

//funcion para leer

for(let i=0;i<week.length;i++){
    alert(week[i]);
}





