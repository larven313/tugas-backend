const jwt = require('jsonwebtoken');
const SECRET_KEY = 'UAS';

const auth = (req, res, next) => {
try {
    let token = req.headers.authorization
    if (token) {
        token = token.split(" ")[1];
        let user = jwt.verify(token,SECRET_KEY );
        req.userId = user.id;
    }
    else {
        const data  = {
            message: "Unauthorized User"
        }
        res.status(401).json(data);
    }

    next();
} catch (error) {
    console.log(error);
    const data  = {
        message: "Unauthorized User"
    }
    if (!res.headersSent) {
        res.status(401).json(data);
    }
}
};

module.exports = auth;