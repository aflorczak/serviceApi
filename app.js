import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import {catchErrors,notFoundError} from './middlewares/errors.js';
const app = express();

app.use(notFoundError);
app.use(catchErrors);
export default app;