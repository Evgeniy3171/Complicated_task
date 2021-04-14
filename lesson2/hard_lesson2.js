'use strict';
let func1 = function(n){
  if (typeof n !== 'string'){
    alert('Введите текст');
  };
  n = n.trim();
  if (n.length > 30){
    n = n.slice(0, 30) + "...";
    alert(n);
  }
}

func1(prompt('Введите строку'));