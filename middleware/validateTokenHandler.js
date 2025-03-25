const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');


const validateToken = asyncHandler(async(req, res, next) => {
    let token;
    let authHeadr = req.headers.authorization || req.headers.Authorization;
    if(authHeadr && authHeadr.startsWith("Bearer")) {
        token = authHeadr.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOCKEN_SECERT, (err, decoded) => {
            if(err){
                res.status(401);
                throw new Error("User is not authorized");
            }
            req.user = decoded.user;
            next(); 
        });
        if(!token){
            res.status(401);
            throw new Error("User is not authorized or token is missing");
        }
    }
});

module.exports = validateToken;