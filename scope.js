const num = 2;
function solve() {
    let lastName = "ugbo";
    if(true){
        let firstName = "chinedu";
        console.log("I print from if block",lastName);

    }
    console.log("I print from outside the scope",lastName);
}
console.log("I print from outside the function",num);
solve();