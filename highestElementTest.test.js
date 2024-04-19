let highestElement = require("./highestElement.js");

test("Test highestElement function", () => {
    let arr = [1, 5, 10, 4, 0];
    let answer = highestElement(arr);
    expect(answer).toEqual(50);
})
// test("Test highestElement array", () => {
//     let arr = [1];
//     expect(answer).catch(highestElement(arr));
// })
