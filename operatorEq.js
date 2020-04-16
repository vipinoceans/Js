function testEqual(a, b){
    if(a == b){
        return "Equal"
    }

    return "Not Equal "
}

console.log(testEqual(1,1));


function testEqual(a, b){
    if(a === b){
        return "Equal"
    }

    return "Not Equal "
}

console.log(testEqual(1,"1"));
