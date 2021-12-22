module.exports = () => {
    const tenantID = process.env.AZURE_TENANT_ID
    const clientID = process.env.AZURE_CLIENT_ID
    const version = process.env.AZURE_VERSION

    const options = {
        identityMetadata: `https://login.microsoftonline.com/${tenantID}/${version}/.well-known/openid-configuration`,
        issuer: `https://login.microsoftonline.com/${tenantID}/${version}`,
        clientID: clientID,
        audience: clientID,
        validateIssuer: true,
        passReqToCallback: false,
        loggingLevel: "info",
        scope: ["api-access"]
    };

    const BearerStrategy = require('passport-azure-ad').BearerStrategy;

    return new BearerStrategy(options, (token, done) => {
        // Send user info using the second argument
        done(null, {}, token);
    });
}