
const request = require("request")

function getWeather (res,long,lat){
    console.log(long,lat)
    const url = ` https://api.darksky.net/forecast/${process.env.DARK_SKY}/${lat},${long}`;
    request({url: url, json:true}, (error,{body})=>{
        if(error) return console.log(error)
        const temp=body.currently.temperature;
        res.render("weather",{
            temp: temp
        })
    })

}

module.exports = getWeather;