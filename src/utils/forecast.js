const request = require('postman-request')
const forecast = (lat,long,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=15c068fde32ec8ae2a36899188c3afc1&query='+lat+','+long+'&units=m'
    request({url,json:true},(error,{body})=>{


        
        if(error){
            callback('Unable to access the forecast service',undefined)
        }
        else if(body.error){
            callback('Unable to reach the service, Please try again with different input!!',undefined)
        }else{
            callback(undefined,('Hey, it\'s '+body.current.weather_descriptions[0]+' throughout the day. It is currently '
                                +body.current.temperature+' degree and it feels like '+
                                body.current.feelslike+' degree. \n The humidity is '+body.current.humidity+'% also the wind_speed is '+body.current.wind_speed))
        }
    })
//weather_descriptions throughout the day. It is currently  degrees outerHeight. There is  chance of rain.
}
module.exports = forecast