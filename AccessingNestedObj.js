var myStorage = {
    "car": {
        inside: {
            glovebox: "Maps",
            seat: "pillow"
        },
        outside: {
            trunk: "jack"
        }
    }
}

var gloveboxContents = myStorage.car.inside["glovebox"];

console.log(gloveboxContents)