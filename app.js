import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

import {catchErrors,notFoundError} from './middlewares/errors.js';
import getToken from "./jwt/authentication.js";
import {adminAuthorization, userAuthorization} from "./jwt/authorization.js";

const app = express();

app.get('/account', userAuthorization, (req, res) => {
    const firstName = res.locals.payload.firstName;
    const lastName = res.locals.payload.lastName;
    res.json({'msg' : `Hello ${firstName} ${lastName}.`});
});

app.get('/admin', adminAuthorization, (req, res) => {
    const firstName = res.locals.payload.firstName;
    const lastName = res.locals.payload.lastName;
    res.json({'msg' : `Hello ${firstName} ${lastName}.`});
});

app.post('/login', (req, res) => {
    const token = getToken(req);
    res.json({'accessToken': token});
});

app.use(notFoundError);
app.use(catchErrors);
export default app;