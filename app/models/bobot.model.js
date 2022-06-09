module.exports = (sequelize, Sequelize) => {
    return sequelize.define("bobot", {
        description: {
            type: Sequelize.STRING
        },
        weight_value: {
            type: Sequelize.FLOAT
        },
    });
}
