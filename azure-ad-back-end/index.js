const express = require("express");
const morgan = require("morgan");
const passport = require("passport");
const { azureAuth, cors } = require("./middleware");
const bearerStrategy = require('./config/azure-config')()

const app = express();

app.use(morgan('dev'));

app.use(passport.initialize());
passport.use(bearerStrategy);

// enable CORS (for testing only -remove in production/deployment)
app.use(cors);

// API endpoint exposed
app.get("/api", azureAuth(), (req, res) => {
    const claims = {
        'name': req.authInfo['name'],
        'issued-by': req.authInfo['iss'],
        'issued-for': req.authInfo['aud'],
        'scope': req.authInfo['scp'],
        'groups': req.authInfo['groups'],
    }

    console.log(claims)

    // Service relies on the name claim.  
    res.status(200).json(claims);
}
);

app.listen(process.env.PORT, () => {
    console.log("Listening on port " + process.env.PORT);
});
