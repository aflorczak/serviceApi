import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

import {catchErrors,notFoundError} from './middlewares/errors.js';
import auth from "./router/auth/index.js";
import account from "./router/account/index.js";
import admin from "./router/admin/index.js";

const app = express();

app.use(express.json());

app.use('/auth', auth);
app.use('/account', account);
app.use('/admin', admin);


app.use(notFoundError);
app.use(catchErrors);
export default app;