var myObh = {
    gift: "pony",
    "test": 1,
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {

if ( myObh.hasOwnProperty(checkProp)) {
    return myObh[checkProp]
} else {
    return "not found"
}

}

console.log(checkObj("gicft"))