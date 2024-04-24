const num = 2;
function exampleFunction() {
    let lastName = "ugbo";
    if(true){
        let firstName = "chinedu";
        console.log("I print from if block",firstName);

    }
    console.log("I print from outside the scope",num);
}
console.log("I print from outside the function",num);
exampleFunction();