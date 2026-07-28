import express from 'express';

const router = express.Router();

router.get('/weather', (req, res) => {
    const api_key = process.env.WEATHER_API_KEY;
    const city = req.query.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (Number(data.cod) !== 200) {
                return res.status(data.cod).json({ error: data.message });
            }
            res.json({
                name: data.name,
                temp: data.main.temp,
                description: data.weather[0].description
            });
        })
        .catch(error => {
            res.status(500).json({ error: "internal server error" });
        });
});

export default router;
