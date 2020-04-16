const LOCAL_FORECAST = {
    today: {min:72, max:83},
    tmrw: {min:98, max: 221}
};

function getMaxOfTomorrow(forecast){
    "use strict";

    const {tmrw: {max: maxOfTomorrow}} = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTomorrow(LOCAL_FORECAST))