module.exports = app => {
    const gejala = require("../controllers/gejala.controler.js");
    var router = require("express").Router();

    // Create a new Gejala
    router.post("/", gejala.create);
    // Retrieve all Gejala
    router.get("/", gejala.findAll);
    // Retrieve a single Gejala with id
    router.get("/:id", gejala.findOne);
    // Update a Gejala with id
    router.put("/:id", gejala.update);
    // Delete a Gejala with id
    router.delete("/:id", gejala.delete);

    app.use('/api/v1/gejala', router);
}
