import express from "express";
import getToken from "../../jwt/authentication.js";
const router = express.Router();

router.post('/registration', (req, res) => {
    res.status(201); // lub error jak się nie uda + email potweirdzajacy
    // register usera + verifed email sciezka + link na maila
    res.json({
        'msg': 'tutaj rejestrujemy nowego uzytkownika'
    });
});

router.post('/login', (req, res) => {
    const token = getToken(req);
    res.json({'accessToken': token});
});

export default router;