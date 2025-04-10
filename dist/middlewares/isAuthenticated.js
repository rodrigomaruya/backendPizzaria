"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = isAuthenticated;
const jsonwebtoken_1 = require("jsonwebtoken");
function isAuthenticated(req, res, next) {
    const authToken = req.headers.authorization;
    if (!authToken) {
        res.status(401).end();
    }
    const [, token] = authToken.split(" ");
    try {
        //validar o token
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        //recuperar o id do token e colocar dentro de uma variavel user_id dentro do req -----foi criado uma tipagem user_id
        req.user_id = sub;
        return next();
    }
    catch (error) {
        res.status(401).end();
    }
}
