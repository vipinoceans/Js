class Book {
    constructor(author){
        this._author = author;

    }
//getter
    get writer(){
        return this._author;
    }
//setter
set writer(updatedAuthor){
    this._author = updatedAuthor;
}
}
//---------------------
function makeClass() {

    class Thermmostat{
        constructor(temp){
            this._temp = 5/9 * (temp-32);
        }

        get temperature(){
            return this._temp;
        }

        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }

        return Thermmostat;
    }

const Thermmostat = makeClass();
const thermos = new Thermmostat(78);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);