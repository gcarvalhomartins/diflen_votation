import express, { json } from 'express';
import router from './router.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(json());
app.use(router);


export default app;