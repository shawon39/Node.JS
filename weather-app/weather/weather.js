
const request = require('request');

var getWeather = (lat, lng, callback) => {

    request({
        url: `https://api.darksky.net/forecast/23bbd34167511c4729c16c8cb01b3b4c/${lat},${lng}`,
        json: true
    }, (error, response, body) => {

        if(!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
        else {
            callback('Unable to fetch weather.');
        }
    });
};

module.exports.getWeather = getWeather;
