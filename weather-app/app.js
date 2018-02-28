
const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

//console.log(argv);

/*
var encodedAddress = encodeURIComponent(argv.address);

request({
    //url: 'http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    //console.log(body);
    //console.log(error);
    //console.log(response.statusCode);
    //console.log(JSON.stringify(response, undefined, 2));
    //console.log(body.status);
    if( error ) {
        console.log('Unable to connect to Google servers.');
    } else if ( body.status === 'ZERO_RESULTS' ) {
        console.log('Unable to find that address');
    } else if (body.status === 'OK') {
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }

});

*/

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.Latitude, results.Longitude, (errorMessage, weatherResults) => {
            if( errorMessage ) {
                console.log(errorMessage);
            } else {
                //console.log(JSON.stringify(weatherResults, undefined, 2));
                console.log(`It's Currently ${weatherResults.temperature}. it's feels like ${weatherResults.apparentTemperature}`);
            }
        });
    }
});

// 23bbd34167511c4729c16c8cb01b3b4c
/*
weather.getWeather(23.810332, 90.4125181, (errorMessage, weatherResults) => {
    if( errorMessage ) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(weatherResults, undefined, 2));
    }
});
*/








//
