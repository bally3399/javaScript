function ticTacToe(obj, length, width){
    let arr = [];
    for (let index = 0; index < length; index++) {
        arr.push([]);
        for (let idx = 0; idx < width; idx++) {
            arr[index].push(" ");
        }
     }
    obj.map(num => arr[num.row][num.column]= num.value);
    return arr;
}
const length = 3;
const width = 3;
const obj = [
    {row : 0, column : 0, value : "X"},
    {row : 0, column : 1, value : "X"},
    {row : 0, column : 2, value : "O"},
    {row : 1, column : 0, value : "O"},
    {row : 1, column : 2, value : "X"},
    {row : 2, column : 0, value : "X"},
    {row : 2, column : 1, value : "O"},
    {row : 2, column : 2, value : "O"},
];
console.log(ticTacToe(obj, length, width));

module.exports = ticTacToe

