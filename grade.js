function studentGrade(studentScores){
    let arr = [];
    studentScores.map(number => {
        if (number > 90 && number <= 100){
            arr.push("A");
        }else if(number >80 && number <= 89){
            arr.push("B");
        }
        else if(number > 70 && number <= 79){
            arr.push("C");
        }
        else if(number > 60 && number <= 69){
            arr.push("D");
        }else{
            arr.push("F");
        }

    });
     return arr;
}
module.exports = studentGrade;



