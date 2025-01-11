const express = require('express');
const router = express.Router();

const controller = require("../controller/authen.controller");

router.post('/login', controller.login);

router.delete('/login', controller.logout);

router.get('/login', controller.refreshToken);

module.exports = router;