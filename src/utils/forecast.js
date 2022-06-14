const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=d5178d60a9339c271b446ecbc2de532b&query=' + longitude + ',' + latitude + ''

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + '. The temperature is ' + body.current.temperature + '° out. It feels like '+body.current.feelslike+'°. The chance of rain is ' + body.current.precip + '%. The humidity is '+ body.current.humidity+'.')
        }
    })
}

module.exports = forecast