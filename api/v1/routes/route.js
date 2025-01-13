import loginRoute from "./login.route.js";

const route = (app) => {
    const version = "/api/v1";
    app.use(version + "/authen", loginRoute);
}

export default route;