import clientInfo from "../data/clientInfo.js";

export const authenticateClient = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        const decode = new Buffer (token, "base64").toString("ascii");
        const [clientId, clientSecret] = decode.split(':');
        if (clientId === clientInfo.clientId && clientSecret === clientInfo.clientSecret) {
            next()
        }
    } else {
        res.sendStatus(401);
    }
};