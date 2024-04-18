function addNumbers(x,y){
    return x + y;
}
function evenNumbers(numbers){
    return numbers.filter(number => number % 2 === 0);
}
module.exports = {addNumbers, evenNumbers};

let array = [1, 2, 3,4, 5]
array.forEach((number) => { console.log(number * 2);});

let array1 = [1, 2, 3,4, 5];
let arr =[];
array1.forEach((number) => { arr.push(number * 2);});
console.log(arr);