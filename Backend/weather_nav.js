const { response } = require('express');

require('dotenv').config();


const api_key = process.env.WEATHER_API_KEY;
const city = "LUCKNOW";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

fetch(url)

    .then(response => response.json())
    .then(data => {
        console.log(`city : ${data.name}`);
        console.log(`Temperature : ${data.main.temp}c`);
        console.log(`Weather : ${data.weather[0].description}`);
    })

    .catch(error => console.error("Error:", error));