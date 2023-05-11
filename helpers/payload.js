import jwt from "jsonwebtoken";

const getPayloadFromAuthentication = (authorization) => {
    const token = authorization.split(' ')[1];
    return jwt.verify(token, process.env.JWT_PRIVATE_KEY);
}

export default getPayloadFromAuthentication;