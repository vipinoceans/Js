function nextInLine(arr, item)
{

    arr.push(item);

    console.log(arr);
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    console.log(arr);
    return arr;
 
}


var testArr = [1,2,3,4,5]

console.log("Before:" + JSON.stringify(testArr));

console.log(nextInLine(testArr,6));

console.log("After" + JSON.stringify(testArr));
