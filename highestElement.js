function highestNumber(arr) {
    let largest = 0
    if (arr.length < 2) throw new Error("Invalid")
    for (let index = 0; index < arr.length; index++) {
        for (let idx = 0; idx < arr.length; idx) {
            let multiply = arr[idx] * arr[index];
            if (multiply > largest) {
                largest = multiply;
            }
        }
    }
    return largest;

}
module.exports = highestNumber;
