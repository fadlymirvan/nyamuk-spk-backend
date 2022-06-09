module.exports = (sequelize, Sequelize) => {
    return sequelize.define("gejala", {
        code: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        N01: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        N02: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        N03: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });
};
