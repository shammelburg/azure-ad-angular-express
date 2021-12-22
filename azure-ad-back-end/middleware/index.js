const authenticationMiddleware = require("./authentication-middleware");
const corsMiddleware = require("./cors-middleware");

module.exports = {
    azureAuth: authenticationMiddleware,
    cors: corsMiddleware
}