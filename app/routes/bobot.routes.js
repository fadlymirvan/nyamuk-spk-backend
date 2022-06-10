module.exports = app => {
    const bobot = require("../controllers/bobot.controller.js");
    var router = require("express").Router();

    // Retrieve all Bobot
    router.get("/", bobot.findAll);
    // Retrieve a single Bobot with id
    router.get("/:id", bobot.findOne);
    // Create a new Bobot
    router.post("/", bobot.create);

    app.use('/api/v1/bobot', router);
}
