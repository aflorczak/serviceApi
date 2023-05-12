import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

import nodemailer from 'nodemailer'; // do przeniesienia
const transport = nodemailer.createTransport({
    host: "s6.cyber-folks.pl", // zmiana ze zmiennych srodowiskowych
    port: 465, // zmiana ze zmiennych srodowiskowych
    auth: {
        user: "adrian.florczak@carflow.site", // zmiana ze zmiennych srodowiskowych
        pass: "Inne.haslo92" // zmiana ze zmiennych srodowiskowych
    }
});


import {catchErrors,notFoundError} from './middlewares/errors.js';
import auth from "./router/auth/index.js";
import account from "./router/account/index.js";
import admin from "./router/admin/index.js";

const app = express();

app.use(express.json());

app.use('/auth', auth);
app.use('/account', account);
app.use('/admin', admin);

app.get('/nodemailer/test',(req, res) => {
    const html = `
        <h1>To jest test nodemailer-a.</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Aperiam at dicta dolore illum in labore libero molestiae quae quaerat quia. 
            Explicabo nostrum quos repudiandae. Asperiores ducimus fugiat labore tempore voluptatem.
        </p>
        <div style="text-align: right;">
            Pozdrawiam i zycze milego dnia.<br/>
            Z powazaniem,<br/>
            Adrian Florczak<br/>
            ( Administrator Systemu CarFLOw.site )
        </div>
        <p>
            P.S. Pamietaj, w przypadku wszelkich pytan zawsze mozesz napisac do mnie na adres 
            <a href="mailto:adrian.florczak@carflow.site">adrian.florczak@carflow.site</a>.
        </p>
    `;
    let mailOptions = {
        from: 'adrian.florczak@carflow.site',
        to: "adrian.florczak92@gmail.com",
        subject: "Testujemy nodemailer-a.",
        html: html,
    };
    transport.sendMail(mailOptions)
        .then((data) => {
            console.log(data.response);
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});


app.use(notFoundError);
app.use(catchErrors);
export default app;