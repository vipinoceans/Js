const bicycle = {
    gear: 2,
    sectGear: function(newGear){
        "use strict";
        this.gear = newGear
    }
} 

bicycle.sectGear(3);
console.log(bicycle.gear);
