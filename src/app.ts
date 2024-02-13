import cookieParser from 'cookie-parser';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import express from 'express';
import 'express-async-errors';
import httpRequestLogger from 'morgan';
import { useRouters } from './routes/routes';

const app = express();
useRouters(app);
configDotenv();

app.use(httpRequestLogger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
    cors({
        origin: process.env.ALLOWED_ORIGINS?.split(','),
    })
);

const PORT = process.env.PORT || '3000';
try {
    app.listen(PORT);
    console.log(`Listening on port: ${PORT}`);
} catch (error) {
    console.error('Could not listen:', error);
}
