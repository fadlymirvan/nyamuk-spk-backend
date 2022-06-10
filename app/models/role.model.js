module.exports = (sequelize, Sequelize) => {
    return sequelize.define("roles", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
        },
    });
}
