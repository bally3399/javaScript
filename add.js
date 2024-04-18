function addNumbers(x,y){
    return x + y;
}
function evenNumbers(numbers){
    return numbers.filter(number => number % 2 === 0);
}
module.exports = {addNumbers, evenNumbers};