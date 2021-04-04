let num = 266219;
let a = String(num).length;
let resault = 1;
for (let i = 0; i < a; i++) {
  resault = resault * String(num)[i];
}
console.log(resault);
resault = resault * resault * resault;
console.log(String(resault)[0] + String(resault)[1]);