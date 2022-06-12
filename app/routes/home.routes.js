const home = require("../controllers/home.controller");
module.exports = app => {
    const home = require("../controllers/home.controller.js");
    var router = require("express").Router();

    // Retrieve all Home
    router.get("/", home.getAllData);

    app.use('/api/v1/home', router);
}
