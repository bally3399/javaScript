let studentGrade = require("./grade.js");

test("Test grade function", () => {
    let gradeScore = [95, 78, 85, 60, 45, 92];
    let answer = studentGrade(gradeScore);
    expect(answer).toEqual(["A", "C", "B", "F", "F", "A"]);
})
