let number = [1, 2, 3, 4];
number.push(5);
console.log(number);

number.pop();
console.log(number);

let number1= [1, 2, 3, 4]
number1.shift();
console.log(number1)

number1.unshift(5);
console.log(number1)

let num = [12,13,14,15];
console.log(num.slice(1));

let num1 = [1,2, 3, 4];
console.log(num1.slice(1, 3));

let num2 = [1, 3, 4, 5, 6];
console.log(num2.splice(2));
console.log(num2);

// Delete and replace
let num3 = [12, 3, 4, 5, 9, 4, 5];
num3.splice(2, 2, 2, 3);
console.log(num3);

let numOne = [12, 3, 4, 5, 9, 4, 5];
let numTwo = [2, 3 ,4];

console.log(numOne.concat(numTwo));

const x = numOne.concat(numTwo);
console.log(x);
console.log(numOne)

let arr = [["Car", 2000], ["Truck", 500], ["Bike", 6500]];
console.log(arr);
console.log(arr[0][0]);
console.log(arr[0][1]);

arr.push(["scooter", 1500]);
console.log(arr);

let arr1 = [["car", "2000"], ["Truck", 500], ["Bike", 6500]];
console.log(arr1);
arr1[0].push(["Toyota", "Nissan"]);
arr1[1].push(["Ford"]);
arr1[2].push(["Honda"]);
console.log(arr1);
console.log(arr1[0][2][1]);


let arr2 = [[200, 50, 300, 5], [10, 25, 7, 100], [25, 20, 70, 45], [500, 170, 11, 35]];
console.log(arr2[1].slice(0, 3));
console.log(arr2[1][1]);
console.log(arr2[2].slice(2, 3));

