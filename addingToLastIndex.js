function addToLastIndex(list) {
    for (let index = list.length -1; index >=0 ; index--) {
        if(list[index] !== 9){
            list[index]++;
            break;
        }else{
            list[index] = 0;
        }

    }
    if(list[0]===0)list.unshift(1)
    return list;
}

module.exports = addToLastIndex;