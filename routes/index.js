
var express = require('express');
var router = express.Router();
var getCoords = require("../utils/getCoords")
var getWeather = require("../utils/getWeather");

/* GET home page. */

router.get("/weather", function (req, res) {
  const query = req.query;
  console.log(query)
  // we use city name to get geo coordinates
  if (!query.city) {
    return res.redirect("/")
  };
  getCoords(res, query.city, getWeather); // get coordinates from city
})

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
