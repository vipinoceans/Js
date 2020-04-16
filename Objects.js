var ourDog = {
    "name": "camper",
    "legs": 4,
    "tails": 1,
    "friends": ["Everything!"]
}

var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends":[]
}

var dogTail = ourDog.tails
console.log(dogTail)

ourDog.legs = 5;

console.log(ourDog["legs"])

ourDog.bark = "Bow-wow";

myDog["bark"] = "wow";

