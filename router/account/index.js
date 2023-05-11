import express from "express";
import {userAuthorization} from "../../jwt/authorization.js";
const router = express.Router();

router.get('/account', userAuthorization, (req, res) => {
    const firstName = res.locals.payload.firstName;
    const lastName = res.locals.payload.lastName;
    res.json({'msg' : `Hello ${firstName} ${lastName}.`});
});

export default router;