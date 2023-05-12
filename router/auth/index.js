import express from "express";
import getToken from "../../jwt/authentication.js";
const router = express.Router();

// Registration of a new user is possible only by the system administrator.

router.post('/login', (req, res) => {
    const token = getToken(req);
    res.json({'accessToken': token});
});

export default router;