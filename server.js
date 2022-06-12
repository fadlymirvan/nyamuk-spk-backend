const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./app/models");
const Role = db.role;

// Init DB
// db.sequelize.sync();
// Development
// db.Sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and Re-Sync DB");
//     const initial = () => {
//         Role.create({
//             id: 1,
//             name: "user"
//         });
//
//         Role.create({
//             id: 2,
//             name: "admin"
//         });
//     }
//     initial();
// });

// Const Variable
const PORT = process.env.PORT || 8080;

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Simple Route
app.get('/', (req, res) => {
    res.json({
        message: "Testing Simple Route",
    });
});
// routes
require("./app/routes/gejala.routes.js")(app);
require("./app/routes/bobot.routes.js")(app);
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/home.routes")(app);
// Set port, listen for request
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`);
});
