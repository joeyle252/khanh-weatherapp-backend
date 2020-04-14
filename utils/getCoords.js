
const request = require("request");

function getCoords(res, city, callback) {
   
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        city
    )}.json?access_token=${process.env.MAPBOX}`;

    request({ url: url, json: true }, (error, { body }) => {
        
        if (error) {
            console.log(error)
            return res.render("weather", { error: "something wrong white fetching your location" })
        }
        if (body.features && body.features.length > 0) {
            const [long, lat] = body.features[0].geometry.coordinates
            callback(res, long, lat)
        }
    })
}

module.exports = getCoords;