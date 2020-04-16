var voxel = 
{x:3.6,
 y: 7.4,
 z: 6.4
};

//old way 
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

//destructor 
const {x:a, y:b, z:c} = voxel;


//-------------------------------------

const AVG_TEMPERATURES = {
 today: 77.5,
 tommorrow: 79
}

function getTempOfTmrw(AVG_TEMPERATURES){
    "use strict";

    const { tommorrow : getTempOfTmrw} = AVG_TEMPERATURES;

    return getTempOfTmrw;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES))