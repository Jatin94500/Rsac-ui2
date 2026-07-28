import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";


const app = express();
const PORT = 5000;

app.use(cors({ origin: 'http://localhost:5173' }));


app.use('/geoserver', createProxyMiddleware({
    target: 'http://localhost:8080/geoserver',
    changeOrigin: true,
}));

app.listen(PORT, () => {
    console.log(`Backend proxy runner active on http://localhost:${PORT}`);
});