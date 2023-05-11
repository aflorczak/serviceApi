import express from "express";
import {
    createUser,
    getUsers,
    getUserById,
    updateUserEmailById,
    updateUserPasswordById,
    deleteUserById
} from '../../service/user.js';
import errors from "../../helpers/errors.js";
import {adminAuthorization} from "../../jwt/authorization.js";

const router = express.Router();

router.post('/', adminAuthorization, async (req, res) => {
    const user = req.body;
    const createdUser = createUser(user);
    createdUser
        .then((data) => {
            res.status(201);
            res.json({
                'data': data
            });
        })
        .catch((err) => {
            errors(400, err.message, res);
        });
});

router.get('/', adminAuthorization, async (req, res) => {
    const users = getUsers();
    users
        .then((data) => {
            res.json({
                'data': data
            });
        })
        .catch((err) => {
            errors(500, err.message, res);
        })
});

router.get('/:userId', adminAuthorization, async (req, res) => {
    const userId = parseInt(req.params.userId);
    const user = getUserById(userId);
    user
        .then((data) => {
            res.json({
                'data': data
            });
        })
        .catch((err) => {
            errors(404, err.message, res);
        });
});

router.patch('/:userId/update/password', adminAuthorization, (req, res) => {
    const userId = parseInt(req.params.userId);
    const password = req.body.password;
    const updatedUser = updateUserPasswordById(userId, password);
    updatedUser
        .then((data) => {
            res.json({
                'data': data
            });
        })
        .catch((err) => {
            errors(404, 'Not Found', res);
        });
});

router.patch('/:userId/update/email', adminAuthorization, (req, res) => {
    const userId = parseInt(req.params.userId);
    const email = req.body.email;
    const updatedUser = updateUserEmailById(userId, email);
    updatedUser
        .then((data) => {
            res.json({
                'data': data
            });
        })
        .catch((err) => {
            errors(404, 'Not Found', res);
        });
});
router.delete('/:userId', adminAuthorization, (req, res) => {
    const userId = parseInt(req.params.userId);
    const data = deleteUserById(userId);
    data
        .then((info) => {
            res.sendStatus(204);
        })
        .catch((err) => {
            errors(404, 'Not found', res);
        })
});

router.use((req, res, next) => {
    errors(501, 'Not implemented', res);
});

export default router;