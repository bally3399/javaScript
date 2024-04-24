let addToLastIndex = require('./addingToLastIndex.js');
test("addingToLastIndex test",() => {
    let array = [5, 2, 3, 1, 2];
    let answer = addToLastIndex(array);
    expect(answer).toStrictEqual([5, 2, 3, 1, 3]);
})