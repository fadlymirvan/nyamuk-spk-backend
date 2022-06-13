// Local
// module.exports = {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "root123",
//     DB: "nyamuk_db",
//     dialect: "postgres",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000,
//     },
// };

// Heroku
module.exports = {
    HOST: "ec2-3-226-163-72.compute-1.amazonaws.com",
    USER: "tjmtolsufeamwf",
    PASSWORD: "5e89c26d8bc33abe5012f729df5150cf3cb358fb1c2c748da0b70ebd3aad345e",
    DB: "da583jaqhacke0",
    dialect: "postgres",
    dialectOptions: true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
