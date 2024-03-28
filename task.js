const leftOperand = 3;
const rightOperand = 2;
const operator = "+";

if(operator === "+"){
    console.log(leftOperand + rightOperand)
}
else if(operator === "-"){
    console.log(rightOperand + leftOperand)
}
else if(operator === "*"){
    console.log(rightOperand * leftOperand)
}
else if(operator === "/"){
    console.log(leftOperand / rightOperand)
}

// const calc = (x)=>{
//     function secondNumber(a){
//         return a * x
//     }
//     return secondNumber;
// };
// console.log(calc(4)(2));
//
// function higherOrderFunction(lowerFunction){
//     console.log("higher function")
//     lowerFunction();
// }
//
// higherOrderFunction(() => {
//     console.log("lower function") //call back function
// });
function greetings(greet){
    return function person(name){
        return `Hello, ${name}. ${greet}`
    }
}
console.log(greetings("Good morning!")("John"))

