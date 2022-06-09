const db = require("../models");
const Gejala = db.gejala;
const Op = db.Sequelize.Op;

// Create and Save a new Gejala
exports.create = (req, res) => {
    // Validate Request
    if (!req.body.name) {
        res.status(404).send({
            message: "Name can not be empty!",
        });
        return;
    }

    const newGejala = {
        code: req.body.code,
        name: req.body.name,
        N01: req.body.N01,
        N02: req.body.N02,
        N03: req.body.N03,
    };

    Gejala.create(newGejala)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Some error occurred while creating new Gejala"
            });
        });
};
// Retrieve all Gejala from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` }} : null;
    Gejala.findAll({
        where: condition,
        order: [
            ['id', 'ASC'],
        ],
    })
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Some error occurred while retrieving data"
            });
        });
};
// Find a single Gejala with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Gejala.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Gejala with id ${id}`
                });
            }
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || `Error retrieving data with id ${id}`
            })
        })
};
// Update a Gejala by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Gejala.update(req.body, {where: {id: id}})
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Gejala was updated successfully"
                });
            } else {
                res.send({
                    message: `Cannot update Gejala with id ${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error! Cannot update Gejala with id ${id}`
            });
        });

};
// Delete a Gejala with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Gejala.destroy({where: {id: id}})
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Gejala was deleted successfully"
                });
            } else {
                res.send({
                    message: `Cannot delete Gejala with id ${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error! Cannot delete Gejala with id ${id}`
            });
        });
};
