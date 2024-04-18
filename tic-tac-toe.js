function ticTacToe(obj){
    return obj.map(value => value.value)
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
module.exports = ticTacToe
// function printBoard(board) {
//     for (let index = 0; index < length; index++) {
//         for (let idx = 0; idx < width; idx++) {
//             console.log(board[index][idx]);
//         }
//         console.log(obj);
//     }
// }
// // printBoard(obj);
