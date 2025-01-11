const express = require('express');
const bodyParser = require('body-parser');

const route = require("./api/v1/routes/route");
const app = express();
const port = 3000;

// parse application/json
app.use(bodyParser.json());

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})