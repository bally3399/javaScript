let increaseScore = require('./Task.js')
test('Task Test', ()=> {
    let number = [85, 92, 78, 88, 95];
    let answer = increaseScore(number);
    expect(answer).toStrictEqual([90, 97, 83, 93, 100]);
})