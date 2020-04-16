const realNumberArray = [4,5,6,-9.8, 3.14, 4, 6, 34, -2];

const squareList = (arr) => {
    const squareIntergers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);
    return squareIntergers;
};

const squareIntergers = squareList(realNumberArray);
console.log(squareIntergers);