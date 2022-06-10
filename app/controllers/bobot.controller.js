const db = require("../models");
const Bobot = db.bobot;
const Op = db.Sequelize.Op;


// Retrieve all Bobot from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` }} : null;
    Bobot.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Some error occurred while retrieving data"
            });
        });
};

// Find a single Bobot with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Bobot.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Bobot with id ${id}`
                });
            }
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || `Error retrieving data with id ${id}`
            })
        })
};

// Create and Save a new Bobot
exports.create = (req, res) => {
    console.log(req.body);
    const newBobot = {
        description: req.body.description,
        weight_value: req.body.weight_value,
    };

    Bobot.create(newBobot)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Some error occurred while creating new Bobot"
            });
        });
};
