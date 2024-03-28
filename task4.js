let var1 = 3;
let var2 = 4;
let var3 = 5;

console.log("initial value")
console.log(var1)
console.log(var2)
console.log(var3)

const temp = var1;
var1 = var2
var2 = var3;
var3 = temp;

console.log("final value")
console.log(var1)
console.log(var2)
console.log(var3)