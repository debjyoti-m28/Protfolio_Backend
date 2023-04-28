const express = require('express');
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const startServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use("/hey", (req, res) => {
        res.status(200).json("Hiii Debjyoti");
    })
    app.listen(PORT, ()=> {
       console.log(`Server is running on ${PORT}`);
    });
}

startServer();