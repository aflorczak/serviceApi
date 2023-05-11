import jwt from 'jsonwebtoken';

const user = {
    'login': 'florek',
    'password': 'password',
    'roles': [
        "ROLE_USER",
        "ROLE_CLIENT",
        "ROLE_ADMIN"
    ],
    'firstName': 'Adrian',
    'lastName': 'Florczak'
};

// @TODO Refresh token needed.
const getToken = () => {
    const data = {
        'roles': user.roles,
        'firstName': user.firstName,
        'lastName': user.lastName
    };
    return jwt.sign(data, process.env.JWT_PRIVATE_KEY, { expiresIn: 60 * 60 * 24 }); // expires 24h
}

export default getToken;