'use strict'

const weather = require('./functions/getWeather');
const settings = require('./settings/settings.json');
const url = require('./functions/urlBuilder');
const weatherPrinter = require('./functions/printWeather');

let city = 'Auckland';

let request = url.build(city, settings.apikey);

weather.get(request).then((httpResponse) => {weatherPrinter.print(httpResponse)})
                    .catch((httpRejection) => {console.error(httpRejection)});