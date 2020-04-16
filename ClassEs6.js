class SpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}

var zeus = new SpaceShuttle('jupite');

console.log(zeus.targetPlanet);

//-------
function makeClass(){
class Vegetable {
    constructor(name){
        this.name = name;
    }
}

return Vegetable;

}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
const carot = new Vegetable('carrot');
console.log(carrot.name)