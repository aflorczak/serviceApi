import jwt from 'jsonwebtoken';
import customError from './../helpers/errors.js';

const globalAuthorization = (req, res, next, role) => {
    const authorization = req.get('Authorization');
    if (authorization) {
        const token = authorization.split(' ')[1];
        try {
            const payload = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
            console.log(payload);
            if (payload.roles.find(userRole => userRole === role)) {
                res.locals.payload = payload;
                next();
            } else {
                customError(403, `No system privileges: ${role}.`, res);
            }
        } catch(err) {
            customError(401, 'The token has expired.', res);
        }
    } else {
        customError(401, 'No authorization header.', res);
    }
}

export const userAuthorization = (req, res, next) => {
     globalAuthorization(req, res, next, 'ROLE_USER');
}

export const adminAuthorization = (req, res, next) => {
    globalAuthorization(req, res, next, 'ROLE_ADMIN')
}