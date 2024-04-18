function addNumbers(x,y){
    return x + y;
}
function evenNumbers(numbers){
    return numbers.filter(number => number % 2 === 0);
}
module.exports = {addNumbers, evenNumbers};

let array = [1, 2, 3,4, 5];
array.forEach((number) => { console.log(number * 2);});

let array1 = [1, 2, 3,4, 5];
let arr =[];
let answer = array1.map((num) =>  num % 2 === 1);
console.log(answer);

let array2 = [1, 2, 3,4, 5];
let arr1 =[];
array2.forEach((number) => { arr1.push(number * 2);});
console.log(arr1);

let array3 = [1, 2, 3,4, 5];
let arr2 =[];
let answer1 = array3.map((num) =>  num * 2);
console.log(answer1);

let number = [1, 2, 3, 4];
let answer2 = number.filter(num => num % 2 === 0).map(num => num * 10);
console.log(answer2);