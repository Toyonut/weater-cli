'use strict'

const urlBuilder = (cityName, apiKey) => {
    const apiString = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&APPID=${apiKey}`;
    // console.dir(apiString);
    return apiString;
};

module.exports.build = urlBuilder;