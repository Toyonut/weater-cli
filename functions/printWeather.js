'use strict'

const printWeather = (weather) => {
    try {
        let weatherObj = JSON.parse(weather);
        for (let weatherTime of weatherObj.list) {
            // console.dir(weatherTime.weather);
            let message = `The temperature in ${weatherObj.city.name} at ${weatherTime.dt_txt} is expected to be ${weatherTime.main.temp} degrees C and looks like ${weatherTime.weather[0].description}.`
            console.log(message);
        };
    } catch(err) {
        console.error(`error parsing content: ${err.message}`);
    };        
};

module.exports.print = printWeather;