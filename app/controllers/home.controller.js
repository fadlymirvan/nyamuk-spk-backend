const db = require("../models");
const Gejala = db.gejala;

// Calculate Prob Jenis Nyamuk
const sumJenisNyamuk = (items, prop) => {
    return items.reduce((a, b) => {
        return a + b[prop];
    }, 0);
}

// Calculate Prob Gejala
const sumGejala = (data) => {
    console.log(data);
    let gejala = Object.keys(data).filter(function(e) {return data[e];});
    console.log(gejala)
    return gejala.length - 5;
}

// Create Calculate Probability
const prop = (data) => {
    let objData = {};
    objData.gejala = data;
    objData.data_length = data.length;
    objData.jenis_nyamuk_length = 3; // N01, N02, N03
    objData.prob_jenis_nyamuk = {
        pN01: sumJenisNyamuk(data, "N01"),
        pN02: sumJenisNyamuk(data, "N02"),
        pN03: sumJenisNyamuk(data, "N03")
    }

    let arrGejala = [];
    for (let i=1; i<=data.length; i++) {
        let obj = {};
        obj[data[i-1].dataValues.code] = sumGejala(data[i-1].dataValues);
        arrGejala.push(obj);
    }

    objData.prob_gejala = arrGejala;

    return objData;
}

// Retrieve all Bobot from the database.
exports.getAllData = (req, res) => {
    let payload = {};
    Gejala.findAll()
        .then(data => {
            payload = prop(data);
            res.send(payload);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Some error occurred while retrieving data"
            });
        });
};
