const loginRoute = require("./login.route");

module.exports = (app) => {
    const version = "/api/v1";
    app.use(version + "/authen", loginRoute);
}