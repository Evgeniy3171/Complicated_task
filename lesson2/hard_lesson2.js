'use strict';

let checkInput = function(n){
  if (!isNaN(n) || n === ''){
    checkInput(prompt('Вы ввели не строку. Введите строку.'));
  };
  n = n.trim();         //убираю пробелы лишние
  if (n.length > 30){
    n = n.slice(0, 30) + "..."; //после 30-го символа заменяю все остальные на ...
    alert('Вы ввели '+n);
  }
};
checkInput(prompt('Введите строку.'));