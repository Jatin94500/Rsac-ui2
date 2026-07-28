import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import http from "http"
import { pool } from "./config/db.js"
import weatherRouter from "./weather_nav.js"
import { createProxyMiddleware } from "http-proxy-middleware"

dotenv.config()
const port = process.env.PORT || 5000
const app = express()
const server = http.createServer(app)

app.use(cors());
app.use(express.json())
app.use(cookieParser())

// Add the GeoServer proxy (previously in map.js)
app.use('/geoserver', createProxyMiddleware({
    target: 'http://localhost:8080/geoserver',
    changeOrigin: true,
}));

app.use('/api', weatherRouter);

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM up_rainfall LIMIT 10;');
    res.json(result.rows);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

server.listen(port, async () => {
  console.log(`server started at ${port}`)


})

