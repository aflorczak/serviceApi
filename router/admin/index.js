import express from "express";
import {adminAuthorization} from "../../jwt/authorization.js";
const router = express.Router();
import users from './user.js';
import {counter} from "../../service/user.js";

router.use('/users', users);

router.get('/', adminAuthorization, async (req, res) => {
    const userCount = await counter();
    const firstName = res.locals.payload.firstName;
    const lastName = res.locals.payload.lastName;
    res.json({
        'msg' : `Hello ${firstName} ${lastName}.`,
        'usersInSystem': userCount
    });
});

export default router;