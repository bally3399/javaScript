const studentScores = [95, 78, 85, 60, 45, 92];
const arr = [];
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
console.log(arr);


